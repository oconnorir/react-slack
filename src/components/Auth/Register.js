import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
}           from 'semantic-ui-react';

class Register extends Component {
  state = {
    email: '',
    errors: [],
    loading: false,
    password: '',
    passwordConfirmation: '',
    username: ''
  }

  changeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  submitHandler = (evt) => {
    evt.preventDefault();

    if (this.isFormValid()) {
      console.log(`FORM IS VALID`)
      this.setState({
        errors: [], loading: true
      });

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.warn(createdUser);
          this.setState({
            loading: false
          });
        })
        .catch(err => {
          console.error(`Error : ${err}`)
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        })
    }
  }

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = {message: 'Please fill in all sections of this form.'};
      this.setState({
        errors: errors.concat(error)
      })
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = {message: 'Your password is invalid.'}
      this.setState({
        errors: errors.concat(error)
      })
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({username, email, password, passwordConfirmation}) => {
    return !username.length || !email.length || !password.length || !passwordConfirmation.length;
  }

  isPasswordValid = ({password, passwordConfirmation}) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  }


  displayErrors = errors => errors.map((error, idx) => <p key={(idx * Math.random())}>{error.message}</p>)

  inputErrorHandler = (errors, inputName) => {
    return errors.some(error =>
      error.message.toLowerCase().includes(inputName)
    ) ? 'error' : ''
  }


  render () {

    const {
      email,
      errors,
      loading,
      password,
      passwordConfirmation,
      username
    } = this.state

    return (
      <Grid textAlign='center' verticalAlign='middle' className='app'>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for DevChat
          </Header>
          <Form onSubmit={this.submitHandler} size='large'>
            <Segment stacked>
              <Form.Input
                className={this.inputErrorHandler(errors,'username')}
                fluid
                icon='user'
                iconPosition='left'
                name='username'
                onChange={this.changeHandler}
                placeholder='Username'
                type='text'
                value={username} />

              <Form.Input
                className={this.inputErrorHandler(errors,'email')}
                fluid
                icon='mail'
                iconPosition='left'
                name='email'
                onChange={this.changeHandler}
                placeholder='Email'
                type='email'
                value={email} />

              <Form.Input
                className={this.inputErrorHandler(errors,'password')}
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                onChange={this.changeHandler}
                placeholder='Password'
                type='password'
                value={password} />

              <Form.Input
                className={this.inputErrorHandler(errors,'password')}
                fluid
                icon='repeat'
                iconPosition='left'
                name='passwordConfirmation'
                onChange={this.changeHandler}
                placeholder='Password Confirmation'
                type='password'
                value={passwordConfirmation} />

              <Button
                className={loading ? 'loading' : ''}
                color='orange'
                disabled={loading}
                fluid
                size='large'>Submit</Button>

            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>Already a user? <Link to='/login'>Login</Link></Message>

        </Grid.Column>
      </Grid>
    )
  }
}
export default Register;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
  state = {}

  changeHandler = (evt) => {

  }




  render () {
    return (
      <Grid textAlign='center' verticalAlign='middle' className='app'>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
            Register for DevChat
          </Header>
          <Form size='large'>
            <Segment stacked>

              <Form.Input
                fluid
                name='username'
                icon='user'
                iconPosition='left'
                placeholder='Username'
                type='text'
                onChange={this.changeHandler} />

              <Form.Input
                fluid
                name='email'
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                type='email'
                onChange={this.changeHandler} />

              <Form.Input
                fluid
                name='password'
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.changeHandler} />

              <Form.Input
                fluid
                name='passwordConfirmation'
                icon='repeat'
                iconPosition='left'
                placeholder='Password Confirmation'
                type='password'
                onChange={this.changeHandler} />

              <Button color='orange' fluid size='large'>Submit</Button>

            </Segment>
          </Form>

          <Message>Already a user? <Link to='/login'>Login</Link></Message>

        </Grid.Column>
      </Grid>
    )
  }
}
export default Register;

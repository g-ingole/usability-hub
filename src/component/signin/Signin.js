import logo from '../../assets/logo.png'
import { Input, Switch, FormControl, FormLabel } from '@chakra-ui/react'
import '../signin/signin.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Signin() {
  return (
    <div>
      <nav className='signin-navbar'>
        <img alt='logo' className='sigin-page-logo' src={logo} />
      </nav>
      <div className="container-fluid signin-div">
        <div className="row form-div">
          <h3 className='text-center'>👋 Welcome Back</h3>
          <div className='form'>
            <form action="/action_page.php">
              <label for="Email">Email address *</label>
              <Input className='input' />
              <div className='passwrd-div'>
                <div className='label-div'>
                  <label for="Password">Password</label>
                  <a href='/'>Forgot your password?</a>
                </div>
                <Input className='input' /></div><br />
              <div className='remember-me'>
                <FormControl display='flex' alignItems='center'>
                  <Switch id='email-alerts' />
                  <div style={{ paddingLeft: '10px' }}>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                      Remember me
                    </FormLabel>
                  </div>
                </FormControl>
                <div class="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
              </div>
              <button type="Button" className=' btn-primary sub-btn'>Sign in</button>
            </form>
            <div className='hr'> <p >OR</p></div>
            <div className='icon-btn'>
              <button type="button" class="login-with-google-btn" >
                Sign in with Google
              </button>
            </div>
            <div className="anker-div">
              Sign in with SAML
            </div>
          </div>
        </div>
        <div className='do-not-account text-center'>
          <p>Don’t have an account?
            <NavLink to='/signup' id='signup-link'>Sign up</NavLink></p>
        </div>
      </div>

    </div>
  )
}

export default Signin

import { GridItem, Grid, Input } from '@chakra-ui/react';
import logo from '../../assets/logo.png'
import '../signup/signup.css'
import godaddy from '../../assets/godday.svg'
import React from 'react'
import { NavLink } from 'react-router-dom';

function Signup() {
  return (
    <div> <nav className='signup-navbar'>
      <img alt='logo' className='signup-page-logo' src={logo} />
      <NavLink to='/signin' className='signin-link'>Sign in</NavLink>
    </nav>
      <div className="container-fluid signup-container">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={3}
        >
          <GridItem height='700px'>
            <h1>Sign up with UsabilityHub</h1>
            <div className="signup-form">
              <form action="/action_page.php">

                <label for="fullName">Full name *</label>
                <Input className='input' />
                <div className='organisation'>
                  <label for="oraganistion">Organisation</label>
                  <Input className='input' />
                </div>
                <div className="emal">
                  <label for="Email">Email address *</label>
                </div>
                <Input className='input' />
                <div className='passwrd-div'>
                  <div className='label-div'>
                    <label for="Password">Password</label>
                    <a href='/'>Forgot your password?</a>
                  </div>
                  <Input className='input' /></div><br />
                <div class="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
                <div className='terms-condition'>
                  <p>By signing up, you agree to UsabilityHub’s <span className='terms-privacy'>Terms of Service <i class="fa-solid fa-arrow-up-right-from-square" className='direct-logo'></i></span>  and <span className='terms-privacy'>Privacy Policy <i class="fa-solid fa-arrow-up-right-from-square " className='direct-logo'></i></span>.</p>
                </div>
                <button type="Button" className=' btn-primary create-btn'>Sign in</button>
              </form>
              <div className='hr'> <p >OR</p></div>
              <div className='icon-btn'>
                <button type="button" class="login-with-google-btn" >
                  Sign in with Google
                </button>
              </div>
            </div>
          </GridItem>
          <GridItem height='500px'>
            <div className='signup-page-head'>
              <h1>Join over 100,000 designers, marketers, researchers, and UX professionals.</h1>
            </div>
            <div className='signupPage-logo-div'>
              <div className='d-flex' >
                <img alt='/' src={require('../../assets/adobe.png')} />
                <img alt='/' src={require('../../assets/amzon.png')} />
                <img alt='/' src={require('../../assets/asos.png')} />
                <img alt='/' src={require('../../assets/Deloitte.png')} />
              </div>
              <div className='d-flex'>
                <img alt='/' src={require('../../assets/ebay.png')} />
                <img alt='/' src={godaddy} />
                <img alt='/' src={require('../../assets/google.png')} />
                <img alt='/' src={require('../../assets/hsc.png')} />
              </div>
              <div className='d-flex'>
                <img alt='/' src={require('../../assets/theEco.png')} />
                <img alt='/' src={require('../../assets/hubspot.png')} />
                <img alt='/' src={require('../../assets/ogilvy.png')} />
                <img alt='/' src={require('../../assets/Tripadvisor.png')} />
              </div>
            </div>
          </GridItem>
        </Grid>
      </div>
    </div>
  )
}

export default Signup;

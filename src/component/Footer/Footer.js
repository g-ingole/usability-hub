import { GridItem, Grid } from '@chakra-ui/react';
import React from 'react'
import '../Footer/footer.css'
import logo from '../../assets/logo.png'


function Footer() {
    return (
        <div>
            <div className="container-fluid pt-5">
                <div className="row footer">
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={6}
                    >
                        <GridItem height='300px' className='footer-content'>
                            <img alt='logo' className='footer-logo' src={logo} />
                        </GridItem>
                        <GridItem height='300px' className='footer-content'>
                            <h5 style={{ color: '#183b56' }}>Product</h5>
                            <div className='footer-links'>
                                <h6><a href='/'>Overview</a></h6>
                                <h6><a href='/'>Pricing</a></h6>
                                <h6><a href='/'>UsabilityHub panel</a></h6>
                                <h6><a href='/'>Customers</a></h6>
                                <h6><a href='/'>Status page</a></h6>
                                <h6><a href='/'>Sign up</a></h6>
                                <h6><a href='/'>Book a demo</a></h6>
                            </div>
                        </GridItem>
                        <GridItem height='300px' className='footer-content'>
                            <h5 style={{ color: '#183b56' }}>Methodologies</h5>
                            <div className='footer-links'>
                                <h6><a href='/'>Card sorting</a></h6>
                                <h6><a href='/'>Prototype testing</a></h6>
                                <h6><a href='/'>First click tests</a></h6>
                                <h6><a href='/'>Preferance tests</a></h6>
                                <h6><a href='/'>Five Second tests</a></h6>
                                <h6><a href='/'>Design surveys</a></h6>
                            </div>
                        </GridItem>
                        <GridItem height='300px' className='footer-content'>
                            <h5 style={{ color: '#183b56' }}>Resources</h5>
                            <div className='footer-links'>
                                <h6><a href='/'>Blog</a></h6>
                                <h6><a href='/'>Examples</a></h6>
                                <h6><a href='/'>Testing guides</a></h6>
                                <h6><a href='/'>Help center</a></h6>
                                <h6><a href='/'>Contact</a></h6>
                                <h6><a href='/'>Careers</a></h6>
                            </div>
                        </GridItem>
                    </Grid>
                </div>
            </div>
            <div className="row footer-banner">
                <div className='footer-banner-content'>
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={4}
                    >
                        <GridItem height="50px">
                            Privacy policy
                        </GridItem>
                        <GridItem >Terms & conditions</GridItem>
                        <GridItem  >Security information</GridItem>
                        <GridItem  >
                            <i class="fa-brands fa-square-facebook p-2"></i>
                            <i className="fa-brands fa-twitter p-2"></i>
                            <i className="fa-brands fa-linkedin p-2" ></i>
                            <i className="fa-brands fa-youtube p-2" aria-hidden="true"></i>
                        </GridItem>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Footer;

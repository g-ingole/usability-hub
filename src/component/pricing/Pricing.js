import React from 'react'
import { Button, GridItem, Grid, Tooltip } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'
import google from '../../assets/google.png'
import amazon from '../../assets/amzon.png'
import airtable from '../../assets/airtable.png'
import taskrabbit from '../../assets/taskrabbit.png'
import box from '../../assets/box.png'
import godaddy from '../../assets/godday.svg'
import asana from '../../assets/asana.png'
import girdimage8 from '../../assets/gridimage8.png'
import girdimage9 from '../../assets/gridimage9.png'
import girdimage10 from '../../assets/gridimage10.png'
import timeicon1 from '../../assets/timeicon1.svg'
import timeicon2 from '../../assets/timeicon2.svg'
import timeicon3 from '../../assets/timeicon3.svg'
import pencillogo1 from '../../assets/pencilogo1.svg'
import pencillogo2 from '../../assets/pencilogo2.svg'
import usabilitylogo from '../../assets/usabilitylogo.png'


import '../pricing/pricing.css'
import Header from '../Header/Header'



function Pricing() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row text-center pre-heading" style={{ color: "#577392" }}><h6>PRICING</h6></div>
        <div className="row text-center main-heading" ><h1 style={{ fontSize: '48px' }}>Great value all around</h1></div>
        <div className="row text-center main-heading-div"><div className='heading-para'><p>Our platform is priced to suit teams of all sizes. Collecting responses from our participant panel is priced separately on all plans –<a href='/' className='heading-link'>see panel pricing below.</a></p></div></div>
        <div className="row "><div className='btn-div'>
          <Button size='lg' colorScheme='blue900' className='annual-btn'>
            Annual billing
          </Button>
          <Button colorScheme='blue900' size='lg' variant='outline' style={{ border: "2px solid" }}>
            Monthly billing
          </Button>
        </div>
        </div>
        <div className="row pt-5">
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={0}
          >
            <GridItem height="400px" width='280px'>
              <div className='price-card'>
                <h3>Free</h3>
                <div className='price-div'>
                  <h1 style={{ fontSize: "50px" }}>$0</h1><small style={{ fontSize: '16px' }}>/month</small>
                </div>
                <div className='price-card-descrip'>Initiate product research in your business — for free.</div>
                <hr />
                <div className='price-card-tag pt-2'>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>3 seats</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Unlimited tests</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>15 responses per link</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Test length up to 2 mins</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Live chat support</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Panel access</span></div>
                </div>
                <div className="signup-div" >
                  <div >
                    <Button size='lg' colorScheme='blue900' width='250px' className='signup-btn'>
                      Sign up
                    </Button>
                  </div>
                </div >
              </div>
            </GridItem>
            <GridItem height="400px" width='280px' >
              <div className='price-card'>
                <h3>Basic</h3>
                <div className='price-div'>
                  <h1 style={{ fontSize: "50px" }}>$75</h1><small style={{ fontSize: '16px' }}>/month</small>
                </div>
                <div className='price-card-descrip'>Boost your research capabilities to build better experiences.</div>
                <hr />
                <div className='price-card-tag pt-2'>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>3 seats</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Everything on Free plus</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Unlimited responses</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Test length up to 5 mins</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>CSV export</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Remove our branding</span></div>
                </div>
                <div className="signup-div" >
                  <div >
                    <Button size='lg' colorScheme='blue900' width='250px' className='signup-btn'>
                      Sign up
                    </Button>
                  </div>
                </div >
              </div>
            </GridItem>
            <GridItem height="400px" width='280px'>
              <div className='price-card1'>
                <div className='popular'>Popular</div>
                <h3>Pro</h3>
                <div className='price-div'>
                  <h1 style={{ fontSize: "50px" }}>$175</h1><small style={{ fontSize: '16px' }}>/month</small>
                </div>
                <div className='price-card-descrip'>Scale research across your team with advanced features.</div>
                <hr />
                <div className='price-card-tag pt-2'>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>5 seats</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Everything on Basic plus</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Conditional logic</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Unlimited test length</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Custom branding</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Team management</span></div>
                </div>
                <div className="signup-div" >
                  <div >
                    <Button size='lg' bg='white' width='250px' className='signup-btn1'>
                      Sign up
                    </Button>
                  </div>
                </div >
              </div>
            </GridItem>
            <GridItem height="600px" width='280px'>
              <div className='price-card'>
                <h3>Enterprice</h3>
                <div className='price-div'>
                  <h1 style={{ fontSize: "50px" }}>Custom</h1>
                </div>
                <div className='price-card-descrip'>Build org-wide research capability for maximum impact.</div>
                <hr />
                <div className='price-card-tag pt-2'>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Everything on Pro plus</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Custom password policy</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>SAML SSO</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Security audits</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Priority support</span></div>
                  <div className='checkin'><i class="fa-solid fa-circle-check"></i> <span className='tags'>Custom terms</span></div>
                </div>
                <div className="signup-div" >
                  <div >
                    <Button size='lg' colorScheme='blue900' width='250px' className='signup-btn'>
                      Talk to us
                    </Button>
                  </div>
                </div >
              </div>
            </GridItem>

          </Grid>
        </div>
        <div className="row pt-5">
          <Button size='lg' bg='white' width='180px' fontSize='small' fontWeight='bold' className='compare-btn'>
            Compare all features
          </Button>
        </div>
        <div className="row pt-5 text-center">
          <p style={{ color: '#183b56', fontSize: '18px', fontWeight: '600' }}>Join over 280,000 marketers, researchers, designers and product managers</p>
        </div>
        <div className="row comp-logo">
          <img alt='/' src={amazon} className='small-logo1' />
          <img alt='/' src={google} className='small-logo1' />
          <img alt='/' src={taskrabbit} className='small-logo1' />
          <img alt='/' src={airtable} className='small-logo1' />
          <img alt='/' src={box} className='small-logo1' />
          <img alt='/' src={godaddy} className='small-logo1' />
          <img alt='/' src={asana} className='small-logo1' />

        </div>
        <div className="row panel-div">
          <div className='panel-div-heading text-center'>
            <h2 style={{ color: '#183b56' }}>Panel pricing</h2>
            <div className='panel-div-para '><p className='text-center'>Our 530,000+ participant panel lets you get responses from your target demographic in minutes. No hidden fees.</p></div>
          </div>
          <div className="row pt-5 panel-img-div">
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={5}
            >

              <GridItem height="400px" >
                <div className='panel-img'>
                  <img src={girdimage8} alt='/' width="200px" />

                  <h4 className='panel-img-heading'>Guaranteed high-quality panelist responses</h4>

                </div>

              </GridItem>
              <GridItem height="400px" >
                <div className='panel-img'>

                  <img src={girdimage9} alt='/' width="200px" />
                  <h4 className='panel-img-heading'>Free device type and demographic targeting</h4>
                </div>

              </GridItem>

              <GridItem height="400px" >

                <div className='panel-img'>

                  <img src={girdimage10} alt='/' width="200px" />
                  <h4 className='panel-img-heading'>Unique panelists across multiple tests (variation sets)</h4>
                </div>
              </GridItem>

            </Grid>
          </div>
          <div className="row pt-3">
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap={2}
            >
              <GridItem height='300px'>
                <div className='test-div'>
                  <h3 className='test-div-head'>
                    How much does it cost to order responses?
                  </h3>
                  <p style={{ color: '#577592', fontWeight: '400' }}><span style={{ color: '#183b56' }}> Starting at US$1 per complete,</span> panel pricing is based on the duration of your tests.</p>
                  <p style={{ color: '#577592', fontWeight: '400' }}>The longer the test, the more each response costs. For example:</p>
                </div>
              </GridItem>
              <GridItem height='300px' width='280px'>
                <div className='test-card'>
                  <h2 style={{ color: "#183b56", fontSize: '24px' }}>Short tests</h2>
                  <div className='test-card-time'>5 questions, 1–3 minutes long</div>
                  <div className='test-card-img'>  <img alt='timeicon' src={timeicon1} /></div>
                  <div className='test-card-price'>$2 per complete</div>
                </div>
              </GridItem>
              <GridItem height='300px' width='280px'>
                <div className='test-card'>
                  <h2 style={{ color: "#183b56", fontSize: '24px' }}>Medium tests</h2>
                  <div className='test-card-time'>10 questions, 3–5 minutes long</div>
                  <div className='test-card-img'>  <img alt='timeicon' src={timeicon2} /></div>
                  <div className='test-card-price'>$4 per complete</div>
                </div>
              </GridItem>
              <GridItem height='300px' width='280px'>
                <div className='test-card'>
                  <h2 style={{ color: "#183b56", fontSize: '24px' }}>Longer tests</h2>
                  <div className='test-card-time'>15 questions, 5–7 minutes long</div>
                  <div className='test-card-img'>  <img alt='timeicon' src={timeicon3} /></div>
                  <div className='test-card-price'>$6 per complete</div>
                </div>
              </GridItem>

            </Grid>
          </div>
        </div>
        <div className="row">
          <div class="fixTableHead">
            <table>
              <thead>
                <tr>
                  <th>Features
                    <h6 style={{ paddingTop: '50px', color: '#183b56' }}>Collaboration</h6>
                  </th>
                  <th>
                    <div className='table-head-div'>
                      <h6 style={{ color: '#183b56', fontSize: '24px', fontWeight: '600' }}>Free</h6>
                      <Button size='lg' colorScheme='blue900' className='table-btn'>Sign up</Button>
                    </div>
                  </th>
                  <th>
                    <div className='table-head-div'>
                      <h6 style={{ color: '#183b56', fontSize: '24px', fontWeight: '600' }}>Basic</h6>
                      <Button size='lg' colorScheme='blue900' className='table-btn'>Sign up</Button>
                    </div>
                  </th>
                  <th>
                    <div className='table-head-div1'>
                      <h6 style={{ color: '#183b56', fontSize: '24px', fontWeight: '600', backgroundColor: '#ebf2fa' }}>Pro</h6>
                      <Button size='lg' colorScheme='blue900' className='table-btn'>Sign up</Button>
                    </div>
                  </th>
                  <th>
                    <div className='table-head-div'>
                      <h6 style={{ color: '#183b56', fontSize: '24px', fontWeight: '600' }}>Enterprice</h6>
                      <Button size='lg' colorScheme='blue900' className='table-btn'>Sign up</Button>
                    </div>
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Included seats <Tooltip label='People that can create and edit tests on your account.' fontSize='sm'>
                    <WarningIcon />
                  </Tooltip></td>
                  <td>3 seats</td>
                  <td>3 seats</td>
                  <td >5 seats</td>
                  <td>Custom</td>

                </tr>
                <tr>
                  <td>Maximum seats <Tooltip label='You may purchase additional seats on paid plans. This is the maximum number of seats you can have on each plan.' fontSize='sm'>
                    <WarningIcon />
                  </Tooltip></td>
                  <td>3 seats</td>
                  <td>10 seats</td>
                  <td>15 seats</td>
                  <td>Custom</td>

                </tr>
                <tr>
                  <td>Viewer seats <Tooltip label='People that can view and comment on tests.' fontSize='sm'>
                    <WarningIcon />
                  </Tooltip></td>
                  <td></td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>

                </tr>
                <tr>
                  <td>Team managemnet <Tooltip label='Ability to set role based permissions per seat.' fontSize='sm' style={{ paddingLeft: '5px' }}>
                    <WarningIcon />
                  </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>

                </tr>

                <tr>
                  <td style={{ color: '#183b56' }}>Usage</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Self recruited responses <Tooltip label='The number of self recruited responses you can collect and view across your tests. Additional fees apply when recruiting from our panel.' fontSize='sm' style={{ paddingLeft: '5px' }}>
                    <WarningIcon />
                  </Tooltip></td>
                  <td>15 per Test</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Panel responses
                    <Tooltip label='The number of self recruited responses you can collect and view across your tests. Additional fees apply when recruiting from our panel.' fontSize='sm' style={{ paddingLeft: '10px' }}>
                      <WarningIcon />
                    </Tooltip>
                  </td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Active Tests
                    <Tooltip label='The number of tests you can simultaneously access and recruit on.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Test duration
                    <Tooltip label='The number of sections and questions you can add to each test. We calculate test durations for you as you build your test.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td>Up to 2 mins</td>
                  <td>Up to 5 mins</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>

                <tr>
                  <td style={{ color: '#183b56' }}>Test Bulider
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Prototype tests with Figma</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>

                </tr>
                <tr>
                  <td>First click tests</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Preference tests</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Surveys</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Five second tests</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Open and closed card sorting</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Templates library</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Multi language</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>

                <tr>
                  <td>Variation sets
                    <Tooltip label='Run the same test on different versions of a design.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>CSV exports
                    <Tooltip label='Export results in CSV format for external analysis.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>CSV exports
                    <Tooltip label='Export results in CSV format for external analysis.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Remove our branding</td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Custom branding
                    <Tooltip label='Upload your logo and colors so your tests match your brand.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Conditional logic
                    <Tooltip label='Hide or show test sections and questions based on how participants answer.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>

                <tr>
                  <td>Hidden feilds
                    <Tooltip label='Capture additional participant information by passing them in as hidden fields via URLs.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td style={{ color: '#183b56' }}>Recruitment</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Panel accces
                    <Tooltip label='Access our global panel of 530k+ participants. Additional fees apply when recruiting from our panel.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Recruitment link
                    <Tooltip label='Invite your own participants using unique recruitment links.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>

                <tr>
                  <td>Kiosk mode
                    <Tooltip label='Set up tests to conduct in-person research sessions.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Recruitment link demographic questions
                    <Tooltip label='Ask your own participants demographic questions before the test starts to filter results on.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>

                <tr>
                  <td>Limit recruitment link responses
                    <Tooltip label='Automatically turn off recruitment links when you hit your desired participant quota' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Post test redirect
                    <Tooltip label='Redirect your self recruited participants to a URL after they complete a test.' fontSize='sm'>
                      <WarningIcon />
                    </Tooltip></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td style={{ color: '#183b56' }}>Support</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Live chat Support</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Priority support</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td style={{ color: '#183b56' }}>Security & compliance</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>SOC 2 compliant</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>GDPR compliant</td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>

                <tr>
                  <td>Security audits</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
                <tr>
                  <td>Single sign-on (SSO)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><i class="fa-solid fa-circle-check"></i></td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>



        <div className="row faq-div mt-5">
          <h2 style={{ textAlign: 'center', color: '#183b56' }}>Frequently Asked Questions</h2>
          <div className='que-div pt-5'>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
              gap={3}
            >
              <GridItem height='700px'>
                <div className='div1'>
                  <div className='que'>
                    <h5>Are panel responses included in my subscription?</h5>
                  </div>
                  <p className='answer'>No. The UsabilityHub panel is priced separately. You can pay to recruit from our panel as you go or you can purchase bulk panel credits at a discount to use as you need. Recruiting your own users, however, is free.</p>
                </div>

                <div className='div1 pt-3'>
                  <div className='que'>
                    <h5>How does the Free plan work?</h5>
                  </div>
                  <p className='answer'>The Free plan has no ongoing fees. It includes a limited feature set and you can only run tests up to 2 minutes long. You can still recruit from the panel or your own audience and use all test types.</p>
                </div>


                <div className='div1 pt-3'>
                  <div className='que'>
                    <h5>What’s included in the Enterprise plan?</h5>
                  </div>
                  <p className='answer'>The Enterprise plan is suited to companies with sophisticated procurement needs. We can provide SLAs, perform security audits, review and implement custom terms, and make arrangements for larger teams. Please <a href='/' style={{ color: '#2294ed', textDecoration: 'underline' }}>contact sales</a>  to schedule a short exploratory conversation.</p>
                </div>


                <div className='div1 pt-3'>
                  <div className='que'>
                    <h5>Is UsabilityHub GDPR compliant?</h5>
                  </div>
                  <p className='answer'>Yes. As a Data Controller, UsabilityHub's <a href='/' style={{ color: 'blue', textDecoration: 'underline' }}>privacy policy</a>  affords all users of our software (not only EU citizens) the rights stipulated by the GDPR. You may also sign our Data Processing Schedule to ensure your own GDPR compliance when using UsabilityHub as a Data Processor. Please visit <a href='/' style={{ color: 'blue', textDecoration: 'underline' }}>this article</a> for more information.</p>
                </div>
              </GridItem>
              <GridItem height='700px'>
                <div className='div1 pt-3'>
                  <div className='que'>
                    <h5>Is there a minimum subscription term?</h5>
                  </div>
                  <p className='answer'>You can subscribe to the Pro plan and Basic plan on a monthly or annual basis. When paying annually, you can add collaborators at any time and will be charged a pro-rata amount for their seat. The Free plan has no subscription term or ongoing fees.</p>
                </div>

                <div className='div1 pt-3'>
                  <div className='que'>
                    <h5>What are credits?</h5>
                  </div>
                  <p className='answer'>Credits can be used to recruit participants from the UsabilityHub panel. You can purchase credits and store them on your account to use as needed. They never expire and there are discounts when <a href='/' style={{ color: '##2294ed', textDecoration: 'underline' }}>purchasing in bulk.</a> </p>
                </div>


                <div className='div1 pt-3'>
                  <div className='que'>
                    <h5> What are the payment options?</h5>
                  </div>
                  <p className='answer'>Secure payments with Visa, Mastercard, and AMEX. Manual invoicing is available on Annual and Enterprise plans. Contact us for details.</p>
                </div>
              </GridItem>
            </Grid>
          </div>
        </div>

        <div className="row pt-5">
          <h1 style={{ textAlign: 'center', color: '#183b56' }}>UsabilityHub for good</h1>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={3}
          >
            <GridItem height='300px'>
              <div className='contact-us-div'>
                <img alt='/' className='pencillogo1' src={pencillogo1} />
                <div className='contact-us-para'>
                  <h5 style={{ color: '#183b56' }}>For students and educators</h5>
                  <div style={{ padding: '10px', color: '#577592', fontWeight: '400' }}>
                    <p>We’re big believers in the value of research in design education so we provide a 25% discount on our subscriptions for all students and educators.</p>
                  </div>
                  <Button className='mt-3' colorScheme='telegram'>Contact us</Button>
                </div>
              </div>
            </GridItem>
            <GridItem height='300px'>
              <div className='contact-us-div'>
                <img alt='/' className='pencillogo1' src={pencillogo2} />
                <div className='contact-us-para'>
                  <h5 style={{ color: '#183b56' }}>For non-profits and charities</h5>
                  <div style={{ padding: '10px', color: '#577592', fontWeight: '400' }}>
                    <p>We pride ourselves on giving as much as we can to philanthropic efforts. As part of that we offer charities and non-profits a 25% discount on our subscriptions.
                      Contact us</p>
                  </div>
                  <Button colorScheme='telegram'>Contact us</Button>
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
        <div className="row pt-5 research-div " >
          <div className='research-logo'>
            <img alt='/' src={usabilitylogo} />
          </div>
          <h1 className='text-center pt-3' style={{ color: '#183b56' }}>Start scaling your user research today.</h1>
          <p style={{ color: '#577592', textAlign: 'center', fontSize: '20px', fontWeight: '400' }}>Take the guesswork out of design decisions.</p>
          <div className='button-div'>
            <Button className='btn1' colorScheme='telegram'>Sign up</Button>
            <small style={{ fontSize: '20px', fontWeight: '700', color: '#577592' }}>or</small>
            <Button className='btn1' colorScheme='telegram'>Contact us</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing;
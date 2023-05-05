import { GridItem, Grid, Wrap, WrapItem, Avatar, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react'
import gridimage4 from '../../assets/gridimage4.jpeg'
import gridimage5 from '../../assets/gridimage5.jpg'
import avatar2 from '../../assets/avatar2.png'
import unilever from '../../assets/unilever.png'
import staples from '../../assets/staples.png'
import harry from '../../assets/harry.png'
import walmart from '../../assets/walmart.png'
import casper from '../../assets/casper.png'
import avatar4 from '../../assets/avatar4.png'
import google from '../../assets/google.png'
import amazon from '../../assets/amzon.png'
import airtable from '../../assets/airtable.png'
import box from '../../assets/box.png'
import godaddy from '../../assets/godday.svg'
import asana from '../../assets/asana.png'
import gridimage6 from '../../assets/gridimage6.jpeg'
import carter from '../../assets/carter.png'
import avatar5 from '../../assets/avatart5.png'
import gridimage7 from '../../assets/gridimage7.jpg'
import avatar3 from '../../assets/avatar3.png'

import eco from '../../assets/eco.png'


import '../Customer/customer.css'
import Header from '../Header/Header';
const Customer = () => {
  return (

    <div className='container-fluid'>
      <Header />
      <div className="row p-3">
        <h1>Our Customers</h1>
        <p className='text-muted' style={{ fontSize: "20px" }}>Leading companies from around the world are making smart design decisions with UsabilityHub</p>
      </div>
      <div className="row p-4">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={1}
        >
          <GridItem height='200px'>
            <h2>Consumer goods & services</h2>
            <img alt='gridimage4' src={gridimage4} className='grid-img' />
          </GridItem>
          <GridItem height='400px' className=''>
            <div className='testimo-grid'>
              <img alt=' chartmogul' className='testmonial-logo1' src={require('../../assets/philips.png')} />
              <div className='testimonial1'>
                <div className='testimonial-para'>
                  <p>We use UsabilityHub tests to help us make decisions for various projects. From web and mobile design to marketing activities.</p>
                </div>
                <Wrap>
                  <WrapItem>
                    <Avatar name='Rick van de Ven' src={avatar2} />
                    <div className='person-name1'>
                      <h6>Rick van de Ven</h6>
                      <p>Digital Marketing Analyst</p>
                    </div>
                  </WrapItem>
                </Wrap>
              </div>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                Read case study
              </Button>
            </div>
          </GridItem>
        </Grid>
      </div>
      <div className="row p-5">
        <div className='logo-div'>
          <img alt='phillips' src={require('../../assets/philips.png')} />
          <img src={unilever} alt="unilever" />
          <img src={staples} alt="staples" />
          <img src={harry} alt="harry" />
          <img src={walmart} alt="walmart" />
          <img src={casper} alt="casper" />
        </div>

      </div>


      <div className="row p-4">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={1}
        >
          <GridItem height='200px'>
            <h2>Technology & SaaS</h2>
            <img alt='gridimage5' src={gridimage5} className='grid-img' />
          </GridItem>
          <GridItem height='400px' className=''>
            <div className='testimo-grid'>
              <img alt=' chartmogul' className='testmonial-logo1' src={require('../../assets/yelp.png')} />
              <div className='testimonial1'>
                <div className='testimonial-para'>
                  <p>UsabilityHub is a game changer. No project is too small or too large – their platform can scale accordingly.</p>
                </div>
                <Wrap>
                  <WrapItem>
                    <Avatar name='Luther Lowe' src={avatar4} />
                    <div className='person-name1'>
                      <h6>Luther Lowe</h6>
                      <p>VP Public Policy & Gov. Affairs</p>
                    </div>
                  </WrapItem>
                </Wrap>
              </div>
            </div>
          </GridItem>
        </Grid>
      </div>
      <div className="row p-5">
        <div className='logo-div2'>
          <img alt='amazon' src={amazon} />
          <img src={google} alt="Google" />
          <img src={airtable} alt="airtable" />
          <img src={box} alt="box" />
          <img src={godaddy} alt="godaddy" />
          <img src={asana} alt="asana" />
        </div>
      </div>

      <div className="row p-4">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={1}
        >
          <GridItem height='200px'>
            <h2>Digital & media agencies</h2>
            <img alt='gridimage6' src={gridimage6} className='grid-img' />
          </GridItem>
          <GridItem height='400px' className=''>
            <div className='testimo-grid'>
              <img alt=' carter' className='testmonial-logo1' src={carter} />
              <div className='testimonial1'>
                <div className='testimonial-para'>
                  <p>Usability testing is crucial and perfect in trying to help solve problems before they occur</p>
                </div>
                <Wrap>
                  <WrapItem>
                    <Avatar name='James Noble' src={avatar5} />
                    <div className='person-name1'>
                      <h6>James Noble</h6>
                      <p>Chief Design Officer</p>
                    </div>
                  </WrapItem>
                </Wrap>
              </div>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                Read case study
              </Button>
            </div>
          </GridItem>
        </Grid>
      </div>
      <div className="row p-5">
        <div className='logo-div3'>
          <img alt='ogilvy' src={require('../../assets/ogilvy.png')} />
          <img src={require('../../assets/mccan.png')} alt="mccan" />
          <img src={require('../../assets/isobar.png')} alt="isobar" />
          <img src={require('../../assets/mullen.png')} alt="mullen" />
          <img src={require('../../assets/sapient.png')} alt="sapient" />
          <img src={require('../../assets/akqa.png')} alt="akqa" />
        </div>
      </div>


      <div className="row p-4">
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={1}
        >
          <GridItem height='200px'>
            <h2>Publishing & broadcasting</h2>
            <img alt='gridimage7' src={gridimage7} className='grid-img' />
          </GridItem>
          <GridItem height='400px' className=''>
            <div className='testimo-grid'>
              <img alt=' carter' className='testmonial-logo1' src={eco} />
              <div className='testimonial1'>
                <div className='testimonial-para'>
                  <p>Adopting UsabilityHub got us into habit of asking our users questions before locking in decisions.</p>
                </div>
                <Wrap>
                  <WrapItem>
                    <Avatar name='Ron Diorio' src={avatar3} />
                    <div className='person-name'>
                      <h6>Ron Diorio</h6>
                      <p>VP Innovation & New Products</p>
                    </div>
                  </WrapItem>

                </Wrap>
              </div>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                Read case study
              </Button>
            </div>
          </GridItem>
        </Grid>
      </div>
      <div className="row p-5">
        <div className='logo-div4'>
          <img alt='bbc' src={require('../../assets/bbc.png')} />
          <img src={require('../../assets/cbc.png')} alt="cbc" />
          <img src={require('../../assets/news.png')} alt="news" />
          <img src={require('../../assets/nbc.png')} alt="nbc" />
          <img src={require('../../assets/tele.png')} alt="tele" />
        </div>
      </div>
      <div className="row text-center pre-heading pt-5" ><h1>Start testing today</h1></div>
      <div className="row text-center  text-muted pt-5" ><h4>Take the guesswork out of design decisions</h4>
      </div>
      <div className='get-btn'>
        <Button colorScheme='twitter' className='twitt-btn mt-4'>
          Get started
        </Button>
      </div>
    </div>
  )
}

export default Customer

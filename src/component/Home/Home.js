import React from 'react'
import { SimpleGrid, Box, Center, GridItem, Grid, Wrap, WrapItem, Avatar } from '@chakra-ui/react'
import { Button, AbsoluteCenter, } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import heroimg from '../../assets/heroimg.jpeg'
import google from '../../assets/google.png'
import amazon from '../../assets/amzon.png'
import airtable from '../../assets/airtable.png'
import taskrabbit from '../../assets/taskrabbit.png'
import box from '../../assets/box.png'
import godaddy from '../../assets/godday.svg'
import asana from '../../assets/asana.png'
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.jpg'
import logo3 from '../../assets/logo3.jpg'
import logo4 from '../../assets/logo4.jpg'
import logo5 from '../../assets/logo5.jpg'
import logo6 from '../../assets/logo6.jpg'
import gridimage1 from '../../assets/gridimage1.png'
import chartmogul from '../../assets/chartmogul.png'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import philips from '../../assets/philips.png'
import heroimg1 from '../../assets/heroimg1.png'
import heroimg2 from '../../assets/heroimg2.png'
import eco from '../../assets/eco.png'
import avatar3 from '../../assets/avatar3.png'
import backimg1 from '../../assets/backimg1.jpg'
import backimg2 from '../../assets/backimg2.jpg'
import backimg3 from '../../assets/backimg3.jpg'
import backimg4 from '../../assets/backimg4.jpg'
import gridimage3 from '../../assets/gridimage3.png'
import gridimage2 from '../../assets/gridimage2.png'




import '../Home/Home.css'
import Header from '../Header/Header';



const Home = () => {

    return (
        <>
            <Header />
            <div className='container'>
                <Grid
                    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                    gap={6}
                >
                    <GridItem height="400px">
                        <div className='box-div'>
                            <Box position='relative' height='400px' className=''>
                                <AbsoluteCenter className='child-div'>
                                    <h1 className='hero-heading'>Design confidently.</h1>
                                    <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                                    <Button colorScheme='messenger'>Get Started</Button>
                                </AbsoluteCenter>
                            </Box>
                        </div>
                    </GridItem>
                    <GridItem height="400px">

                        <Box height='80px'>
                            <img alt='heroimg' src={heroimg} />
                        </Box>
                    </GridItem>
                </Grid>

                <div className='row para' style={{ marginTop: "50px" }}>
                    <p>The world’s best companies rely on UsabilityHub to make better design decisions</p>
                    <img alt='/' src={amazon} className='small-logo' />
                    <img alt='/' src={google} className='small-logo' />
                    <img alt='/' src={taskrabbit} className='small-logo' />
                    <img alt='/' src={airtable} className='small-logo' />
                    <img alt='/' src={box} className='small-logo' />
                    <img alt='/' src={godaddy} className='small-logo' />
                    <img alt='/' src={asana} className='small-logo' />
                </div>
                <div className="row card-div">
                    <h2>Your user research Swiss Army knife</h2>
                    <Center direction='row'>

                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                            Call us
                        </Button>
                    </Center>

                    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                        <Box height='200px' className='card'>
                            <img alt='logo1' src={logo1} className='card-logo' />
                            <h4>Card Spacing</h4>
                            <p className='text-muted small-heading'>Discover how people group and label information.</p>
                            <Center direction='row'>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                                    Learn more
                                </Button>
                            </Center>
                        </Box>
                        <Box height='200px' className='card'>
                            <img alt='logo1' src={logo2} className='card-logo' />
                            <h4>Prototype tests</h4>
                            <p className='text-muted small-heading'>Discover how people navigate your Figma prototypes.</p>
                            <Center direction='row'>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                                    Learn more
                                </Button>
                            </Center>
                        </Box>
                        <Box height='200px' className='card'>
                            <img alt='logo1' src={logo3} className='card-logo' />
                            <h4>First click tests</h4>
                            <p className='text-muted small-heading'>Test interaction with first click and navigation tests.</p>
                            <Center direction='row'>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                                    Learn more
                                </Button>
                            </Center>
                        </Box>
                        <Box height='200px' className='card'>
                            <img alt='logo1' src={logo4} className='card-logo' />
                            <h4>Design surveys</h4>
                            <p className='text-muted small-heading'>Get feedback on images, videos or audio files.</p>
                            <Center direction='row'>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                                    Learn more
                                </Button>
                            </Center>
                        </Box>
                        <Box height='200px' className='card'>
                            <img alt='logo1' src={logo5} className='card-logo' />
                            <h4>Preference tests</h4>
                            <p className='text-muted small-heading'>Find out which designs users prefer and why.</p>
                            <Center direction='row'>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                                    Learn more
                                </Button>
                            </Center>
                        </Box>
                        <Box height='200px' className='card'>
                            <img alt='logo1' src={logo6} className='card-logo' />
                            <h4>Five second tests</h4>
                            <p className='text-muted small-heading'>Test comprehensibility by measuring first impressions.</p>
                            <Center direction='row'>
                                <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                                    Learn more
                                </Button>
                            </Center>
                        </Box>
                    </SimpleGrid>
                </div>

                <div className="row pt-5">
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                        gap={6}
                    >
                        <GridItem  >
                            <img alt='gridimage1' src={gridimage1} />
                        </GridItem>
                        <GridItem  >
                            <p className='pre-header'>Effortless validation for</p>
                            <h3 className='heading'>Design professionals</h3>
                            <p className='text'>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
                            <img alt=' chartmogul' className='testmonial-logo' src={chartmogul} />
                            <div className='testimonial'>
                                <p>The navigation test is god's gift to UI designers, it probably has the best power-to-simplicity ratio of any software, ever.</p>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name='Nick Franklin' src={avatar1} />
                                        <div className='person-name'>
                                            <h6>Nick Franklin</h6>
                                            <p>Chief Executive Officer</p>
                                        </div>
                                    </WrapItem>

                                </Wrap>
                            </div>
                        </GridItem>
                    </Grid>
                </div>



                <div className="row pt-5">
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                        gap={6}
                    >
                        <GridItem  >
                            <p className='pre-header'>Optimisation for</p>
                            <h3 className='heading'>Marketers</h3>
                            <p className='text'>Fine-tune landing pages, messaging, and creative, helping you optimise conversion rates on marketing campaigns and product launches.</p>
                            <img alt=' chartmogul' className='testmonial-logo' src={philips} />
                            <div className='testimonial'>
                                <p>We use UsabilityHub tests to help us make decisions for various projects. From web and mobile design to marketing activities.</p>
                                <Wrap>
                                    <WrapItem>
                                        <Avatar name='Rick van de Ven' src={avatar2} />
                                        <div className='person-name'>
                                            <h6>Rick van de Ven</h6>
                                            <p>Digital Marketing Analyst</p>
                                        </div>
                                    </WrapItem>

                                </Wrap>
                            </div>
                        </GridItem>
                        <GridItem  >

                            <img alt='gridimage1' src={heroimg1} />
                        </GridItem>
                    </Grid>
                </div>


                <div className="row pt-5">
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                        gap={10}
                    >
                        <GridItem  >
                            <img alt='gridimage1' src={heroimg2} />
                        </GridItem>
                        <GridItem  >
                            <p className='pre-header'>Easier decision making for</p>
                            <h3 className='heading'>Product managers</h3>
                            <p className='text'>Ensure you’re delivering the right features to the right customers by validating product concepts with your target audience.</p>
                            <img alt=' chartmogul' className='testmonial-logo' src={eco} />
                            <div className='testimonial'>
                                <p>Adopting UsabilityHub got us into the habit of asking our users questions before locking in decisions.</p>
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
                        </GridItem>
                    </Grid>
                </div>



                <div className="row pt-4">
                    <h2 className='text-center'>One platform, endless possibilities</h2>
                    <Center direction='row'>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme='black' variant='outline' className='featured-button' >
                            See more examples
                        </Button>
                    </Center>
                </div>

                <div className="row pt-4">
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={6}
                    >
                        <GridItem height='400px' className='backimg'>
                            <img src={backimg1} alt="Jesse Showalter" /><div className="bottom-left"><p>Can users complete a task in my software interface?</p></div>
                        </GridItem>
                        <GridItem height='400px' className='backimg'>
                            <img src={backimg2} alt="Jesse Showalter" /><div className="bottom-left"><p>Can users find important pages on my website?</p></div>

                        </GridItem>
                        <GridItem height='400px' className='backimg'>
                            <img src={backimg3} alt="Jesse Showalter" /><div className="bottom-left"><p>Is my website’s intended audience clear?</p></div>

                        </GridItem>
                        <GridItem height='400px' className='backimg'>
                            <img src={backimg4} alt="Jesse Showalter" /><div className="bottom-left"><p>Do visitors understand what a page is about?</p></div>

                        </GridItem>

                    </Grid>

                </div>

            </div>
            <div className="comtainer-fluid">
                <div className="row section pt-5 mt-5">
                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                        gap={6}
                    >
                        <GridItem className='grid-content' >
                            <h2 className='text-white' style={{ fontSize: "32px" }}> No participants?<br />
                                No problem.</h2>
                            <p className='text'>Our integrated panel allows you to quickly and affordably recruit research participants that precisely match your target audience.</p>
                            <div className=' pt-3' >
                                <h5 className='text-white '>Our panel includes:</h5>
                            </div>
                            <div className="col-lg-6">
                                <div className="row  gx-5">
                                    <div className="col-lg-6 list-div ">
                                        <ul>
                                            <li>530k+ panel participants</li>
                                            <li>35+ demographic options</li>
                                            <li>Free demographic targeting</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 list-div1 ">
                                        <ul>
                                            <li>Coverage in 100+ countries</li>
                                            <li>Average 2hr turn around time</li>
                                            <li>Response quality guarantee</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Button colorScheme='twitter' className='twitt-btn'>
                                Learn more
                            </Button>
                        </GridItem>
                        <GridItem  >
                            <div className='parent-div'>
                                <img alt='girdimage2' className='image1' src={gridimage2} />
                                <img alt='girdimage3' className='image2' src={gridimage3} />
                            </div>
                        </GridItem>
                    </Grid>
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
        </>
    )
}

export default Home;

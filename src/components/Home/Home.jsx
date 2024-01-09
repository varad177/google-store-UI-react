import React, { useState } from 'react'
import homeimg from '../../assets/home.png'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Home = () => {

    let blackearbuds = "https://lh3.googleusercontent.com/u-4Zs_10VOXC2XRW82Xmyb_DqFBl37wwqFKsLcpu43gjSk04NBfiiWKNSil4ffSbwa5CAjHl9PLIRaUXu76Ewz-aqIm3cjJqcw=rw-e365-nu-w1001"


    let whiteEarbuds = "https://lh3.googleusercontent.com/OVMfto7egWKCzKx7SGlv-8Y3FqOVb6rlyvr6V-cO4dukzVJDSDfO-4vyWpGlyRhnbh6VVDysLsYfxdSYRb8lfgKJRgqL4b94X_M=rw-e365-nu-w1001"

    let watchurl = "https://lh3.googleusercontent.com/5xTz74jaI9C9-rYs9ws3jnenRov9DZijTDWn-uHwQXlsXCKQhitS1Vb9Uy3f_BMMeDW-wFApzHnJtghPRs38trJJMpm9GBA7DWJ1=rw-e365-w3000"






    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'red' }}
                onClick={onClick}
            />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block', background: 'green' }}
                onClick={onClick}
            />
        );
    };


    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    let slider1 = "https://lh3.googleusercontent.com/1clFNYEnzqSBLTrK4hLlzXDr6f6qebwHEEyEE433G029qwn4J109WSBzpfQS37ykVsecYh0KI3M_y5LGd5a7NQVI3Q5hI03fJHE=rw-e365-w3000"
    return (
        <section id='home' className='md:px-12 max-w-[1440px] mx-auto'>


            <div className=' md:rounded-[40px] h-auto flex items-center bg-[#CDDEF5]'>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full ">
                    <div className="flex px-8 py-12  justify-center flex-col md:px-20 md:py-16 max-lg:pt-12 gap-4">
                        <h1 className='text-3xl max-lg:text-center md:text-5xl text-[#3C4043] leading-10 font-bold'>Engineered by  Google. For all that you do</h1>
                        <p className='text-[18px] md:text-2xl max-lg:text-center'>Meet the new Pixel phones, featuring Google AI and the most advanced Pixel Cameras yet.</p>
                        <div className="text-white text-[18px] btn py-2 px-4 w-fit bg-[#1967D2] max-lg:mx-auto">
                            Browse Phones
                        </div>
                    </div>

                    <div className="homeImg h-full w-full flex items-center justify-center">
                        <img alt='loading' className='img-fluid md:h-[90%] object-cover' src={homeimg} />
                    </div>
                </div>



            </div>

            <div className=' md:rounded-[40px] h-auto flex items-center bg-[#CDDEF5] mt-4'>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full ">


                    <div className="homeImg h-full w-full flex items-center justify-center">
                        <img alt='loading' className='img-fluid  object-cover' src={watchurl} />
                    </div>
                    <div className="flex px-8 py-12  justify-center flex-col md:px-20 md:py-16 max-lg:pt-12 gap-4">
                        <p className='text-[18px] md:text-2xl max-lg:text-center'>Google pixel watch 2</p>
                        <h1 className='text-3xl max-lg:text-center md:text-5xl text-[#3C4043] font-bold leading-10'>Help by Google. <br /> Health by Fitbit. <br /> Made For You</h1>
                        <p className='text-[18px] md:text-2xl max-lg:text-center'>Meet the new Pixel phones, featuring Google AI and the most advanced Pixel Cameras yet.</p>
                        <div className="lmbtn max-lg:mx-auto">
                            Learn More
                        </div>
                    </div>
                </div>



            </div>



            <div className=' md:rounded-[40px] h-auto  mt-8 '>
                <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 ">

                    <div className="earbuds h-auto bg-[#E3EEFC] md:rounded-[40px] ">

                        <div className=' flex flex-col justify-center item-center'>
                            <p className='text-sm text-center mt-4'>Pixel Buds Pro</p>
                            <h1 className='text-4xl font-bold text-center mt-3'> Premium sound,<br /> Pristine calls.</h1>
                            <div className='lmbtn mx-auto mt-4'>Learn more</div>
                        </div>
                        <div className='mt-4'>
                            <img className='img-fluid  bottom-0 right-0 left-0 mx-auto' src={blackearbuds} alt="loading" />
                        </div>


                    </div>
                    <div className="earbuds h-auto bg-[#E3EEFC] md:rounded-[40px] ">

                        <div className=' flex flex-col justify-center item-center'>
                            <p className='text-sm text-center mt-4'>Pixel A series</p>
                            <h1 className='text-4xl font-bold text-center mt-3'> Rich sound,<br />always.</h1>
                            <div className='lmbtn mx-auto mt-4'>Learn more</div>
                        </div>
                        <div className='mt-4'>
                            <img className='img-fluid  bottom-0 right-0 left-0 mx-auto' src={whiteEarbuds} alt="loading" />
                        </div>


                    </div>







                </div>
            </div>

            {/* <Slider className='mt-8 bg-white' {...settings}>
                <div className='flex p-4     flex-col border items-center justify-center'>
                    <div className="w-full bg-[#F8F9FA]">
                        <img src={slider1} alt="Image 1" />
                        
                    </div>
                    <h1 className='text-xl'>Pixel 8 pro </h1>
                </div>
                <div className='flex p-4     flex-col border items-center justify-center'>
                    <div className="w-full bg-[#F8F9FA]">
                        <img src={slider1} alt="Image 1" />
                        
                    </div>
                    <h1 className='text-xl'>Pixel 8 pro </h1>
                </div>
                <div className='flex p-4     flex-col border items-center justify-center'>
                    <div className="w-full bg-[#F8F9FA]">
                        <img src={slider1} alt="Image 1" />
                        
                    </div>
                    <h1 className='text-xl'>Pixel 8 pro </h1>
                </div>
                <div className='flex p-4     flex-col border items-center justify-center'>
                    <div className="w-full bg-[#F8F9FA]">
                        <img src={slider1} alt="Image 1" />
                        
                    </div>
                    <h1 className='text-xl'>Pixel 8 pro </h1>
                </div>
                <div className='flex p-4     flex-col border items-center justify-center'>
                    <div className="w-full bg-[#F8F9FA]">
                        <img src={slider1} alt="Image 1" />
                        
                    </div>
                    <h1 className='text-xl'>Pixel 8 pro </h1>
                </div>
                <div className='flex p-4     flex-col border items-center justify-center'>
                    <div className="w-full bg-[#F8F9FA]">
                        <img src={slider1} alt="Image 1" />
                        
                    </div>
                    <h1 className='text-xl'>Pixel 8 pro </h1>
                </div>
               
                

            </Slider> */}





        </section>
    )
}

export default Home

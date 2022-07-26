import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div>
           <header className='bg-black'>


            <container className='container flex items-center flex-start content-center bg-black'>
                <div className='text'>
                <h1 className='text-white font-bold text-xl'>Hello, It's me</h1>
            <br />

            <h6 className='text-white font-extrabold text-6xl text-opacity-25 scale-50'>
                Product <br />
                designer
            </h6>


           <div className='flex '>
           <h6 className='text-white font-extrabold text-6xl'>Ojieame</h6> 
            <span className='dot vf font-extrabold text-6xl'>.</span>
           </div>
           <br />

           <span>
           <p className='text-white '>
           An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world. 
           </p>
           </span>
      


                </div>

                <div>

                    <img className='image' src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b33609ae43d9d574f5a17ab_lm.jpg" alt="" />
                </div>



            </container>
            

           </header>
        </div>
    );
};

export default Home;
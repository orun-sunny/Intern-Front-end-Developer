import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div>
           <header className='bg-black'>
            <h1 className='text-white font-bold'>Hello, It's me</h1>
            <br />
           <div className='flex-1 '>
           <h6 className='text-white font-extrabold'>Ojieame</h6> 
            <span className='dot vf font-extrabold'>.</span>
           </div>
           <span>
           <p className='text-white '>
           An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world. 
           </p>
           </span>
      

           </header>
        </div>
    );
};

export default Home;
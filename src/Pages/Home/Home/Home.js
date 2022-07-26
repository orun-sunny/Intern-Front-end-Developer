import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className='bg-black'>
           
            <section className='container flex items-center flex-start content-center bg-black'>
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

               



            </section>
            {/* <button className='text-white font-extrabold text-xl'>Scroll for moore</button> */}

            {/* 2nd header part */}


            <section className='container flex items-center flex-start content-center bg-black'>
                <div className='text'>
                <h1 className='text-blue-600 font-bold text-xl'>My Skillset</h1>
            <br />

            


      
           <h6 className='text-white font-extrabold text-5xl ml-240px '>Graphic Design, Interface Design &
User Experience</h6> 
          
      
           <br />

           <span>
         
           </span>
      


                </div>

                <div>

              <span>
              <p className='text-white text-left part '>
                I specialize in building complex web applications, leading front-end teams, digital product design and developing visual design systems. I enjoy creating effortless user experience and designing delightful digital products. The entire process of going from a concept to release and gathering user’s feedback on either client’s or my own products is what makes me wake up everyday!
I worked with numerous clients from all around the world from early startups to well-established companies. I always seek new opportunities for cooperation on projects around interesting dashboards, design systems or landing pages. Let’s create something awesome together!
                </p>
              </span>
                </div>

               



            </section>
            

      
        </div>
    );
};

export default Home;
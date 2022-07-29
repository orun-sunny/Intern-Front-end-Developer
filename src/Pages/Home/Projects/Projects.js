import React from 'react';
import Career from '../../Career/Career';
import './Projects.css'

const Projects = () => {
    return (
        <div className='bg-black'>
            <div className='lg:flex text space-x-6'>
                <h6 className='text-white font-extrabold text-6xl headline'>Process</h6>
                <span className='dot plus font-extrabold text-6xl headline'>      +</span>
            </div>
            <section className='flex'>
                <div className='grid md:grid-cols-3 gap-20  items-center projects py-10 px-12 '>
                    <div>
                        <h1 className='text-white normal-case text-xl'>Pre-Process</h1>
                        <h1 className='number text-white absolute text-7xl   '> 01</h1>
                        <h1>Collect Informations</h1>
                        <h1 className='text-white'>Personas</h1>
                        <h1 className='text-white'>SetUp Goals</h1>
                        <h1 className='text-white'>Project Folder + Moodboard</h1>

                    </div>
                    <div>
                        <h1 className='text-white normal-case text-2xl'>Low Fidelity</h1>
                        
                        <h1 className='number text-white absolute text-7xl   '> 02</h1>
                        <h1>Collect Informations</h1>
                        <h1 className='text-white'>Whiteboard</h1>
                        <h1 className='text-white'>Maps Screen Info</h1>
                        <h1 className='text-white'>Possible States</h1>
                    </div>
                    <div>
                        <h1 className='text-white normal-case text-2xl'>Work/ Design</h1>

                        
                        <h1 className='number text-white absolute text-7xl   '> 03</h1>
                        <h1>Moodboard</h1>
                        <h1 className='text-white'>First Diagram</h1>
                        <h1 className='text-white'>Write your copy</h1>
                        <h1 className='text-white'>Intern Test</h1>
                    </div>
                    <div>
                        <h1 className='text-white normal-case text-2xl'>Assets & Delivery</h1>
                        <h1 className='number text-white absolute text-7xl   '> 04</h1>
                        <h1>Moodboard</h1>
                        <h1 className='text-white'>Specifications</h1>
                        <h1 className='text-white'>Diagram</h1>
                        <h1 className='text-white'>Final Prototype</h1>
                        <h1 className='text-white'>Video x Notes</h1>
                    </div>
                    <div>
                        <h1 className='text-white normal-case text-2xl'>Final & Test</h1>
                        <h1 className='number text-white absolute text-7xl   '> 05</h1>
                        <h1>Inspectlet x hotjar</h1>
                        <h1 className='text-white'>Mixpanel</h1>
                        <h1 className='text-white'>Google Analytics</h1>
                        <h1 className='text-white'>Intercom</h1>
                     
                    </div>
                    <div>
                        <h1 className='text-white normal-case text-2xl'>After Design</h1>
                        <h1 className='number text-white absolute text-7xl   '> 06</h1>
                        <h1 className='text-white'>Goals</h1>
                        <h1 className='text-white'>Workspace</h1>
                    </div>
                </div>
                <div>
                    <img className='background' src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b3442cf66025460b001f8ab_VEWQ.png" alt="" />
                </div>
            </section>

            <div className='lg:flex text space-x-6'>
                <h6 className='text-white font-extrabold text-6xl headline'>Recent <br />Projects</h6>
                <span className='dot plus font-extrabold text-6xl h-3rem headline'>     +</span>
            </div>

            

            <section className=' recent-project grid grid-cols-2 items-center  space-x-67 py-10 px-12'>
                <div className=' rounded-lg border w-1/5'>
                    <img className='rounded-t-lg ' src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b3464eae851812c9c50f205_bbbbbbb.jpg" alt="" />
                </div>
                <div className=' rounded-lg border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-500 max-w-full w-1/4'>
                    <img className=' recent-projects2' src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b346b373717ce4fcf5e717d_Mi%20Mix%202S.png" alt="" />
                </div>
                <div className=' rounded-lg border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-500 w-1/5 ' >
                    <img className='recent-projects3' src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b346c797baa7f543569d1f4_bncq.jpg" alt="" />
                </div>


            </section>


            <Career></Career>




        </div>
    );
};

export default Projects;
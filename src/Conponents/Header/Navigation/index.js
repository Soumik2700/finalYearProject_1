import { Button } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './navigation.css'
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-2 nav-part1'>
                            <div className='catWrapper'>
                                <Button className='allCatTab align-items-center' onClick={toggleSidebar}>
                                    <span className='icon1 mr-1'><RiMenu2Line/></span >
                                    <span className='text'>ALL CATEGORIES</span>
                                    <span className='icon2 ml-2'><FaAngleDown/></span>
                                </Button>

                                <div className={`sidebarNav ${isSidebarOpen ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to="/"><Button>Man <FaAngleRight className='ml-auto'/></Button></Link>
                                            <div className='submenu'>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Footware</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Footware</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/"><Button>Woman<FaAngleRight className='ml-auto'/></Button></Link>
                                            <div className='submenu'>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Footware</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                                <Link to="/"><Button>Clothing</Button></Link>
                                                <Link to="/"><Button>Footware</Button></Link>
                                                <Link to="/"><Button>Watches</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to="/"><Button>Beauty</Button></Link></li>
                                        <li><Link to="/"><Button>Kids</Button></Link></li>
                                        <li><Link to="/"><Button>Gift</Button></Link></li>
                                        <li><Link to="/"><Button>Man</Button></Link></li>
                                        <li><Link to="/"><Button>Woman</Button></Link></li>
                                        <li><Link to="/"><Button>Beauty</Button></Link></li>
                                        <li><Link to="/"><Button>Kids</Button></Link></li>
                                        <li><Link to="/"><Button>Gift</Button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-10 nav-part2 d-flex align-items-center'>
                            <ul className='list list-inline ml-5'>
                                <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Man</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Woman</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Beauty</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Watches</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to="/"><Button>Kids</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footware</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to="/"><Button>Gift</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                                <li className='list-inline-item'><Link to="/"><Button>Contact Us</Button></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
    </nav>
  )
}

export default Navigation

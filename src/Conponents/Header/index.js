import React, { useContext } from 'react';
import Logo from "../../assets/images/pngegg.png";
import { Link } from 'react-router-dom';
import CountryDropdown from '../Country Dropdown';
import { SlUser } from "react-icons/sl";
import { CiShoppingBasket } from "react-icons/ci";
import { Button } from '@mui/material';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
const Header = () => {

    const context = useContext(MyContext);

  return (
    <>  
        <div className='headerWrapper'>
            <div className='top-strip bg-deepBlue'>
                <div className='container'>
                    <p className='mb-0 mt-0 text-center'>Due to the <b>COVID-19</b> epidemic, orders maybe processed with a slight delay</p>
                </div>
            </div>
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='logoWrapper d-flex align-items-center'>
                            <Link to={'/'}>
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>

                        {
                            context.countryList.length!==0 && <CountryDropdown/>
                        }
                            
                                <SearchBox/>


                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'>
                                    <SlUser/>
                                </Button>
                                <div className='ml-auto cartTab d-flex align-items-center'>
                                    <span className='price'>$3.29</span>
                                    <div className='position-relative ml-2'>
                                        <Button className='circle ml-2'>
                                            <CiShoppingBasket/>
                                        </Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation/>
        </div>
    </>
  )
}

export default Header

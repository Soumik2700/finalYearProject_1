import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { Dialog } from '@mui/material';
import { CiSearch } from 'react-icons/ci';
import { IoCloseSharp } from "react-icons/io5";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const context = useContext(MyContext);

  // Sort the countryList alphabetically by the common name
  const sortedCountryList = context.countryList?.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  // Filter the country list based on the search term
  const filteredCountryList = sortedCountryList.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectCountry = (countryName) => {
    context.setSelectedCountry(countryName);
    setIsOpenModel(false);
  };

  const truncatedCountryName = context.selectedCountry.length > 15 ?
  context.selectedCountry.substring(0,10)+'...'
  : context.selectedCountry;

  return (
    <>
      <Button className='countryDrop' onClick={() => setIsOpenModel(true)}>
        <div className='info d-flex flex-column'>
          <span className='label'>Your location</span>
          <span className='name'>{truncatedCountryName}</span>
        </div>
        <span className='ml-auto'><FaAngleDown /></span>
      </Button>

      <Dialog open={isOpenModel} onClose={() => setIsOpenModel(false)} className='locationModel' TransitionComponent={Transition}>
        <h4 className='mb-0'>Choose your delivery location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className='close_' onClick={() => setIsOpenModel(false)}><IoCloseSharp /></Button>
        <div className='headerSearch w-100'>
          <input 
            type="text" 
            placeholder='Search your area...' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button>
            <CiSearch />
          </Button>
        </div>
        <ul className='countryList mt-3'>
          {filteredCountryList?.length !== 0 && filteredCountryList.map((item) => (
            <li key={item.cca3}>
              <Button onClick={() => selectCountry(item.name.common)} className={`${context.selectedCountry === item.name.common ? 'active' : ''}`}>
                {item.name.common}
              </Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;

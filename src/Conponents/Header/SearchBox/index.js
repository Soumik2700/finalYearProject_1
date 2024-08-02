import { Button } from '@mui/material';
import { CiSearch } from "react-icons/ci";
const SearchBox =()=> {
    return(
        <div className='headerSearch ml-3 mr-3'>
            <input type="text" placeholder='Search for products...' />
                <Button>
                    <CiSearch/>
                </Button>
        </div>
    )
}
export default SearchBox
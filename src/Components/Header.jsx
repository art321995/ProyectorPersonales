import logo from './../assets/Images/logo.png';
import { HiHome } from 'react-icons/hi';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiStar } from 'react-icons/hi';
import { HiPlayCircle } from 'react-icons/hi2';
import { HiTv } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi';
import Headeritem from './Headeritem';

const Header = () => {
    const menu =[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        {menu.map((item) =>
            <Headeritem/>
         )}
    </div>
  )
}

export default Header;
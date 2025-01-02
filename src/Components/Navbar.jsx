import { Link } from 'react-router-dom';
import Logo from '../assets/logo2.png'
import { ShoppingCart } from 'lucide-react';
import { FaRegUser } from 'react-icons/fa';
import { useState } from 'react';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

export const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Mens",
      link: "/mens",
    },
    {
      id: 3,
      title: "Womens",
      link: "/womens",
    },
    {
      id: 4,
      title: "Kids",
      link: "/kids",
    },
    {
      id: 5,
      title: "Contact",
      link: "/contact",
    },
  ];

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="text-black py-8">
        <div className="container flex justify-between items-center">
            {/* logo */}
            <div>
                <img src={Logo} alt="" className='max-w-[100px]'/>
            </div>
            {/* Menu Section */}
            <div className="hidden md:block">
              <ul className='flex items-center relative  gap-4 z-40'>
                {
                  NavbarMenu.map((item) => (
                    <li key={item.id}>
                      <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase'>{item.title}</Link>
                    </li>
                  ))
                }
                <Link>
                  <button className='text-xl ps-14'>
                    <ShoppingCart/>
                  </button>
                </Link>
                <button className='text-xl ps-8'>
                  <FaRegUser className='mb-2'/>
                </button>
              </ul>
            </div>

            <div className="md:hidden flex gap-8 z-50">
              <Link to={'/cart'}> <ShoppingCart/> </Link>
              {/* mobil hamburger Menu */}
              {
                showMenu ? (
                  <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30}/>
                ):(
                  <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30}/>
                )
              }
            </div>
        </div>
        <div>
          <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
        </div>
    </div>
)
}

export default Navbar
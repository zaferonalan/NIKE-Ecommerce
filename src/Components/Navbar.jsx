import { Link } from 'react-router-dom';
import Logo from '../assets/logo2.png'

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
              </ul>
            </div>
        </div>
    </div>
)
}

export default Navbar
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
    <div className="text-white py-8">
        <div className="container flex justify-between">
            {/* logo */}
            <div>
                <img src={Logo} alt="" className='max-w-[100px]'/>
            </div>
            {/* Menu Section */}
            <div className="">
                
            </div>
        </div>
    </div>
)
}

export default Navbar
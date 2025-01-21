import { Avatar,Button, Dropdown, DropdownHeader, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa';
import { useSelector } from "react-redux";

export default function Header() {
  const path=useLocation().pathname;
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r
         from-indigo-500 via-purple-500 to-pink-500 rounded-lg
         text-white">Pasindu's</span>
        Blog
       
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
         
        
        />
      </form>
        <Button className='w-12 h-10 lg:hidden' color="gray" pill>
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <button className="w-12 h-10 hidden sm:inline color='gray' pill">
            <FaMoon/>
          </button>
          {currentUser ? (
            <Dropdown
               arrowIcon={false}
               inline
               label={
                <Avatar
                 alt='user'
                img={currentUser.profilePicture}
                rounded
                />
                
               }
               >
             <DropdownHeader className=" rounded-lg ">
              <span className="block text-sm font-semibold mt-2 ">
                <h1 className=" font-bold">User Name :</h1>@{currentUser.username}
              </span>
              <span className="block text-sm font-semibold  mt-2 truncate ">
                <h1 className="font-bold">Email :</h1>{currentUser.email}
              </span>
                            
             </DropdownHeader> 
             <Link to='/dashboard?tab=profile'>
             <Dropdown.Item className="font-bold"> Profile </Dropdown.Item>

             </Link>
             <Dropdown.Divider/>
             <Dropdown.Item className="font-bold"> Sign out </Dropdown.Item>


            </Dropdown>


          ):(
            <Link to='/signin'>
            <Button  gradientDuoTone="purpleToBlue" outline >
              Sign In
            </Button>
            
            </Link>
          )
          }

          <Navbar.Toggle />



        </div>
          <Navbar.Collapse>
            <Navbar.Link active={path==='/'} as={'div'}>
              <Link to='/'>Home</Link>

            </Navbar.Link>
            <Navbar.Link active={path==='/about'} as={'div'}>
              <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/projects'} as={'div'}>
              <Link to='/projects'>Projects</Link>
            </Navbar.Link>

          </Navbar.Collapse>


      
    </Navbar>
  
  );
}

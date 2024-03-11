import React, {useContext, useState} from "react";
import './Navbar.css';
import Drawer from '@mui/material/Drawer';
import { NavLink , useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Galogo from '../../Assets/galogo.png';
import MyContext from "../../MyContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Navbar(){
    const navigate = useNavigate();
    const sharedvalue = useContext(MyContext);
    const [menutoggle,setmenutoggle] = useState({
        left:false
    });
     //function for signout
     async function handlesignout(){
      try{
          await signOut(auth).then(() => {
              alert('successfully signed out');
            }).catch((error) => {
              console.error(error);
            });
            navigate('/');
            window.location.reload();
      }
      catch(e){
          console.log('you got an error when sign out',e);
      }
  }
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setmenutoggle({...menutoggle,[anchor]:open});
      };
      const list = (anchor) => (
        <ul
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className="list-box"
          role="presentation"
          >
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/academics'><li>Services</li></NavLink>
            <NavLink to='/facilities'><li>Search work</li></NavLink>
            {sharedvalue.isAuthed===true && <NavLink to='/createservice'><li>Create Service</li></NavLink>}
            <NavLink to='/activities'><li>Health</li></NavLink>
            <NavLink to='/careers'><li>Interact</li></NavLink>
            <NavLink to='/Admissions'><li>Find Service Provider</li></NavLink>
            {/* <NavLink to='/gallery'><li>gallery</li></NavLink> */}
            {sharedvalue.isAuthed===true && <NavLink to='/profile'><li>Profile</li></NavLink>}
            
            <NavLink to='/contact'><li>contact</li></NavLink>
            {sharedvalue.isAuthed===true?<li onClick={()=>handlesignout()}>SignOut</li>:<NavLink to='/login'><li>Login</li></NavLink>}
        </ul>
        )
    return(
        <>
        <div className="navbar-con">
            <div>
                <img src={Galogo} alt='galogo' onClick={()=>navigate('/')}/>
            </div>
            <div>
                <MenuIcon onClick={toggleDrawer('left', true)}/>
            </div>
        </div>
        <Drawer
            anchor={'left'}
            open={menutoggle['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </>
    );
}

export default Navbar;
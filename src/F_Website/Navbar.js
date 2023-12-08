import React from 'react';
import '../MYcss/Style.css';
import '../MYcss/Responsive.css';
import { Link } from 'react-router-dom'
import Image1 from '../Picture/Searchbar.png'
import Image2 from '../Picture/likeeee.png'
import Image3 from '../Picture/Cartaaaa.png'
import Image4 from '../Picture/menu.png'

function Navbar() {

  let flag=0;
function click(){

if(flag==0){
  document.querySelector('.Navmenu').style.opacity="1";
 
  flag=1;
}
else{
  // flag==0;
document.querySelector('.Navmenu').style.opacity="0";
  flag=0;
}
}
      

  return (
    <div className='Navbar'>

       <div className='Navbar_logo'>
            <h2>Exclusive</h2>
       </div>

       <div className='Navmenu'>
         <ul>
            <li><a  href=''>Home</a></li>
            <li><a href='contact'>Contant</a></li>
            <li><a href='#' >About</a></li>
            <li><a href='#' >Sign Up</a></li>
         </ul>
       </div>

       <div className='Navbar_Search'>
         <div className='Navbar_Search_1'>
               <input type='text' placeholder='What are you looking for?'/>
               <img src={Image1} alt='Image1' />


               </div>

               <div className='Navbar_Search_2'>
            
                <img src={Image2} alt=''/>
                <img src={Image3} alt=''/>
                <div className='Mobile_icon'>
        <img onClick={click}  src={Image4}/>
        </div>

             
    
        
               </div>

              
               
       </div>




    </div>
  )
}

export default Navbar;

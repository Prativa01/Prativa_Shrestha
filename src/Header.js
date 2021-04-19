import React, { Component } from 'react';
import './Header.css';
import eleshop from './eleshop.jpg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header(){
    
    const [{basket}, dispatch] = useStateValue();

     const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        window.location.href = '/'
     
    }

   

  
        if (localStorage.getItem('token')){
            
            var menu = 
                <div className="header_nav">
                    
                    <Link to ="/profile">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello {localStorage.getItem('username')}</span>
                        <span className='header_optionLineTwo'>Welcome</span>

                    </div>
                    </Link>
                    <Link to="/Home">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Home</span>
                    </div>
                    </Link>
                    
                   
                    <Link to ="/about">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'> About Us</span>
                    </div>
                    </Link>
                    <Link to="/order">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'>Contact Us</span>
                    </div>
                    </Link>

                    <Link to="/checkout">
                        <div className="header_optionCart">
                            <ShoppingCartIcon/>
                            <span className="header_optionalLineTwo header_cartCount">{basket?.length}</span>
                        </div>
                    </Link>
                    <Link to='/logout'>
                    <div className = 'header_option'>
                        <span className='header_optionLineTwo'  onClick={logout}>Logout </span>
                    </div>
                    </Link>

                   
                </div>
            
                    
                
        }else {
            var  menu= 
            
                    <div className="header_nav">
                        <Link to ="/login">
                    <div className = 'header_option'>
                            <span className='header_optionLineOne'>Hello</span>
                            <span className='header_optionLineTwo'>Sign In</span>

                        </div>
                        </Link>
                        <Link to ="/about">
                        <div className = 'header_option'>
                            <span className='header_optionLineOne'>About Us</span>
                            <span className='header_optionLineTwo'>& Contact Us</span>
                        </div>
                        </Link>
                        </div>
                
            
        }
    
    return(
        <div className='header'>
        <Link to ="/">
        <img className="header_logo" src={eleshop} alt="Logo"/>
        </Link>
            <div className ="header_search">
                    <input className="header_searchInput" type="text"/>
                    <SearchIcon className="header_searchIcon"/>
                    </div>
                    {menu}
                    </div>
       
       
    )
}

export default Header;
import React from 'react';
import './Header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


function AdminHeader(){

    return(
        <div className='header'>
            <Link to ="/admin">
            <img className="header_logo" src={logo} alt="Logo"/>
           </Link>
                
                <div className ="header_search">
                    <input className="header_searchInput" type="text"/>
                    <SearchIcon className="header_searchIcon"/>
                </div>
                <div className="header_nav">
                    
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello Admin</span>
                        <span className='header_optionLineTwo'>WELCOME</span>

                    </div>
                    
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Cart</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Help</span>
                        <span className='header_optionLineTwo'>& Feedback</span>
                    </div>
                    <Link to ="/addproduct">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Add Product</span>
                        <span className='header_optionLineTwo'> +</span>
                    </div>
                    </Link>
                    

                </div>
        </div>
    )
}
export default AdminHeader;
import React from 'react';
import './Header.css';
import eleshop from './eleshop.jpg';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


function AdminHeader(){

    return(
        <div className='header'>
            <Link to ="/admin">
            <img className="header_logo" src={eleshop} alt="Logo"/>
           </Link>
                
                <div className ="header_search">
                    <input className="header_searchInput" type="text"/>
                    <SearchIcon className="header_searchIcon"/>
                </div>
                <div className="header_nav">
                    
                <Link to ="/home">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello Admin</span>
                        <span className='header_optionLineTwo'>Home</span>
                        
                    </div>
                    </Link>  
                    
                    <Link to ="/details">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>User</span>
                        <span className='header_optionLineTwo'>Details</span>
                    </div>
                    </Link>
                    
                    <Link to ="/addproduct">
                    <div className = 'header_option'>
                        
                        <span className='header_optionLineTwo'> Add Product++</span>
                    </div>
                    </Link>
                    

                </div>
               
        </div>
    )
}
export default AdminHeader;
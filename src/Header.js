import React from 'react';
import './Header.css';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header(){
    const [{basket}, dispatch] = useStateValue();

    return(
        <div className='header'>
            <Link to ="/">
            <img className="header_logo" src={logo} alt="Logo"/>
            </Link>
                
                <div className ="header_search">
                    <input className="header_searchInput" type="text"/>
                    <SearchIcon className="header_searchIcon"/>
                </div>
                <div className="header_nav">
                    <Link to ="/login">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Hello Customer</span>
                        <span className='header_optionLineTwo'>Sign In</span>

                    </div>
                    </Link>
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                    <Link to ="/about">
                    <div className = 'header_option'>
                        <span className='header_optionLineOne'>About Us</span>
                        <span className='header_optionLineTwo'>& Contact Us</span>
                    </div>
                    </Link>

                    <Link to="/checkout">
                        <div className="header_optionCart">
                            <ShoppingCartIcon/>
                            <span className="header_optionalLineTwo header_cartCount">{basket?.length}</span>
                        </div>
                    </Link>
                    

                </div>
        </div>
    )
}
export default Header;
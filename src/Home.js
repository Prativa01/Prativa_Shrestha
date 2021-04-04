import React, { Component } from 'react';
import './Home.css';
import frozen from './frozen.jpg';
import Product from './Product';
import chajang from "./chajangNoodles.jpg";

import Robert from './Robertsweet.png';
import tomato from './tomato.jpg';
import strawberries from './strawberries.jpg';
import coke from './coke2.25.png';
import chiSau from './chiSausage.jpg';
import blackGrapes from './blackGrapes.jpg';


class Home extends Component{
  
    render(){
    return(
        <div className='home'>
            <div className="home_container">
            <img className="home_image" src={frozen} alt=""/>
            
            <div className="home_row">
               <Product 
                id="1124"
                title="Paldo Jjajang Men Chajang Noodles 
                    - 800 gm (200 gm x 4 packets)" 
                    price={150}
                     image={chajang} 
                     rating={4} />
                <Product 
                id="234"
                    title="Frozen Chicken Sausage" 
                    price={350}
                     image={chiSau} 
                     rating={4}/>
            </div>

            <div className="home_row">
                <Product
                    title="Robertson Winery Natural Sweet Red " 
                    price={450}
                    image={Robert} 
                    rating={5}/>
                <Product
                    title="Paldo Jjajang Men Chajang Noodles 
                    - 800 gm (200 gm x 4 packets)" 
                    price={150}
                    image={tomato} 
                    rating={4}/>
                <Product
                    title="Paldo Jjajang Men Chajang Noodles 
                    - 800 gm (200 gm x 4 packets)" 
                    price={150}
                    image={strawberries} 
                    rating={4}/>
            </div>

            <div className="home_row">
                <Product
                    title="Paldo Jjajang Men Chajang Noodles 
                    - 800 gm (200 gm x 4 packets)" 
                    price={150}
                    image={coke} 
                    rating={4}/>
                <Product
                    title="Paldo Jjajang Men Chajang Noodles 
                    - 800 gm (200 gm x 4 packets)" 
                    price={150}
                    image={blackGrapes} 
                    rating={4}/>
            </div>

            </div>
        </div>
    )
}
}
export default Home;
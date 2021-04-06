import React, { Component } from 'react';
import './Home.css';
import frozen from './frozen.jpg';
import Product from './Product';
import chajang from "./ramen.jpg";

import Robert from './Robertsweet.png';
import tomato from './tomato.jpg';
import potato from './potato.jpg';
import green from './greengrapes.jpg';
import meat from './chicken.jpg';
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
                title="Samyang Instant Ramen Noodles" 
                    price={150}
                     image={chajang}
                     desc="It a korean spicy noodles"
                     rating={4} />
                <Product 
                id="234"
                    title="Frozen Chicken Meat" 
                    price={335}
                     image={meat} 
                     desc="It's a full frozen chicken"
                     rating={4}/>
            </div>

            <div className="home_row">
                <Product
                    title="Robertson Winery Natural Sweet Red " 
                    price={600}
                    image={Robert}
                    desc="It is sweet red wine from france" 
                    />
                <Product
                    title="Black Grapes" 
                    price={400}
                    image={blackGrapes}
                    desc="It is 400 rupees per kg" 
                    rating={4}/>
                <Product
                    title="Green Grapes" 
                    price={300}
                    image={green}
                    desc="It is 300 rupees per kg" 
                    rating={4}/>
            </div>

            <div className="home_row">
                <Product
                    title="Tomato" 
                    price={80}
                    image={tomato}
                    desc="It is 80 rupees per kg" 
                    rating={4}/>
                <Product
                    title="Potato" 
                    price={40}
                    image={potato} 
                    desc="It is 40 rupees per kg"
                   />
            </div>

            </div>
        </div>
    )
}
}
export default Home;
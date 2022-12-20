import React from 'react';
import './home.scss'
import Pies from "./Pie/Pie";
import Gistrogram from "./GIstoram/Gistrogram";






const Home = () => {
    return (
        <section className="home">
           <div className="container">

               <div className="home__diagram">
                <div className="home__pie-wrapper">
                 <Pies/>
                </div>
                    <div className="gistoram">
                      <Gistrogram/>
                    </div>
               </div>
           </div>
        </section>

    )
};

export default Home;
import './Homepage.css';
import Header from './common/Header';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function Homepage() 
{

    const { isAuthenticated, user } = useAuth0();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,

        responsive : [
       
            {
                breakpoint: 1024, // screen width < 1024px
                settings :{
                            slidesToShow:2,
                            slidesToScroll: 1,
                          }
            },

            {
                 breakpoint: 600, // screen width < 600px
                settings :{
                            slidesToShow:1,
                            slidesToScroll: 1
                          }

            }
            ]

    };

    return(
        <>
            <div className='container-fluid pocket_console-container'>
                
                <Header/>
                
                <main className='main-content'>
                    
                    {/* If user is not authenticated, just an empty div */}
                    {!isAuthenticated && ( 
                        <>
                        <span className='div'></span>
                        </>
                    )}

                    {/* If user is authenticated, display welcome message*/}
                    {isAuthenticated && (
                        <>
                        <span className='div' id='welcome-message'>Welcome, {user.name}!</span>                                       
                        </> 
                    )}

                    <Slider {...settings} className='slider'>
                            <Link to='/'><div className='product-card'>Calendar</div></Link>
                            <Link to='/cookbook'><div className='product-card'>Cookbook</div></Link>
                            <Link to='/'><div className='product-card'>Expense Tracker</div></Link>
                            <Link to='/'><div className='product-card'>Meal Planner</div></Link>
                            <Link to='/'><div className='product-card'>Task Planner</div></Link>
                            <Link to='/'><div className='product-card'>To do list</div></Link>
                            <Link to='/'><div className='product-card'>Workout Tracker</div></Link>
                    </Slider>

                </main>
           </div>
        </>
    );
}
export default Homepage;
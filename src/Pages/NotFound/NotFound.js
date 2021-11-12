import React from 'react';
import logo from '../../images/404image.jpg';

const NotFound = () => {

    const goToHome = () => {
        window.location.replace('http://localhost:3000/home')
    }
    return (
        <div onClick={goToHome}>
            <img 
            width = '100%'
            src={logo} alt='' />
            <p 
            style={{
               textAlign : 'center',
               marginTop : '-300px',
               fontSize  : '30px',
               color     : 'white',
            }}
            >Click on image and go back !!</p>
        </div>
    );
};

export default NotFound;
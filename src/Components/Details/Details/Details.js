import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import DetailsMain from '../DetailsMain/DetailsMain';
import Pics from '../Pics/Pics';


const Details = () => {
    return (
        <div className="dtls">
            <Navbar></Navbar>
            <DetailsMain></DetailsMain>
            <Pics></Pics>
        </div>
    );
};

export default Details;
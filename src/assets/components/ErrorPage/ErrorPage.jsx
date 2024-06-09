import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-3xl text-center mb-3'>Ooopps</h2>
            <Link to={-1}><button className='btn'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;
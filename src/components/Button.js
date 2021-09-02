import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Comp = () => {
    return(
        <div className='Button'>
            <Link to='/contact' className='Contact'>
                <Button type='contact' variant="outlined" color='primary' style={{ fontSize: '2em' }} className='Con'>
                    Contact Us
                </Button>
            </Link>
        </div>
    );
}

export default Comp

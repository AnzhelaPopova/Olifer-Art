import React from 'react';
import { Link } from "react-router-dom";
import notfound from '../../assets/images/CAT.png';
import './NotFound.scss'

function NotFound() {
    return (

        <div className='notfound'>
            <img src={notfound} className='imgnotfound' alt="грустный котик" />
            <div className='notfoundhcontainer'>
                <p className='notfoundheading'>Страница не найдена</p>
                <Link to="/StartPage" className='notfoundlink'>Вернуться к главной странице</Link>
            </div>
        </div>
    )
}

export default NotFound;

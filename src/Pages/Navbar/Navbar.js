import React from "react";
import './Navbar.css';
import search from './search.jpg';
import {Link} from 'react-router-dom';
// import App from "../../App";

export default function Another(){
    return(
        <>
        <nav className='nav'>
        <div className='tophalf'>
        <a href='/'><img className='anchor' src='https://unlistedzone.com/frontend/img/logo.png' alt="something"/></a>
        <div className="searchbar">
        <img className="image" src={search} alt="searching"></img>
        <input className='input' type='text' placeholder='Search...'
        />
        </div>
        <button className='buttonNav' type='button'>Search</button>
        </div>
        <div>
        <ul className = 'bottomhalf'>
            <li className='list'><a className='anc' href='/'>All Unlisted Share</a></li>
            <li className='list'><a className='anc' href='/'>DRHP-FILED</a></li>
            <li className='list'><a className='anc' href='/'>Become Our Partner</a></li>
            <li className='list'><a className='anc' href='/'>Screener</a></li>
            <li className='list'><a className='anc' href='/'>Media Coverage</a></li>
            <li className='list'><a className='anc' href='/'>Raise Funding</a></li>
            <li className='list'><a className='anc' href='/'>Contact Us</a></li>
            {/* <li className='list '><Link className="anc"  to='/Card'>Card</Link></li>
            <li className='list '><Link className="anc" to='/Appbar'>AppBar</Link></li>
            <li className='list '><Link className="anc" to='/Button'>Button</Link></li>
            <li className='list '><Link className="anc" to='/Use'>Use</Link></li> */}
            <div className="anc">
            
            </div>
        </ul>
        </div>
        <div>
            {/* <App/> */}
        </div>
        
    </nav>
    </>
    )
}
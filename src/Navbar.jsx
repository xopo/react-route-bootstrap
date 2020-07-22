import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({dogs}) => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <NavLink className='navbar-brand' exact to='/dogs'>Dog App</NavLink>
        <button 
            className='navbar-toggler' 
            type='button' 
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='falsse'
            aria-label='Toggle navigator'
        >
            <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
                {dogs && dogs.map((name, i)=>(
                    <li key={i} className='nav-item'>
                        <NavLink exact to={`/dogs/${name}`} className='nav-link'>
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

export default Navbar;
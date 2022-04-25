import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { userSelector } from '../../redux/selectors';

import './Header.css';

function Header() {

    const { username } = useSelector(userSelector);

    return (
        <header className="header">
            {username ?
                <span>{username}</span>
                :
                <Link to="/signin">
                    <button>Log in</button>
                </Link>
            }
        </header>
    );
}

export default Header;
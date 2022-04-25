import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { userSelector } from '../../redux/selectors';

import './Header.css';

function Header() {

    const { pathname } = useLocation();
    const { username } = useSelector(userSelector);

    console.log({ username })

    return (
        <header className="header">
            {pathname === '/signin' ?
                <Link to="/">
                    <button>To tasks</button>
                </Link>
                :
                username ?
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
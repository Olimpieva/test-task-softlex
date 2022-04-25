import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions';

import { userSelector } from '../../redux/selectors';

import './Header.css';

function Header() {

    const { username } = useSelector(userSelector);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header className="header">
            {username ?
                <div className="header_main-page">
                    <span>{username}</span>
                    <button className="header__button header__button_signout" onClick={logoutHandler}>Sign out</button>
                </div>
                :
                <Link to="/signin">
                    <button className="header__button header__button_signin">Sign in</button>
                </Link>
            }
        </header>
    );
}

export default Header;
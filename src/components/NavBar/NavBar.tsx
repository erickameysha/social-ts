import React from "react";

import s from './NavBar.module.css'
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={s.nav}>

                <div className={`${s.item} ${s.active}`  }>
                    <Link to={'/profile'}>profile</Link></div>
                <div className={`${s.item} ${s.active}`  }>
                    <Link to={ '/dialog'}>Message</Link></div>
                <div className={`${s.item} ${s.active}`  }>
                    <Link to={'/users'} >User</Link></div>
        </nav>
    );
};

export default NavBar;
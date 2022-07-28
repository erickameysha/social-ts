import React from "react";

import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={s.nav}>

                <div className={`${s.item} ${s.active}`  }><a>profile</a></div>
                <div className={s.item}><a>Message</a></div>
                <div className={s.item}><a>main</a></div>
        </nav>
    );
};

export default NavBar;
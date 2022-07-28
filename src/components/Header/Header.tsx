import React from 'react';
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}><img
            src="https://wac-cdn.atlassian.com/dam/jcr:a9271a17-3092-4c55-9054-2b8546e889b8/Logo-Circle_Pendo_2x.png?cdnVersion=450"
            alt="img"/>
        </header>
    );
};

export default Header;
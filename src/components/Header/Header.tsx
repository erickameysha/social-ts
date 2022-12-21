import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {mapDispatchToPropsType, mapStateToPropsType} from "./HeaderContainer";
type headerProps = mapStateToPropsType &mapDispatchToPropsType
const Header = (props: headerProps) => {
    return (
        <header className={s.header}>
            <img
            src="https://wac-cdn.atlassian.com/dam/jcr:a9271a17-3092-4c55-9054-2b8546e889b8/Logo-Circle_Pendo_2x.png?cdnVersion=450"
            alt="img"
            />
            <div className={s.loginBlock}>
                {props.isAuth? props.auth.date.login :<NavLink to={'/auth'}> auth</NavLink>}
            </div>
        </header>
    );
};

export default Header;
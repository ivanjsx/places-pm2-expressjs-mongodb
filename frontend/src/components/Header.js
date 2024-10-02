import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../images/logo.svg';


function Header ({onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Places" className="logo header__logo" />
      <Link to="/">
        <div className="header__wrapper">
          <p className="header__user">{ email }</p>
          <button className="header__logout" onClick={handleSignOut}>Выйти</button>
        </div>
      </Link>
      <Link to="signin" className="header__auth-link">Войти</Link>
      <Link to="signup" className="header__auth-link">Регистрация</Link>
    </header>
  )
}

export default Header;

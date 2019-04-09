import React from 'react';
import Core from '../Core/Core';
import './Header.scss';
import logo from '../../assets/img/wiki-logo.png';

class Header extends Core {
  render() {
    const { className, theme, title, subtitle } = this.props;
    return (
      <div className = {`${className}-wrapper ${theme}`}>
        <div className = "logo">
          <img src = { logo } className = "header-logo" alt = "Логотип Википедии"/>
        </div>
        <div className = {`${className}-text-wrapper`}>
          <h1 className = "title">{title}</h1>
          <h2 className = "subtitle">{subtitle}</h2>
        </div>
      </div>
    );
  };

  _loadImportantProps() {
    return ['title', 'subtitle', ...super._loadImportantProps()];
  }
};

export default Header;

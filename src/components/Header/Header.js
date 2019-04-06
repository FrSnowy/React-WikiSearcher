import React from 'react';
import Core from '../Core/Core';
import './Header.scss';
import logo from '../../assets/img/wiki-logo.png';

class Header extends Core {
  render() {
    return (
      <div className = {`${this.props.className}-wrapper`}>
        <div className = "logo">
          <img src = { logo } className = "header-logo" alt = "Логотип Википедии"/>
        </div>
        <div className = {`${this.props.className}-text-wrapper`}>
          <h1 className = "title">{this.props.title}</h1>
          <h2 className = "subtitle">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  };

  _loadImportantProps() {
    return ['className', 'title', 'subtitle'];
  }
};

export default Header;

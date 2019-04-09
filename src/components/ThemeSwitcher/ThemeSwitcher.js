import React from 'react';
import Core from '../Core/Core';
import sun from '../../assets/img/sun.svg';
import moon from '../../assets/img/moon.svg';

class ThemeSwitcher extends Core {
  render() {
    const { className, theme, changeTheme } = this.props;
    
    const imgFromTheme = {
      light: <img src = {sun} alt = "Светлая тема"/>,
      dark: <img src = { moon } alt = "Тёмная тема"/>,
    };

    return (
      <div className = {`${className} ${theme}`} onClick = { () => changeTheme(theme) }>
        { imgFromTheme[theme] }
      </div>
    );
  };

  _loadImportantProps() {
    return [...super._loadImportantProps(), 'theme', 'changeTheme'];
  };
};

export default ThemeSwitcher;

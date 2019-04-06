import React, { Component } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "header-block">
          <Content className = 'content-top'>
              <Header className = "header" title = "W-Searcher" subtitle = "Поиск по Википедии"/>
              <SearchBar className = "searchbar" placeHolder = "Искать"/> 
          </Content>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Block from '../Block/Block';
import actions from './App.actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className={`App ${this.props.theme}`}>
      <ThemeSwitcher
        className = "theme-switcher"
        theme = {this.props.theme}
        changeTheme = { this.props.changeTheme.bind(this) }
      />
        <Block className = "header-block" theme = {this.props.theme}>
          <Content className = 'content-top' theme = { this.props.theme }>
            <Header className = "header" title = "W-Searcher" subtitle = "Поиск по Википедии" theme = { this.props.theme }/>
            <SearchBar className = "searchbar" placeHolder = "Искать" theme = { this.props.theme }/> 
          </Content>
        </Block>
        <Block className = "results-block" theme = { this.props.theme }>
          <Content className = "content-results" theme = { this.props.theme }>
            <SearchResults className = "results" theme = { this.props.theme }/>
          </Content>
        </Block>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  theme: store.app.theme,
});

const mapDispatchToProps = dispatch => (
  {
    changeTheme: event => dispatch(
      actions.changeTheme(event)
    ),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);

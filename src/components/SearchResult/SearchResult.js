import React from 'react';
import Core from '../Core/Core';
import './SearchResult.scss';

class SearchResult extends Core {
  render() {
    const { className, theme } = this.props;
    return(
      <div className = {`${className}-wrapper ${theme}`}>
        <div className = {`${className}-title`}>
          <a href = {`https://ru.wikipedia.org/wiki/${this.props.title}`}>{this.props.title}</a>
        </div>
        <div className = {`${className}-snipper`}>
          <p dangerouslySetInnerHTML={{ __html: `${this.props.snippet}` }}></p>
        </div>
      </div>
    )
  }

  _loadImportantProps() {
    return [...super._loadImportantProps(), 'title', 'snippet'];
  }
};

export default SearchResult;

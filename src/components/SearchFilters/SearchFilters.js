import React from 'react';
import Core from '../Core/Core';
import Sorter from '../Sorter/Sorter';

class SearchFilters extends Core {
  render() {
    const { className, theme } = this.props;

    return (
      <div className = {`${className}-wrapper ${theme}`}>
        <Sorter
          className = "alphabet"
          title = "Заголовок"
          query = "name"
          theme = { this.props.theme }
          variants = {[
            { name: 'no', text: 'Без сортировки' },
            { name: 'up', text: 'А-Я' },
            { name: 'down', text: 'Я-А' },
          ]}
        />
      </div>
    );
  };

  _loadImportantProps() {
    return [...super._loadImportantProps()];
  };

};

export default SearchFilters;

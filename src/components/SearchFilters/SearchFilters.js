import React from 'react';
import Core from '../Core/Core';
import Sorter from '../Sorter/Sorter';

class SearchFilters extends Core {
  render() {
    const { className } = this.props;

    return (
      <div className = {`${className}-wrapper`}>
        <Sorter
          className = "alphabet"
          title = "Заголовок"
          query = "name"
          variants = {[
            { name: 'up', text: 'А-Я' },
            { name: 'down', text: 'Я-А' }
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

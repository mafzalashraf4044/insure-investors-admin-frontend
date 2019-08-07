import React from 'react';

import {isArray, isObject} from 'lodash';

import {
  DescriptionList,
  DescriptionListTitle,
} from './styled';

export default ({title, data, renderListItem}) => {

  const renderListItems = () => {
    console.log('render');
    
    if (isArray(data)) {
      console.log('1', data);
      
      return data.map((item, i) => renderListItem(item, i));
    } else if (isObject(data)) {
      return renderListItem(data);
    }
  }

  return (
    <DescriptionList>
      <DescriptionListTitle>{title}</DescriptionListTitle>
      {renderListItems()}
    </DescriptionList>
  );
};
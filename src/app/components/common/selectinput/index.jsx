import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import {
  FormControl,
} from './styled'

export default ({label, key, value, handleChange, data}) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={e => handleChange(key, value)}
      >
        {
          data.map((item, i) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};
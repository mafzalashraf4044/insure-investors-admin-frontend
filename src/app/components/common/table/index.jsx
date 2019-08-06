import React, {useState} from 'react';

import {
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
} from './styled';

export default ({columns, data}) => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);

  return (
    <Table>
      <THead>
        <Tr>
          {
            columns.map((column, i) => (
              <Th key={i}>
                {column.title}
              </Th>
            ))
          }
        </Tr> 
      </THead>
      <TBody>
        {
          data.map((row, iRow) => (
            <Tr
              key={iRow}
              onMouseEnter={() => setHoveredRowIndex(iRow)}
              onMouseLeave={() => setHoveredRowIndex(-1)}
            >
              {
                columns.map((column, iCol) => (
                  <Td key={iCol}>
                    {column.render(row, iRow === hoveredRowIndex)}
                  </Td>
                ))
              }
            </Tr>
          ))
        }
      </TBody> 
    </Table>
  );
};
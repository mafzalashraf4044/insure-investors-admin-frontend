import React from 'react';

import {
  Table,
  THead,
  Tr,
  Th,
  TBody,
  Td,
} from './styled';

export default ({columns, data}) => {
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
            <Tr key={iRow}>
              {
                columns.map((column, iCol) => (
                  <Td key={iCol}>
                    {column.render(row)}
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
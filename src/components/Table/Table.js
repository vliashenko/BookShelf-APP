import React from 'react';

const Table = ({ items }) => {
    return (
        <table style={{margin: "20px 40px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default Table;
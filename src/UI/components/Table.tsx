import React, { JSX } from 'react';
import '../styles/components/Table.scss';

interface TableProps {
  headers: string[];
  rows: any[];
  mapFunction: (rows: any[]) => JSX.Element[];
}

const Table = ({headers, rows, mapFunction}: TableProps) => {

  const tableHeaders = headers.map(title => <th key={title}>{title}</th>);
  const tableRows = mapFunction(rows);

  return <div className="table-wrapper p16">
    <table className="table">
      <thead>
      <tr>
        {tableHeaders}
      </tr>
      </thead>
      <tbody>
      {tableRows}
      </tbody>
    </table>
  </div>;
};

export default Table;
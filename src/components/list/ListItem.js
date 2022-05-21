import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useMemo } from 'react'
import {useTable} from 'react-table'
import classes from './ListItem.module.css'

const ListItem = (props) => {
    const {onDelete}=props;
    const columnsTable = [
    {
      Header: "First Name",
      accessor: "firstname",
    },
    {
      Header: "Second Name",
      accessor: "lastname",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "DOB",
      accessor: "DOB",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: (props) => {
          
        const rowIdx = props.row.original.id;
        return (
          <div>
            <button onClick={()=>{
            
                onDelete(rowIdx)}}>
              <i className="fas fa-trash action"></i>
            </button>
          </div>
        );
      },
    },
  ];
const detail=useSelector(state=>state.detail.details);
const columns = useMemo(() => columnsTable, []);
const data = useMemo(() => detail, [detail]);
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  return (
    <div>
      <table className="table"  {...getTableProps()}>
  <thead >
  {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
))}
  </thead>
  <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
    </tbody>
</table>
{data.length===0 &&<div className={classes.loading12}>Please wait....</div>}
    </div>
  )
}

export default ListItem

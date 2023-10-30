/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import jsonPlayers from "./Players.json";
import "./Rankings.css";
import { flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table'
import * as React from "react";
import { columnDef } from "./columns";

export default function Rankings() {

    const finalData = React.useMemo(()=> jsonPlayers,[]);
    const finalCol = React.useMemo(()=> columnDef,[]);

    const tableInstance = useReactTable({
        columns: finalCol,
        data: finalData,
        getCoreRowModel: getCoreRowModel(),
    })

    return(
        <rankings-body>
        <table>
            <thead>
                { tableInstance.getHeaderGroups().map((header) => {
                    return <trr key={header.rank}>
                        { header.headers.map((columnE) =>{
                            return <th key={columnE.rank} colSpan={columnE.colSpan}>
                                {flexRender(
                                    columnE.column.columnDef.header,
                                    columnE.getContext()
                                )}
                            </th>
                        })}
                    </trr>
                })}
            </thead>
            <tbody>
                { tableInstance.getRowModel().rows.map(rowE => {
                    return <tr key={rowE.rank}>
                        { rowE.getVisibleCells().map(cellE =>{
                            return <td key={cellE.rank}>
                                {flexRender(
                                    cellE.column.columnDef.cell,
                                    cellE.getContext()
                                )}
                            </td>
                        })}
                    </tr>
                })}
            </tbody>
        </table>
        </rankings-body>
    )
}

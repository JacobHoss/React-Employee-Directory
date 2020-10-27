import React from "react";
import "./style.css";

function DataTable({ data }) {

    const columns = [
        {
            name: "picture",
            displayName: "Profile Picture"
        },
        {
            name: "name",
            displayName: "Employee Name"
        },
        {
            name: "dob",
            displayName: "Date of Birth"
        },
        {
            name: "email",
            displayName: "Email"
        },
        {
            name: "phone",
            displayName: "Phone Number"
        }
    ];

    function placeColumn(colName, colObj, idx) {
        switch (colName) {
            case "picture":
                return <td key={idx}>
                    <img src={colObj[colName].medium} />
                </td>
            case "name":
                return <td key={idx}>{`${colObj[colName].first} ${colObj[colName].last}`}</td>
            case "phone":
            case "email":
                return <td key={idx}>{colObj[colName]}</td>
            case "dob":
                return <td key={idx}>{colObj[colName].date.slice(0,10).split("-")[1] + "-" + colObj[colName].date.slice(0,10).split("-")[2] + "-" + colObj[colName].date.slice(0,10).split("-")[0] }</td>
            default:
                return <td></td>
        }
    }
    return (
        <table cellPadding={10} cellSpacing={0} className="mx-auto w-auto">
            <thead className="bg-success">
                <tr>{data[0] && columns.map((col, idx) => <th key={idx}>{col.displayName}</th>)}</tr>
            </thead>
            <tbody className="bg-info">
                {data[0].map((row, idx) => (
                    <tr key={idx}>
                        {columns.map((column, idx) => placeColumn(column.name, row, idx))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;
import React from "react";

function DataTable({ data }) {
    console.log(data)
    const columns = [
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

    function placeColumn (colName, colObj, idx) {
        console.log(colObj);
        switch (colName) {
            case "name":
                return <td key={idx}>{`${colObj[colName].first} ${colObj[colName].last}`}</td>
            case "phone":
            case "email":
                return <td key={idx}>{colObj[colName]}</td>
            case "dob": 
                return <td key={idx}>{colObj[colName].date}</td>
            default: 
                return <td></td>
        }
    }
    return (
        <table cellPadding={4} cellSpacing={4}>
            <thead>
                <tr>{data[0] && columns.map((col, idx) => <th key={idx}>{col.displayName}</th>)}</tr>
            </thead>
            <tbody>
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
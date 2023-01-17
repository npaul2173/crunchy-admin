import * as React from 'react';

// export interface DataTable {
//     id: number
//     first_name: string
//     last_name: string
//     email: string
//     gender: string
//     ip_address: string
// }

export interface DataTable {
    key: string;
    name: string;
}

const tableDataSchema = [
    {
        key: "id",
        name: "ID"
    },
    {
        key: "first-name",
        name: "First Name"
    },
    {
        key: "last-name",
        name: "Last Name"
    },
    {
        key: "email",
        name: "Email"
    },
    {
        key: "ip-address",
        name: "IP Address"
    }
]

export  { tableDataSchema } ;
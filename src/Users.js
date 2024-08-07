import React from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable';

const users = [
    {
        id: 1,
        name: 'Shanilka',
    },
    {
        id: 2,
        name: 'Shashika',
    }
];

const Users = () => {
    return (
        <>
            <UserForm />
            <UsersTable datarows={users} />
        </>
    );
}

export default Users
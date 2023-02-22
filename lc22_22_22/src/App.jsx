import React from 'react';
import UsersList from './UserList';

const users = [
    { name: 'Tom', age: 20 },
    { name: 'Bob', age: 100 },
    { name: 'Rob', age: 32 },
    { name: 'Rim', age: 45 },
    { name: 'Skin', age: 27 },
    { name: 'Bobby', age: 26 },
    { name: 'Jack', age: 19 },
    { name: 'Bom', age: 21 },
    { name: 'DOM', age: 22 },
    { name: 'Toretto', age: 60 },
];

const App = () => {
    return <UsersList users={users} />;
};

export default App;

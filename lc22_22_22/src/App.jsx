import React from 'react';
import UsersList from './UserList';

import { users } from './users.js';

const App = () => {
    return <UsersList users={users} />;
};

export default App;

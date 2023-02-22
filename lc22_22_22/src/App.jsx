import React from 'react';
import UsersList from './UserList';

import { users } from './store.js';

const App = () => {
    return <UsersList users={users} />;
};

export default App;

import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise())
    return (
        <div>
            <h1>User Form Compo: {users.length}</h1>
            {
                users.map(user => <p key={user.id}> {user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;
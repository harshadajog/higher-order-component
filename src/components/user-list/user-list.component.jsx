import React from 'react';

import withData from './../../with-data';

const UserList = ({ data }) => (
            <div className='container user-list'>
                <h1>User List</h1>
                {data.map(user => (
                <div className='user' key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>))}
            </div>
)

export default withData(UserList, 'https://jsonplaceholder.typicode.com/users');
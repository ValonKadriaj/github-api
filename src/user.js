import React from 'react';

const User = ({ userName, avatar }) => (
  <div>
    <div>{userName && <h1>Name: {userName}</h1>}</div>

    <div>{avatar && <img src={avatar} alt="avatar" />}</div>
  </div>
);

export default User;

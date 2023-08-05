import React from 'react';
import {NavLink} from "react-router-dom";
import './user.less'


const User = ({user}) => {
  return (
    <div className='user-bg'>
      <div className='user'>
        <div className="user-header">
          <div className="user-header-name" >
            <NavLink to={`/card/${user.login}`}>{user.login}</NavLink>
          </div>
          <div className="user-header-id">
            ID пользователя: {user?.id}
          </div>
        </div>
        <a href={user?.html_url}>{user?.html_url}</a>
      </div>
    </div>
  );
};

export default User;
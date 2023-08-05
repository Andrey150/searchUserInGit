import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {useParams} from "react-router-dom";
import {getCurrentUser} from "../action/users";

import './card.less'


const Card = () => {
  const navigate = useNavigate();
  const {username} = useParams();
  const [user, setUser] = useState({owner:{}})

  useEffect(() => {
    getCurrentUser(username, setUser)
  }, [])

  return (
    <div>
      <button onClick={() => navigate(-1)}>go back</button>
      <div className="card">
        <div className="card__header">
          <img src={user.avatar_url} alt="avatar" className='avatar'/>
          <div className="card__header-description">
            <div className="name">{user.name}</div>
            <div className="type">{user.type}</div>
          </div>
        </div>
        <div className="bio">{user.bio}</div>
        <div className="profile">
          <div className="created">Created at {user.created_at}</div>
          <div className="updated">Updated at {user.updated_at}</div>
        </div>
        <div className="repos">Repos {user.public_repos}</div>
        <div className="follow">
          <div className="followers">Followers {user.followers}</div>
          <div className="following">Following {user.following}</div>
        </div>
      </div>

    </div>
  );
};

export default Card;
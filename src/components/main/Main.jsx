import React, {Suspense, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../action/users";
// import User from "./user/User";
import {setCurrentPage} from "../../reducers/usersReducer";
import {createPages} from '../../utils/pagesCreator';
import Error from "../error";

import './main.less'

const LazyUser = React.lazy(() => import('./user/User'));

const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.items);
  const currentPage = useSelector(state => state.users.currentPage);
  const perPage = useSelector(state => state.users.perPage);
  const isFetching = useSelector(state => state.users.isFetching);
  const isFetchingError = useSelector(state => state.users.isFetchingError);
  const [searchValue, setSearchValue] = useState('');
  const pagesCount = Math.ceil(1000 / perPage);
  const pages = []

  const [ order, setOrder ] = useState('desc')

  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getUsers( searchValue, currentPage, perPage, order ))
  }, [currentPage, order])

  const toggleOrder = () => {
    setOrder(order === 'desc' ? 'asc' : 'desc');
  };

  function searchHandler(){
    dispatch(setCurrentPage(1))
    dispatch(getUsers(searchValue, currentPage, perPage, order))
  }
  if (isFetchingError) {
    return <Error/>
  }

  return (
    <div>
      <div className="search">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text"  placeholder='Input user name' className="search-input"/>
        <button onClick={()=> searchHandler()} className="search-btn">Search</button>
        <button onClick={toggleOrder}>{order}</button>
      </div>
      {
        isFetching === false ?
          // users.map((user => <User key={user.id} user={user}/>))
          users.map((user => <Suspense fallback={<div>Loading...</div>}><LazyUser key={user.id} user={user}/></Suspense>))
          :
        <div className='fetching'/>
      }
      <div className="pages">
        {pages.map((page, index ) => <span
          key={index}
          className={currentPage === page ? 'current-page' : 'page'}
          onClick={() => dispatch(setCurrentPage(page))}
        >{page}</span>)}
      </div>
    </div>
  );
};

export default Main;
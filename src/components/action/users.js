import axios from 'axios';
import {setIsFetching, setIsFetchingError, setUsers} from "../../reducers/usersReducer";

export const getUsers = (searchQuery = '', currentPage = 1, perPage = 10, order="desc") => {

  if (searchQuery === '' || searchQuery === 'repositories') {
    searchQuery = 'repositories'
  } else {
    searchQuery += ' in:login';
  }

  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true))
      const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}&order=${order}&sort=repositories&per_page=${perPage}&page=${currentPage}`)
      dispatch(setUsers(response.data))
    } catch (e) {
      dispatch(setIsFetchingError(true))
      dispatch(setIsFetching(false))
    }
  }
}

export const getCurrentUser = async (username, setUser) => {
  const response = await axios.get(`https://api.github.com/users/${username}`)
  setUser(response.data)
}
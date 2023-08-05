import React from "react";
import { BrowserRouter } from "react-router-dom";
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import Main from "./Main";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

test('onChange work', async () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );

  const searchInput = screen.getByRole('textbox');
  const searchText = 'react';
  userEvent.type(searchInput, searchText);

  await waitFor(() => expect(searchInput.value).toBe(searchText));
});

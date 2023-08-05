import React from "react";
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import NotFoundPage from "./notFoundPage";
import {BrowserRouter} from "react-router-dom";

test("page not found", () => {
  render(
    <BrowserRouter>
      <NotFoundPage/>
    </BrowserRouter>
  );
  expect(screen.getByText('page not found'))
})

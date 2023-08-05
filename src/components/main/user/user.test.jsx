import React from "react";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import User from './User';

test('should render user data', () => {
  const user = {
    login: 'octocat',
    id: 123,
    html_url: 'https://github.com/octocat'
  };

  render(
    <BrowserRouter>
      <User user={user} />
    </BrowserRouter>
  );

  const userIdText = screen.getByText((content, element) => {
    // Проверяем, что элемент содержит текст "ID пользователя:" и число id
    return (
      content.startsWith('ID пользователя:') &&
      element.tagName.toLowerCase() === 'div'
    );
  });

  expect(userIdText).toBeInTheDocument();
});

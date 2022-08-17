import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from '../App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={ history }>{component}</Router>),
    history,
  });
};

test('Teste se topo da aplicação contém um conjunto fixo de links de navegação:', () => {
  const history = createMemoryHistory();
  render(
    <Router history={ history }>
      <App />
    </Router>,
  );
  const homeLink = screen.getByRole('link', { name: 'Home' });
  const aboutLink = screen.getByRole('link', { name: 'About' });
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(favoriteLink).toBeInTheDocument();
});

test('Teste se é redirecionada para Not Found ao entrar em uma URL desconhecida.', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/rotadesconhecida123');
  const h2PagenotFound = screen.getByRole('heading', { level: 2, name: /Page/ });
  expect(h2PagenotFound).toBeInTheDocument();
});

test('Teste se é redirecionada para a página inicial, ao clicar no link Home', () => {
  const { history } = renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);
  expect(history.location.pathname).toBe('/');
});

test('Teste se é redirecionada para a página de About,ao clicar no link About', () => {
  const { history } = renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);
  expect(history.location.pathname).toBe('/about');
});

test('Teste se é redirecionada para Pokémons Favoritados,ao clicar no favorites', () => {
  const { history } = renderWithRouter(<App />);
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
  expect(favoriteLink).toBeInTheDocument();
  userEvent.click(favoriteLink);
  expect(history.location.pathname).toBe('/favorites');
});

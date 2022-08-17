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

test('Teste o componente <Pokemon.js />', () => {
  renderWithRouter(<App />);
  const pokeType = screen.getByTestId('pokemon-type');
  const link = screen.getByRole('link', { name: 'More details' });
  const image = screen.getByAltText('Pikachu sprite');
  expect(image.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(image.alt).toBe('Pikachu sprite');
  expect(pokeType).toBeInTheDocument();
  expect(pokeType.innerHTML).toBe('Electric');
  expect(link.href).toEqual('http://localhost/pokemons/25');
  userEvent.click(link);
  const checkbox = screen.getByRole('checkbox');
  userEvent.click(checkbox);
  const imageFavorite = screen.getByAltText('Pikachu is marked as favorite');
  expect(imageFavorite.src).toBe('http://localhost/star-icon.svg');
  expect(imageFavorite.alt).toBe('Pikachu is marked as favorite');
});

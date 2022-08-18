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

test('Teste o componente <PokemonDetails.js />', () => {
  renderWithRouter(<App />);
  const link = screen.getByRole('link', { name: 'More details' });
  userEvent.click(link);
  const h2Details = screen.getByRole('heading', { level: 2, name: 'Pikachu Details' });
  const h2Summary = screen.getByRole('heading', { level: 2, name: 'Summary' });
  const pSummary = screen.getByText(/This intelligent Pokémon/);
  const h2 = screen.getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
  const imagemLocation = screen.getAllByAltText('Pikachu location');
  expect(imagemLocation[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(imagemLocation[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  const inputNode = screen.getByLabelText('Pokémon favoritado?');
  expect(h2Details).toBeInTheDocument();
  expect(h2Summary).toBeInTheDocument();
  expect(pSummary).toBeInTheDocument();
  expect(h2).toBeInTheDocument();
  expect(inputNode).toBeInTheDocument();
});

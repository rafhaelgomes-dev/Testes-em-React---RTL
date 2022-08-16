import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  render(<FavoritePokemons />);
  const pElement = screen.getByText(/No favorite pokemon found/i);
  expect(pElement).toBeInTheDocument();
});

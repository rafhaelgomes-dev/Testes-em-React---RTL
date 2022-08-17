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

test('Os botões de filtragem por tipo possuem o nome correto', () => {
  renderWithRouter(<App />);
  const botoesFiltros = screen.getAllByTestId('pokemon-type-button');
  expect(botoesFiltros[0].innerHTML).toBe('Electric');
  expect(botoesFiltros[1].innerHTML).toBe('Fire');
  expect(botoesFiltros[2].innerHTML).toBe('Bug');
  expect(botoesFiltros[3].innerHTML).toBe('Poison');
  expect(botoesFiltros[4].innerHTML).toBe('Psychic');
  expect(botoesFiltros[5].innerHTML).toBe('Normal');
  expect(botoesFiltros[6].innerHTML).toBe('Dragon');
});

test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);
  const botaoAll = screen.getByRole('button', { name: 'All' });
  expect(botaoAll).toBeInTheDocument();
  expect(botaoAll.innerHTML).toBe('All');
  userEvent.click(botaoAll);
});

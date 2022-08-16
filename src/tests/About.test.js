import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  render(<About />);
  const h2Element = screen.getByText(/About Pokédex/i);
  expect(h2Element).toBeInTheDocument();
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
  render(<About />);
  const pElement1 = screen.getByText(/encyclopedia/);
  const pElement2 = screen.getByText(/each/);
  expect(pElement1).toBeInTheDocument();
  expect(pElement2).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  render(<About />);
  const elementoImagem = screen.getByAltText('Pokédex');
  expect(elementoImagem).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});

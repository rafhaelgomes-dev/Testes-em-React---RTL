import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('Teste se a página tem um heading h2 com o texto Page requested not found', () => {
  render(<NotFound />);
  const h2Element = screen.getByRole('heading', { level: 2, name: /Page/ });
  expect(h2Element).toBeInTheDocument();
});

test('Teste se a página mostra a imagem', () => {
  render(<NotFound />);
  const elementoImagem = screen.getByAltText(/Pikachu/);
  expect(elementoImagem).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});

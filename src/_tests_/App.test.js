import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CurrencyConverter from '../pages/CurrencyConverter';
import CurrencyList from '../pages/CurrencyList';

describe('CurrencyConverter', () => {
  it('renders CurrencyConverter component', () => {
    render(<CurrencyConverter />);

    expect(screen.getByText(/Курс Обмена/i)).toBeInTheDocument();
  });
});

describe('CurrencyList', () => {
  it('renders CurrencyList component', async () => {
    render(<CurrencyList />);

    expect(screen.getByText(/Курс валют/i)).toBeInTheDocument();

    expect(await screen.findByRole('table')).toBeInTheDocument();
  });
});

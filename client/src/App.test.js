import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';



test('App renders without crashing', () => {
  rtl.render(<App />)
});

test('World Cup text is displayed on screen', async () => {
  const container = rtl.render(<App />)
  expect(container.queryByText('World Cup'))
})

test('Alex Morgan', async () => {
  const container = rtl.render(<App />)
  expect(container.queryByText('Alex Morgan'))
})

test('contains PlayersList div', () => {
  const container = rtl.render(<App />);
  container.getByTestId('playersList');
})
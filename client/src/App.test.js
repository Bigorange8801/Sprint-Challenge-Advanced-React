import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import PlayerList from './components/PlayerList';
import Navbar from './components/NavBar';


test('App renders to screen properly', () => {
  render(<App />);
});



test('Player List component renders', () => {
  render(<PlayerList />);
});


test('Navbar component renders', () => {
  render(<Navbar/>);
});
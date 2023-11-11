import { render } from '@testing-library/react';
// import App from '../App';
import CardList from '../components/CardList/CardList';

// function sum(a: number, b: number) {
//   return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('demo', () => {
//   expect(true).toBe(true);
// });

// test('Renders App', () => {
//   render(<App />);
//   expect(true).toBeTruthy();
// });

test('Renders CardList', () => {
  render(<CardList />);
  expect(true).toBeTruthy();
});

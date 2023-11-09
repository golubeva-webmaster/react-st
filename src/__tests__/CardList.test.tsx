function sum(a: number, b: number) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//
//
//

/**
 * @jest-environment jsdom
 */
// import React from 'react';
import CardList from '../components/CardList/CardList';
import { render } from '@testing-library/react';

test('test render', () => {
  // console.log(React)
  render(<CardList />);
});
//
//
//

// import { JSXElementConstructor, ReactElement } from 'react';

// // const Mock = () => {
// //   return <CardList  />;
// // };

// test('Component renders the specified number of cards', () => {
//   const cl = CardList as unknown as ReactElement<
//     any,
//     string | JSXElementConstructor<any>
//   >;
//   render(cl);
// });

//todo Appropriate message is displayed if no cards are present
// test("UserGreeter salutes a user", () => {
//   const user = { name: "Giorgio" };
//   render(
//     <UserContext.Provider value={user}>
//       <UserGreeter />
//     </UserContext.Provider>
//   );
//   expect(screen.getByText(`Hello ${user.name}!`)).toBeInTheDocument();
// });

// babel.config.js;
// export const presets = [
//   ['@babel/preset-env', { targets: { node: 'current' } }],
//   '@babel/preset-typescript',
// ];

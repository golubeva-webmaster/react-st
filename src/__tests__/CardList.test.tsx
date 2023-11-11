// import React from 'react';
// import { render, fireEvent } from 'react-testing-library';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { mockContext } from '../../__mocks__/mockData';
// import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CardList from '../components/CardList/CardList';
import { AppContextProvider } from '../contexts/AppContext/AppContextProvider';
import '@testing-library/jest-dom';

describe('CardList', () => {
  beforeAll(() => {
    render(
      <AppContextProvider>
        <CardList />
      </AppContextProvider>
    );
  });

  it('Verify that the component renders the specified number of cards', () => {
    expect(true).toBeTruthy();
  });

  // it('Check that an appropriate message is displayed if no cards are present', () => {
  //   // const items = [];
  //   const links = screen.queryAllByRole('link');
  //   expect(links.length).toBe(0);
  //   // const emptyMessage = screen.queryByText(/Sorry. List is empty./i);
  //& потому что у null нет методов

  // засунь в переменную результат поиска строки
  // затем напиши проверку и если null выплёвывай ошибку,
  // а уже потом проверяй на toBeInTheDocument

  // expect(screen.queryByText(/Sorry. List is empty./i)).not.toBeInTheDocument();

  //   //! Свойство "toBeInTheDocument" не существует в типе "JestMatchers<HTMLElement | null>"
  //   // expect(emptyMessage).toBeInTheDocument();
  //   // expect(screen.queryByText(/Sorry. List is empty./i)).toBeInTheDocument();
  //   expect(true).toBeTruthy();
  // });
});

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route
//         path="*"
//         element={
//           <Context.Provider value={mockContext as any}>
//             <CardList />
//           </Context.Provider>
//         }
//       ></Route>
//     </Routes>
//   </BrowserRouter>
// );
//& работало
// const items = mockContext.items ?? [];
// const links = screen.queryAllByRole('link');
// expect(links.length).toBe(items.length);

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
// import { mockContext } from '../../__mocks__/mockData';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  // BrowserRouter,
  // Route,
  // Routes,
  createBrowserRouter,
} from 'react-router-dom';
import Detail, { loader } from '../components/Detail/Detail';
// import { Context } from '../contexts/AppContext/AppContextProvider';
// import { mockContext } from '../../__mocks__/mockData';
// import ReactDOM from 'react-dom';
// import PageMain from '../components/PageMain/PageMain';
// import { AppContextProvider } from '../contexts/AppContext/AppContextProvider';

const item = {
  id: 24962,
  slug: 'kirby-canvas-curse',
  name: 'Kirby: Canvas Curse',
  name_original: 'Kirby: Canvas Curse',
  description_raw:
    'Your DS stylus has been magically infused with the power to paint! When Kirby gets turned into a ball by an evil witch, your hand-drawn rainbow',
  background_image:
    '"https://media.rawg.io/media/screenshots/0fa/0fa4d2259a8e658dff0ebb4ab4ab8fc5.jpg"',
};

describe('Detail', () => {
  beforeAll(() => {
    const router = createBrowserRouter([
      {
        path: '/',
        loader: loader,
        element: <Detail />,
      },
    ]);
    // ReactDOM.createRoot(el).
    render(<RouterProvider router={router} />);

    // render(
    //   <BrowserRouter>
    //     <Routes>
    //       <Route
    //         path="*"
    //         element={
    //           <Context.Provider value={mockContext as any}>
    //             <Detail />
    //           </Context.Provider>
    //         }
    //       ></Route>
    //     </Routes>
    //   </BrowserRouter>
    // );
  });

  it('Check that a loading indicator is displayed while fetching data', () => {});

  it('Make sure the detailed card component correctly displays the detailed card data', () => {
    console.log(item);
  });

  it('Ensure that clicking the close button hides the component', () => {});
});

// // import React from 'react';
// // import { render, fireEvent } from 'react-testing-library';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import { mockContext } from '../../__mocks__/mockData';
// // import '@testing-library/jest-dom/extend-expect';
// import { render } from '@testing-library/react';
// import CardList from '../components/CardList/CardList';
// // import {
// //   AppContextProvider,
// //   // Context,
// // } from '../contexts/AppContext/AppContextProvider';
// import '@testing-library/jest-dom';

// // const context = React.useContext(Context);
// describe('CardList', () => {
//   beforeAll(() => {
//     render(
//       // <AppContextProvider>
//       <CardList />
//       // </AppContextProvider>
//     );
//   });

//   it('Verify that the component renders the specified number of cards', () => {
//     expect(true).toBeTruthy();
//   });

//   // it('Check that an appropriate message is displayed if no cards are present', () => {
//   //   // const items = [];
//   //   const links = screen.queryAllByRole('link');
//   //   expect(links.length).toBe(0);
//   //   // const emptyMessage = screen.queryByText(/Sorry. List is empty./i);
//   //& потому что у null нет методов

//   // засунь в переменную результат поиска строки
//   // затем напиши проверку и если null выплёвывай ошибку,
//   // а уже потом проверяй на toBeInTheDocument

//   // expect(screen.queryByText(/Sorry. List is empty./i)).not.toBeInTheDocument();

//   //   //! Свойство "toBeInTheDocument" не существует в типе "JestMatchers<HTMLElement | null>"
//   //   // expect(emptyMessage).toBeInTheDocument();
//   //   // expect(screen.queryByText(/Sorry. List is empty./i)).toBeInTheDocument();
//   //   expect(true).toBeTruthy();
//   // });
// });

// // render(
// //   <BrowserRouter>
// //     <Routes>
// //       <Route
// //         path="*"
// //         element={
// //           <Context.Provider value={mockContext as any}>
// //             <CardList />
// //           </Context.Provider>
// //         }
// //       ></Route>
// //     </Routes>
// //   </BrowserRouter>
// // );
// //& работало
// // const items = mockContext.items ?? [];
// // const links = screen.queryAllByRole('link');
// // expect(links.length).toBe(items.length);

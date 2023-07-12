import { createBrowserRouter } from 'react-router-dom';
import Root from 'Root';
import MainPage from 'Pages/MainPage';
import DetailPage from 'Pages/DetailPage';

export const RootRouter = createBrowserRouter([
  {
    // TEST: fallback status check code. delete after styling.
    loader: async () => {
      return new Promise((res) => {
        setTimeout(() => {
          return res('finish');
        }, 1000);
      });
    },
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/:issueId',
        element: <DetailPage />,
      },
    ],
  },
]);

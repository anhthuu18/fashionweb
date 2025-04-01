import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { publicRoutes} from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
  //console.log('Rendering App with publicRoutes:', publicRoutes);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            //const Layout = route.layout === null ? Fragment : DefaultLayout
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}

          {/* {privateRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  user ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/login" replace /> // Chuyển hướng nếu chưa đăng nhập
                  )
                }
              />
            );
          })} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import {
  Routes,
  Route, useLocation, HashRouter,
} from 'react-router-dom';
import RootStore from './RootStore';
import STORE from './store';
import Home from './scenes/Home';
import Page1 from './scenes/Page1';

function CurrentRoute() {
  const location = useLocation();
  return (
    <div>
      {`Current route is: ${location.pathname}`}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <RootStore.Provider value={STORE}>
        <main role="main">
          <Container className="justify-content-center d-flex flex-column" fluid>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="*" element={<CurrentRoute />} />
            </Routes>
          </Container>
        </main>
      </RootStore.Provider>
    </HashRouter>
  );
}

export default App;

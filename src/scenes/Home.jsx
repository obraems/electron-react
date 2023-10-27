import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hello Work</h1>
      <Button as={Link} to="/page1" variant="primary">Navigate</Button>
    </div>
  );
}

export default Home;

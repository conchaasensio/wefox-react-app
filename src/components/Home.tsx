import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Inicio</p>
      <Link to="/detail">Go to detail</Link>
      <button onClick={() => navigate('/detail/67')}>Go to detail with a number</button>
    </div>
  );
};

export default HomePage;

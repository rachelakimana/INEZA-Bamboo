import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import Header from '../components/Header';
import Footer from '../components/Footer';
// eslint-disable-next-line arrow-body-style
const Main = () => {
  return (
    <>
      <Header />
      <div className="h-screen">
        <Router>{renderRoutes(routes)}</Router>
        <Footer />
      </div>
    </>
  );
};

export default Main;

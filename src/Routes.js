import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mainpage from './App';
import Aboutpage from './views/About-Us';
import contactpage from './views/Contact-us';
import Servicepage from './views/Services';

const Myroute = () => (
  <Router>
    <Route path="/" component={Mainpage} />
    <Route path="About-us " component={Aboutpage} />
    <Route path="Contact-us" component={contactpage} />
    <Route path="Services" component={Servicepage} />
  </Router>
);
export default Myroute;

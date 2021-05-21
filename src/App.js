import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './component/Header';
import ShopPage from './pages/ShopPage';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/cart" component={Cart} />
        <Route path="/shop/cart" component={Cart} />
        <ShopPage />
      </Switch>
    </Router>
  );
};

export default App;

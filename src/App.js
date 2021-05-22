import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './component/Header';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/cart" component={CartPage} />
        <ShopPage />
      </Switch>
    </Router>
  );
};

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './component/Header';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shop/:id" component={ProductDetail} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/cart" component={CartPage} />
        <Route exact path="/" component={HomePage} />
        <ShopPage />
      </Switch>
    </Router>
  );
};

export default App;

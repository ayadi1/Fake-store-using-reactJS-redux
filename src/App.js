import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import CartListing from "./components/CartListing";
import PaymentPage from "./components/PaymentPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartListing />} />
          <Route path="/cart" element={<CartListing />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route> 404 not Found </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

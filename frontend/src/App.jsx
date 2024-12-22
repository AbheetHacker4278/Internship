import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import womenn from './assets/womenn.png'
import premi from './assets/premi.png'
import yrs from './assets/yrs.png'

export default function App() {
  return (
    <main className="text-xl">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Premium" element={<Category category="Premium" banner={premi} />} />
          <Route path="/Winter-Wear" element={<Category category="Winter" banner={womenn} />} />
          <Route path="/Year-End-Stock" element={<Category category="Year End Sale" banner={yrs} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

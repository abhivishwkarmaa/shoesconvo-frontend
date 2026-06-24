import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage.jsx';
import { SetPasswordPage } from './pages/SetPasswordPage.jsx';
import { RegistrationCompletePage } from './pages/RegistrationCompletePage.jsx';
import { CategoryPage } from './pages/CategoryPage.jsx';
import { ProductListingPage } from './pages/ProductListingPage.jsx';
import { ProductDetailPage } from './pages/ProductDetailPage.jsx';
import { WishlistPage } from './pages/WishlistPage.jsx';
import { CartPage } from './pages/CartPage.jsx';
import { PaymentPage } from './pages/PaymentPage.jsx';
import { OrderSuccessPage } from './pages/OrderSuccessPage.jsx';
import { AccountPage } from './pages/AccountPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { MoveModal } from './components/MoveModal.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/set-password" element={<SetPasswordPage />} />
          <Route path="/registration-complete" element={<RegistrationCompletePage />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/products/:categorySlug" element={<ProductListingPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <MoveModal />
    </div>
  );
}

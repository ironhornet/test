import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homepage/HomePage";
import ProductsPage from "./pages/productsPage/ProductsPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import ManagementPage from "./pages/managementPage/ManagementPage";
import ProtectedRoute from "./hoc/ProtectedRoute";
import AuthProvider from "./hoc/authProvider/AuthProvider";
import FullProductCardPage from "./pages/fullProductCardPage/FullProductCardPage"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route path="products/:id" element={<FullProductCardPage/>}/>
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/management" element={<ManagementPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Customer from './pages/Customer';
import Order from './pages/Order';
import RegisterLogin from './Customer/RegisterLogin';
import BrowseRestaurants from './Customer/BrowseRestaurants';
import { useUser } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { OrdersProvider } from './context/OrdersContext';
import { MenuProvider } from './context/MenuContext';
import { RestaurantOrdersProvider } from './context/RestaurantOrdersContext';
import { RestaurantProvider } from './context/RestaurantContext';
import { DeliveryProvider } from './context/DeliveryContext';
import { AdminProvider } from './context/AdminContext';
import MyOrders from './Customer/MyOrders';
import Profile from './Customer/Profile';
import ManageMenus from './RestaurantOwner/ManageMenus';
import ViewOrders from './RestaurantOwner/ViewOrders';
import UpdateRestaurantDetails from './RestaurantOwner/UpdateRestaurantDetails';
import DeliveryPersonnelDashboard from './DeliveryBoy/DeliveryPersonnelDashboard';
import TrackDeliveryStatus from './DeliveryBoy/TrackDeliveryStatus';
import ViewAvailableDeliveries from './DeliveryBoy/ViewAvailableDeliveries';
import ManageDeliveryAvailability from './DeliveryBoy/ManageDeliveryAvailability';
import AdminDashboard from './Admin/AdminDashboard';

const App = () => {
  const { role } = useUser(); // Use role from context
  console.log("for app " + role)
  return (
    <AdminProvider>
      <DeliveryProvider>
        <MenuProvider>
          <RestaurantProvider>
            <RestaurantOrdersProvider>
              <OrdersProvider>
                <CartProvider>
                  <Router>
                    <NavBar />
                    <Routes>
                      {role === 'customer' && (
                        <>
                          <Route path="/" element={<Customer />} />
                          <Route path="/orders" element={<MyOrders />} />
                          <Route path="/browse" element={<BrowseRestaurants />} />
                          <Route path="/profile" element={<Profile />} />
                        </>
                      )}
                      {role === 'owner' && (
                        <>
                          <Route path="/" element={<Customer />} />
                          <Route path="/orders" element={<ViewOrders />} />
                          <Route path="/browse" element={<ManageMenus />} />
                          <Route path="/profile" element={<UpdateRestaurantDetails />} />
                        </>
                      )}
                      {role === 'delivery' && (
                        <>
                          <Route path="/" element={<DeliveryPersonnelDashboard />} />
                          <Route path="/track" element={<TrackDeliveryStatus />} />
                          <Route path="/order" element={<ViewAvailableDeliveries />} />
                          <Route path="/settings" element={<ManageDeliveryAvailability />} />
                        </>
                      )}
                      {role === 'admin' && (
                        <>
                          <Route path="/" element={<AdminDashboard />} />
                        </>
                      )}
                      <Route path="/login" element={<RegisterLogin />} />
                      <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                  </Router>
                </CartProvider>
              </OrdersProvider>
            </RestaurantOrdersProvider>
          </RestaurantProvider>
        </MenuProvider>
      </DeliveryProvider>
    </AdminProvider>
  );
};

export default App;

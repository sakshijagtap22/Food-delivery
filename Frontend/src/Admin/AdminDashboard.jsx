// components/AdminDashboard.js
import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const AdminDashboard = () => {
  const { users, orders, toggleUserStatus, updateOrderStatus } = useAdmin();

  const orderData = [
    { name: 'Pizza Place', orders: 40 },
    { name: 'Burger House', orders: 30 },
    { name: 'Sushi Spot', orders: 25 },
  ];

  return (
    <DashboardContainer>
      <h1>Admin Dashboard</h1>

      <Section>
        <h2>Manage Users</h2>
        {users.map((user) => (
          <UserCard key={user.id}>
            <p>{user.name} ({user.role})</p>
            <button onClick={() => toggleUserStatus(user.id)}>
              {user.active ? 'Deactivate' : 'Activate'}
            </button>
          </UserCard>
        ))}
      </Section>

      <Section>
        <h2>Manage Orders</h2>
        {orders.map((order) => (
          <OrderCard key={order.id}>
            <p>Order #{order.id} - {order.restaurant}</p>
            <p>Status: {order.status}</p>
            <button onClick={() => updateOrderStatus(order.id, 'Cancelled')}>Cancel Order</button>
          </OrderCard>
        ))}
      </Section>

      <Section>
        <h2>Generate Reports</h2>
        <ChartContainer>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Section>

      <Section>
        <h2>Monitor Platform Activity</h2>
        <StatsContainer>
          <StatCard>
            <h3>Active Users</h3>
            <p>{users.filter(user => user.active).length}</p>
          </StatCard>
          <StatCard>
            <h3>Total Orders</h3>
            <p>{orders.length}</p>
          </StatCard>
        </StatsContainer>
      </Section>
    </DashboardContainer>
  );
};

export default AdminDashboard;


const Section = styled.div`
  margin-bottom: 20px;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

const OrderCard = styled(UserCard)``;

const StatCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
`;

// Add this to your styled components
const DashboardContainer = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

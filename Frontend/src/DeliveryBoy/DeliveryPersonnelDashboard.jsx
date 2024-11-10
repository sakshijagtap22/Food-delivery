// components/DeliveryPersonnelDashboard.js
import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const incomeData = [
  { day: 'Mon', earnings: 40 },
  { day: 'Tue', earnings: 70 },
  { day: 'Wed', earnings: 55 },
  { day: 'Thu', earnings: 80 },
  { day: 'Fri', earnings: 90 },
  { day: 'Sat', earnings: 100 },
  { day: 'Sun', earnings: 50 },
];

const deliveryTimeData = [
  { day: 'Mon', time: 30 },
  { day: 'Tue', time: 25 },
  { day: 'Wed', time: 40 },
  { day: 'Thu', time: 35 },
  { day: 'Fri', time: 20 },
  { day: 'Sat', time: 30 },
  { day: 'Sun', time: 45 },
];

const DeliveryPersonnelDashboard = () => (
  <DashboardContainer>
    <h1>Delivery Personnel Dashboard</h1>
    <SummaryContainer>
      <SummaryCard>
        <h3>Total Income</h3>
        <p>$385</p>
      </SummaryCard>
      <SummaryCard>
        <h3>Completed Deliveries</h3>
        <p>24</p>
      </SummaryCard>
    </SummaryContainer>

    <ChartsContainer>
      <ChartCard>
        <h3>Earnings by Day</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard>
        <h3>Average Delivery Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={deliveryTimeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="time" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </ChartsContainer>
  </DashboardContainer>
);

export default DeliveryPersonnelDashboard;

const DashboardContainer = styled.div`
  padding: 20px;
`;

const SummaryContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SummaryCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
`;

const ChartsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ChartCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

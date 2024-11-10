// Profile.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  const handleSave = () => {
    alert('Profile updated!');
    // Here you would also send this data to an API for backend update
  };

  return (
    <ProfileContainer>
      <h2>My Profile</h2>
      <ProfileForm>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleSave}>Save Changes</button>
      </ProfileForm>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  padding: 20px;
`;

const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  input {
    padding: 8px;
    margin-top: 4px;
  }

  button {
    background-color: #28a745;
    color: white;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
`;

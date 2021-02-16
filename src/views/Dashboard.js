import React from 'react';
import { Badges, Repos, User, Search, Navbar } from '../components';

const Dashboard = () => {


  return (
    <main>
      <Navbar></Navbar>
      <Search></Search>
      <Badges></Badges>
      <User></User>
      <Repos></Repos>
    </main>
  );
};

export default Dashboard;

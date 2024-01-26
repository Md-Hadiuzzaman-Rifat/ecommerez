import React from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className="adminDashboard">
      <div className="dashboardContainer">
      <Header />
      <Layout>
        <Sidebar />
        <MainContent />
      </Layout>
      </div>
    </div>
  );
};

export default Dashboard;

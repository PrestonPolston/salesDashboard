import React from "react";
import SideBar from "./components/sideBar";
import UserCard from "./components/userCard";
import FavoriteCard from "./components/favoriteCard";
import SaleCard from "./components/saleCard";
import NewSales from "./components/newSales";
import GeoInfo from "./components/geoInformation";
import "./app.css";

function App() {
  return (
    <>
      <SideBar />
      <div className="flex-container">
        <UserCard className="card" />
        <FavoriteCard className="card" />
        <SaleCard className="card" />
      </div>
      <div className="flexCont">
        <NewSales className="table" />
        <GeoInfo className="table" />
      </div>
    </>
  );
}

export default App;

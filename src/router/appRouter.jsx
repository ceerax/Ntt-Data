import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserProvider } from "../context/UserProvider";
import { Search, Info } from "../pages/index";
import { Navbar } from "../Ui";

export const AppRouter = () => {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="search" element={<Search />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </UserProvider>
  );
};

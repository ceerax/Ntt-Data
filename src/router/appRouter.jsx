import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Search, Info } from "../pages/index";
import { Navbar } from "../Ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />

        <Route path="search" element={<Search />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </>
  );
};

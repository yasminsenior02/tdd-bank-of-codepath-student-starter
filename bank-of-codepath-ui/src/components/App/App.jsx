import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [isLoading, setisLoading] = useState(false);
  const [transactions, settransactions] = useState([]);
  const [transfers, settransfers] = useState([]);
  const [error, seterror] = useState();
  const [filterInputValue, setFilterInputValue] = useState("");

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar
          filterInputValue={filterInputValue}
          setFilterInputValue={setFilterInputValue}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="transactions/:transactionId"
              element={<TransactionDetail />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

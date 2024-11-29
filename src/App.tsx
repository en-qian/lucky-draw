import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/global.scss';
import NotFound from '@pages/404';
import { Route, Routes } from 'react-router-dom';
import LuckyDraw from '@components/LuckyDraw';

function App() {
  return (
    <>
      <ToastContainer position={'top-center'} autoClose={1500} />
      <Routes>
        <Route path="/" element={<LuckyDraw />}></Route>
        <Route path="/lucky-draw" element={<LuckyDraw />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

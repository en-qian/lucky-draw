import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/global.scss';

function App() {
  return (
    <>
      <ToastContainer position={'top-center'} autoClose={1500} />
    </>
  );
}

export default App;

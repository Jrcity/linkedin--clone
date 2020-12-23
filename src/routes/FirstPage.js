import React from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const FirstPage = () => {
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
};

export default FirstPage;

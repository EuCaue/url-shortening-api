import React from 'react';

import Header from '../../components/Header';
import MiddlePage from '../../components/MiddlePage';
import ShortForm from '../../components/ShortForm';
import BottomPage from '../../components/BottomPage';

export default function UrlShort() {
  return (
    <>
      <Header />
      <main>
        <MiddlePage />
        <ShortForm />
        <BottomPage />
      </main>
    </>
  );
}

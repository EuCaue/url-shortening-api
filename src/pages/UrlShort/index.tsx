import React from 'react';

import Header from '../../components/Header';
import MiddlePage from '../../components/MiddlePage';
import ShortForm from '../../components/ShortForm';
import BottomPage from '../../components/BottomPage';
import Footer from '../../components/Footer';
import { Container } from './styled';

export default function UrlShort() {
  return (
    <>
      <Header />
      <main>
        <MiddlePage />
        <Container>
          <ShortForm />
          <BottomPage />
        </Container>
      </main>
      <Footer />
    </>
  );
}

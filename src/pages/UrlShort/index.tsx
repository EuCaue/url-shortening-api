import React from 'react';
import axios from 'axios';

import { Container } from './styled';
import logo from '../../assets/images/logo.svg';
import Header from '../../components/Header';
import MiddlePage from '../../components/MiddlePage';
import ShortForm from '../../components/ShortForm';

export default function UrlShort() {
  return (
    <>
      <Header />
      <MiddlePage />
      <ShortForm />
    </>
  );
}

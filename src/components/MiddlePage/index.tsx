import React from 'react';

import illustrationWorking from '../../assets/images/illustration-working.svg';
import { Img, H1, H2, Link, Span, Container } from './styled';

export default function MiddlePage() {
  return (
    <Container>
      <Span>
        <H1>More than just shorter links</H1>
        <H2>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </H2>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Get Started
        </Link>
      </Span>

      <Img src={illustrationWorking} alt="Illustration Working" />
    </Container>
  );
}

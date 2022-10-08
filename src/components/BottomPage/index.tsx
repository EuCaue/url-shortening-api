import React from 'react';

import { Container, Background, Span, IconSVG, H1, P } from './styled';
import iconBrand from '../../assets/images/icon-brand-recognition.svg';
import iconRecord from '../../assets/images/icon-detailed-records.svg';
import iconFullyCustom from '../../assets/images/icon-fully-customizable.svg';

interface BoxImg {
  icon: string;
  h1: string;
  p: string;
}

const BoxWithImage = (props: BoxImg): JSX.Element => {
  return (
    <Background>
      <IconSVG icon={props.icon} />
      <H1>{props.h1}</H1>
      <P>{props.p}</P>
    </Background>
  );
};

export default function BottomPage() {
  return (
    <Container>
      <Span>
        <BoxWithImage
          icon={iconBrand}
          h1="Brand Recognition"
          p="Boost you brand recognition with each click.
		Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
      </Span>
      <BoxWithImage
        icon={iconRecord}
        h1="Detailed Records"
        p="Gain insights into who is clicking your links. Knowing When and where people engage with you content helps inform better decisions"
      />
      <BoxWithImage
        icon={iconFullyCustom}
        h1="Fully Customizable"
        p="
		Improve brand awareness and content discoverability through customizable links, supercharging audiencia engagement.
		"
      />
    </Container>
  );
}

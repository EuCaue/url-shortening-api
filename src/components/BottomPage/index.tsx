import React from 'react';

import {
  Container,
  ContainerFlex,
  Background,
  BlueLine,
  IconSVG,
  H1,
  P,
  DivImage,
  H1Boost,
  LinkBottom,
} from './styled';
import iconBrand from '../../assets/images/icon-brand-recognition.svg';
import iconRecord from '../../assets/images/icon-detailed-records.svg';
import iconFullyCustom from '../../assets/images/icon-fully-customizable.svg';

interface BoxIcon {
  icon: string;
  h1: string;
  p: string;
}

function BoxWithIcon({ icon, h1, p }: BoxIcon): JSX.Element {
  return (
    <Background>
      <BlueLine />
      <IconSVG icon={icon} />
      <H1>{h1}</H1>
      <P>{p}</P>
    </Background>
  );
}

export default function BottomPage() {
  return (
    <Container>
      <ContainerFlex>
        <BoxWithIcon
          icon={iconBrand}
          h1="Brand Recognition"
          p="Boost you brand recognition with each click.
		Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <BoxWithIcon
          icon={iconRecord}
          h1="Detailed Records"
          p="Gain insights into who is clicking your links. Knowing When and where people engage with you content helps inform better decisions."
        />
        <BoxWithIcon
          icon={iconFullyCustom}
          h1="Fully Customizable"
          p="
		Improve brand awareness and content discoverability through customizable links, supercharging audiencia engagement.
		"
        />
      </ContainerFlex>

      <DivImage>
        <H1Boost>Boost your links today</H1Boost>
        <LinkBottom>Get Started</LinkBottom>
      </DivImage>
    </Container>
  );
}

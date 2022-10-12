import React from 'react';

import {
  Container,
  Background,
  BlueLine,
  IconSVG,
  H1,
  P,
  DivImage,
  H1Boost,
  LinkBottom,
  WhiteHover,
} from './styled';
import iconBrand from '../../assets/images/icon-brand-recognition.svg';
import iconRecord from '../../assets/images/icon-detailed-records.svg';
import iconFullyCustom from '../../assets/images/icon-fully-customizable.svg';

interface BoxIcon {
  icon: string;
  h1: string;
  p: string;
}

const BoxWithIcon = (props: BoxIcon): JSX.Element => {
  return (
    <Background>
      <BlueLine></BlueLine>
      <IconSVG icon={props.icon} />
      <H1>{props.h1}</H1>
      <P>{props.p}</P>
    </Background>
  );
};

export default function BottomPage() {
  return (
    <>
      <Container>
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
      </Container>
      <DivImage>
        <H1Boost>Boost your links today</H1Boost>
        <WhiteHover>
          <LinkBottom>Get Started</LinkBottom>
        </WhiteHover>
      </DivImage>
    </>
  );
}

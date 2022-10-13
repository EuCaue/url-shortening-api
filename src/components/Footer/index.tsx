import React from 'react';

import {
  FooterContainer,
  ShortlyLogo,
  Ul,
  Li,
  LinkLi,
  H1,
  FlexIcons,
} from './styled';
import Icon from '../../assets/styles/ShortlyWhiteSVG';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import iconPinterest from '../../assets/images/icon-pinterest.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';

interface ListProps {
  H1?: string;
  li1: string;
  li2: string;
  li3: string;
  li4?: string;
}

interface IconsProps {
  iconFacebook: string;
  iconTwitter: string;
  iconPinterest: string;
  iconInstagram: string;
  textAltFacebook: string;
  textAltTwitter: string;
  textAltPinterest: string;
  textAltInstagram: string;
}

const UlList = (props: ListProps) => {
  return (
    <>
      <Ul>
        <li>
          <H1>{props.H1}</H1>
        </li>

        <Li>
          <LinkLi href="#" target="_self" rel="noopener noreferrer">
            {props.li1}
          </LinkLi>
        </Li>

        <Li>
          <LinkLi href="#" target="_self" rel="noopener noreferrer">
            {props.li2}
          </LinkLi>
        </Li>

        <Li>
          <LinkLi href="#" target="_self" rel="noopener noreferrer">
            {props.li3}
          </LinkLi>
        </Li>

        {props.li4 ? (
          <Li>
            <LinkLi href="#" target="_self" rel="noopener noreferrer">
              {props.li4}
            </LinkLi>
          </Li>
        ) : (
          <></>
        )}
      </Ul>
    </>
  );
};

const Icons = (props: IconsProps) => {
  return (
    <FlexIcons>
      <img src={props.iconFacebook} alt={props.textAltFacebook} />
      <img src={props.iconTwitter} alt={props.textAltTwitter} />
      <img src={props.iconPinterest} alt={props.textAltPinterest} />
      <img src={props.iconInstagram} alt={props.textAltInstagram} />
    </FlexIcons>
  );
};

export default function Footer() {
  return (
    <FooterContainer>
      <ShortlyLogo>
        <Icon fill="white" />
      </ShortlyLogo>
      <UlList
        H1="Features"
        li1="Link Shortening"
        li2="Branded links"
        li3="Analytics"
      />
      <UlList H1="Resources" li1="Blog" li2="Developers" li3="Support" />
      <UlList
        H1="Company"
        li1="About"
        li2="Our Team"
        li3="Careers"
        li4="Contact"
      />
      <Icons
        iconFacebook={iconFacebook}
        textAltFacebook="Facebook Logo"
        iconTwitter={iconTwitter}
        textAltTwitter="Twitter Logo"
        iconPinterest={iconPinterest}
        textAltPinterest="Pinterest Logo"
        iconInstagram={iconInstagram}
        textAltInstagram="Instagram Logo"
      />
    </FooterContainer>
  );
}

import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Bold } from '../Header/HeaderStyles';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center style={{ textAlign: "left" }}>
          Hello!
        </SectionTitle>
        <SectionText style={{ textAlign: "left" }}>
          My name is <Bold>Valentino Kolinger</Bold>, and in the next few steps I'm going to brief you about my work experience and knowledge as web developer.
          <br/> <br/>So, let's begin!
        </SectionText>
        <Link href="mailto:kolinger315@gmail.com">
        <Button>Contact Me</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
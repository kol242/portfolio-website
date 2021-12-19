import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Bold, BoldLink } from '../Header/HeaderStyles';
import Link from 'next/link';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      In early 2019 I am starting my programming journey learning from web courses and tutorials. I created my first projects during 2019 and 2020, focusing mostly on projects that would serve me as an exercise. 
      <br/> <br/>At the end of 2020, I joined the <Link href="https://www.facebook.com/Udruga-edIT-2608005559273247"><BoldLink style={{ cursor: 'pointer' }}>edIT association</BoldLink></Link> within the <Link href="http://www.efos.unios.hr/"><BoldLink style={{ cursor: 'pointer' }}>Faculty of Economics in Osijek</BoldLink></Link>, where I further improved my skills and knowledge. 
      Finally, during 2021, I am employed through a student contract as a web developer within the company <Link href="https://infokarta.hr/"><BoldLink style={{ cursor: 'pointer' }}>Infokarta Ltd.</BoldLink></Link>
      </SectionText>
    </Section>
  );
};

export default Timeline;

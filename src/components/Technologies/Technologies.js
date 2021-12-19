import React from 'react';
import { FaVuejs, FaNodeJs, FaFigma, FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiPostgresql } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Bold, BoldLink } from '../Header/HeaderStyles';
import Link from 'next/link';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I gained my knowledge of technologies through various courses and tutorials, but I gained most of my experience working as a web developer for the company <Link href="https://infokarta.hr/"><BoldLink style={{ cursor: 'pointer' }}>Infokarta Ltd.</BoldLink></Link>
    <br/> <br />During my work within the mentioned company in 3 months, I learned the most about using <Bold>Vue.js</Bold>, but I also improved other programming languages such as <Bold>HTML, CSS and Javacript</Bold>.
    <br/> <br />Also, I posses knowledge of <Bold>Git</Bold> and other tools for project organisation <Bold>(Jira, Slack, Trello, etc.)</Bold>. The next section shows technologies in which I have experience working with.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <FaVuejs /> Vue.js <br/>
            <FaReact /> React.js <br/>
            <FaHtml5 /> HTML <br/>
            <FaCss3Alt /> CSS <br/>
            <FaSass /> SCSS <br/>
            <IoLogoJavascript /> JavaScript <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <FaNodeJs /> Node.js <br />
            <SiPostgresql /> PostgreSQL <br />
            <DiMongodb/> MongoDB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            <FaFigma /> Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import {
  Description,
  Main,
  Summary,
  Box,
  Title,
  EducationBox,
  Desc,
  ProjectBox,
  Case,
  ProjectDesc,
  WorkList,
  BoxTitle,
} from './About.styled';
import { HiChatBubbleLeftEllipsis, HiAcademicCap } from 'react-icons/hi2';
import { RiAdminFill } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';

// BsGithub

export const About = () => {
  return (
    <Main>
      <h1>Artem Kostiukevych</h1>
      <Summary>
        <BoxTitle>
          <HiChatBubbleLeftEllipsis size={25} color="#524e4e" />
          <h3>Summary</h3>
        </BoxTitle>
        <Box>
          <Description>
            I am an experienced and passionate Front-End developer with
            knowledge of HTML, CSS, JavaScript and React. I have a proven track
            record of utilizing the Agile /Scrum methodology to successfully
            deliver projects on time, within budget and with a focus on user-
            friendliness. I thrive in challenging and dynamic environments where
            I can help make a positive difference to both everyday life and
            business with my creative problem-solving skills. I am a fast
            learner, responsible and always up for a challenge.
          </Description>
        </Box>
      </Summary>
      <Case>
        <BoxTitle>
          <BsGithub size={30} color="#524e4e" />
          <h3>Project Experience</h3>
        </BoxTitle>
        <Box>
          <ProjectBox>
            <a
              href="https://yevhenii770.github.io/team-it__lions/"
              target="_blank"
              rel="noopener norefferer noreferrer"
            >
              <h4>
                Ice Cream,{' '}
                <span style={{ fontWeight: '100' }}>
                  {' '}
                  <a
                    href="https://github.com/Yevhenii770/team-it__lions"
                    target="_blank"
                    rel="noopener norefferer noreferrer"
                  >
                    [link]
                  </a>
                </span>
              </h4>
            </a>
            <ProjectDesc>[HTML, CSS, Parcel, SCSS, JS]</ProjectDesc>
            <Desc>
              Ice company website with responsive layout, burger menu, modal
              window and attractive design. Role: Developer
            </Desc>
          </ProjectBox>
        </Box>
        <Box>
          <ProjectBox>
            <a
              href="https://ArtemKos2022.github.io/goit-react-hw-08-phonebook/"
              target="_blank"
              rel="noopener norefferer noreferrer"
            >
              <h4>
                Phonebook,{' '}
                <span style={{ fontWeight: '100' }}>
                  <a
                    href="https://github.com/ArtemKos2022/goit-react-hw-08-phonebook"
                    target="_blank"
                    rel="noopener norefferer noreferrer"
                  >
                    [link]
                  </a>
                </span>
              </h4>
            </a>

            <ProjectDesc>
              [React (Hooks, Routers, Redux, Redux Toolkit)]
            </ProjectDesc>
            <Desc>
              A simple phonebook connected to Swagger backend API - you can
              register, log in, add, remove or filter contacts, log out. Role:
              Developer.
            </Desc>
          </ProjectBox>
        </Box>
        <Box>
          <ProjectBox>
            <a
              href="https://malakhow-alexandr.github.io/filmoteka-landing__team-work/"
              target="_blank"
              rel="noopener norefferer noreferrer"
            >
              <h4>
                Filmoteka,{' '}
                <span style={{ fontWeight: '100' }}>
                  <a
                    href="https://github.com/Malakhow-Alexandr/filmoteka-landing__team-work"
                    target="_blank"
                    rel="noopener norefferer noreferrer"
                  >
                    [link]
                  </a>
                </span>
              </h4>
            </a>
            <ProjectDesc>
              [HTML, SASS, JS, Handlebars, REST API, AJAX, Parcel]
            </ProjectDesc>
            <Desc>
              Application for choosing a movie. Role: Scrum-master,developer App
              component with Public and Private routes, AuthPage page logic.
              Deploy project on Netlify. Role: Developer
            </Desc>
          </ProjectBox>
        </Box>
      </Case>
      <div>
        <Title>Work Experience</Title>
        <Box>
          <RiAdminFill size={55} color="#D9D9D9" />
          <ul>
            <li>
              <h4>Construction company</h4>
              <p>2018 - up to now | Ukraine</p>
              <WorkList>
                <li>Landscaping</li>
              </WorkList>
              {/* <p>Achievement: Best employee 2020 and 2021</p> */}
            </li>
          </ul>
        </Box>
      </div>

      <Case>
        <Title>Education</Title>
        <Box>
          <TbCertificate size={52} color="#D9D9D9" />
          <EducationBox>
            <h4>Free Code Capmp</h4>
            <h5>JavaScript</h5>
            <p>January 2023</p>
          </EducationBox>
        </Box>
        <Box>
          <HiAcademicCap size={60} color="#D9D9D9" />
          <EducationBox>
            <h4>National Polytechnic University</h4>
            <h5>Energy management</h5>
            <p>Master's degree</p>
            <p>September 2005 - June 2011 | Ukraine</p>
          </EducationBox>
        </Box>
      </Case>
    </Main>
  );
};

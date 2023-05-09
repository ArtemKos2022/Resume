import {
  Sidebar,
  SidebarAddressItem,
  SidebarAddressLink,
  SidebarEl,
  SidebarElFigure,
  SidebarImg,
  SidebarInfo,
  SidebarList,
} from './Skills.styled';
import { MdAddIcCall, MdMarkEmailRead } from 'react-icons/md';
import { TbHomeHand } from 'react-icons/tb';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

export const Skills = () => {
  return (
    <Sidebar>
      <SidebarElFigure></SidebarElFigure>
      <SidebarImg src={require('images/IMG_8111.jpg')} alt={'candidat'} />
      <SidebarInfo>
        <div>
          <address>
            <h3 style={{ fontStyle: 'normal' }}>Contacts</h3>
            <ul>
              <SidebarAddressItem>
                <SidebarAddressLink href="mailto:info@devstudio.com">
                  <MdMarkEmailRead
                    size={20}
                    style={{ color: '#fff', marginRight: 10 }}
                  />
                  temma13@ukr.net
                </SidebarAddressLink>
              </SidebarAddressItem>
              <li>
                <SidebarAddressLink href="tel:+380967840290">
                  <MdAddIcCall
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  +380 96 784 02 90
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink
                  href="https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4001801,29.8747463,9z/data=!4m15!1m8!3m7!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!3b1!8m2!3d46.482526!4d30.7233095!16zL20vMGZmbXA!3m5!1s0x40d4cf4ee15a4505:0x764931d217014https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4435257,30.4508861,11.25z/data=!4m15!1m8!3m7!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!3b1!8m2!3d46.482526!4d30.7233095!16zL20vMGZmbXA!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM06fe!8m2!3d50.4501!4d30.5234!16zL20vMDJzbjM0"
                  target="_blank"
                  rel="noopener norefferer noreferrer"
                >
                  <TbHomeHand
                    size={20}
                    style={{ color: '#fff', marginRight: 10 }}
                  />
                  Ukraine - Kyiv
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink
                  href="https://www.linkedin.com/in/dmytro-datsiuk-283673246/"
                  target="_blank"
                  rel="noopener norefferer noreferrer"
                >
                  <BsLinkedin
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  LinkedIn
                </SidebarAddressLink>
              </li>
              <li>
                <SidebarAddressLink
                  href="https://github.com/ArtemKos2022"
                  target="_blank"
                >
                  <BsGithub
                    size={20}
                    style={{
                      color: '#fff',
                      marginRight: 10,
                    }}
                  />
                  GitHub
                </SidebarAddressLink>
              </li>
            </ul>
          </address>
          <h3>Hard Skills</h3>
          <SidebarList>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>NodeJS</li>
          </SidebarList>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <SidebarList>
            <li>Organization</li>
            <li>Confidence</li>
            <li>Single-minded</li>
            <li>Communication</li>
            <li>Time Managment</li>
          </SidebarList>
        </div>
        <div>
          <h3>Languages</h3>
          <SidebarList>
            <li>English - advanced</li>
            <li>Ukranian - native</li>
          </SidebarList>
        </div>
      </SidebarInfo>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
      <SidebarEl></SidebarEl>
    </Sidebar>
  );
};

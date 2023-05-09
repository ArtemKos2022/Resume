import { About } from './components/About/About';
import { GlobalStyle } from './GlobalStyle';
import { Flex, Layout } from './Layout';
import { Skills } from './components/Skills/Skills';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Flex>
        <About />
        <Skills />
      </Flex>
    </Layout>
  );
};

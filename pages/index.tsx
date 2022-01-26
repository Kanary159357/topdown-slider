import type { NextPage } from 'next';
import Container from '../components/Container';
import View from '../components/View';
import SecondView from '../components/SecondView';
import ThirdView from '../components/ThirdView';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <View color={'orange'}></View>
        <SecondView />
        <ThirdView />
      </Container>
    </>
  );
};

export default Home;

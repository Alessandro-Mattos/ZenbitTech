import {Provider} from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import ContactForm from "./components/Form/ContactForm";
import './App.css';
import Footer from "./components/Footer/Footer";
import clouds from './assets/clouds.svg';
import MapImage from "./components/Map/Map";

const Container = styled.section `
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: left;
  background-image: url(${clouds});
  margin: 0;
  padding: 1%;

  * {
    font-family: 'Apercu', sans-serif;
  }
`;

function App() {
    return (
        <Provider store={store}>
            <Container>
                <ContactForm/>
                <MapImage/>
            </Container>
            <Footer/>
        </Provider>
    );
}

export default App;

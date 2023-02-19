import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import ContactForm from "./components/Form/contactForm";
import './App.css';
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  background-image: url('src/assets/clouds.svg')
  margin: 0;
  padding: 0;

  * {
    font-family: 'Apercu', sans-serif;
  }
`;

function App() {
  return (
    <Provider store={store}>
    <Container>
      <ContactForm />
      <Footer />
    </Container>
    </Provider>
  );
}

export default App;

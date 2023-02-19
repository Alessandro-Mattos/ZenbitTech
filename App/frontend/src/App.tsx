import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import ContactForm from "./components/Form/contactForm";
import './App.css';

const Container = styled.div`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }
`;

function App() {
  return (
    <Provider store={store}>
    <Container>
      <ContactForm />
    </Container>
    </Provider>
  );
}

export default App;

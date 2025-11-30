import { Menu } from "./components/Menu";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { CountDown } from "./components/CountDown";
import { FormComponent } from "./components/Form";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <FormComponent />
      </Container>
    </>
  );
}

export default App;

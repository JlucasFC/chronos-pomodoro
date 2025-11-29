import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Timer } from "lucide-react";

function App() {
  return (
    <>
      <Container>
        <Header>
          <Timer />
          <h1>Chronos</h1>
        </Header>
      </Container>
    </>
  );
}

export default App;

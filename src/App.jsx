import Header from "./components/Header";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import { useGlobalContext } from "./context";

function App() {
  const { showTicket } = useGlobalContext();

  return (
    <>
      <Header />
      <Form />
      {showTicket && <Ticket />}
    </>
  );
}

export default App;

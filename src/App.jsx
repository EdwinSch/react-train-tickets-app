import Header from "./components/Header";
import Map from "./components/Map";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import { useGlobalContext } from "./context";

function App() {
  const { showTicket } = useGlobalContext();

  return (
    <>
      <Header />
      {showTicket || <Map />}
      {showTicket || <Form />}
      {showTicket && <Ticket />}
    </>
  );
}

export default App;

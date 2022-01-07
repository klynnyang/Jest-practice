import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import { Container } from "react-bootstrap";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <div className="App">
      <Container>
        <OrderDetailsProvider>
          {/* Summary page and entry page needs provider */}
          <OrderEntry />
        </OrderDetailsProvider>
        {/* Confirmation page does not need provider */}
      </Container>
      <SummaryForm />
    </div>
  );
}

export default App;

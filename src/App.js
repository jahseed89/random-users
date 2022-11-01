import { BrowserRouter } from "react-router-dom";
import LandingRoute from "./layout/LandingRoute";

const App = () => {
  return (
    <BrowserRouter>
      <LandingRoute />
    </BrowserRouter>
  );
};

export default App;

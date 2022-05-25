import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Routes from "./Routes";

function App() {
  const state = useContext(AuthContext);
  console.log(state);

  return (
      <Routes />
  );
}

export default App;

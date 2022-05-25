import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {

  return (
    <div className="container">
      <Navbar/>
    </div>
  );
}

export default Dashboard;

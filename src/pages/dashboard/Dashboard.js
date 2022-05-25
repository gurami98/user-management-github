import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container">
      <h1> Hello {user.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;

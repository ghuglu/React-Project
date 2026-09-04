import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="dashboard-card">
          <h2>
            Welcome back, {user?.firstName || "User"}!
          </h2>

          <p>
            You are successfully logged in to WebTech Practice.
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
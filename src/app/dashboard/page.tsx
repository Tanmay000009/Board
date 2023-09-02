import DashboardComponent from "../../components/dashboard/Dashboard";
import Navbar from "../../components/dashboard/nav/Navbar";

const Dashboard = () => {
  return (
    <>
      <main className="bg-[#F8FAFF] h-screen w-screen flex flex-row">
        <Navbar />
        <div className="overflow-scroll flex-grow">
          <DashboardComponent />
        </div>
      </main>
    </>
  );
};

export default Dashboard;

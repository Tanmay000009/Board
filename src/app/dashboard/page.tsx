import DashboardComponent from "../../components/dashboard/Dashboard";
import Navbar from "../../components/dashboard/nav/Navbar";

const Dashboard = () => {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <main className="bg-[#F8FAFF] h-screen w-screen flex flex-row">
        <Navbar />
        <DashboardComponent />
      </main>
    </>
  );
};

export default Dashboard;

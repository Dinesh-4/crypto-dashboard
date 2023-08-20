import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";


const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title={"Dashboard"}>
        <PortfolioSection />
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;

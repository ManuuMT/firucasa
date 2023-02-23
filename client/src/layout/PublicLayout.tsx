import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const PublicLayout: React.FC = () => {
  return (
    <div className="absolute bg-slate-100 top-0 left-0 w-full h-full">
      <div className="container mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;

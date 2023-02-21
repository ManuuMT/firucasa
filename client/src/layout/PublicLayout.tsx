import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const PublicLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default PublicLayout;

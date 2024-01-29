import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";

const App = () => {
  return (
    <>
      <header className="mb-7   bg-blue-400 py-3">
        <Header />
      </header>

      <main>
        <Breadcrumbs />

        <Outlet />
      </main>
    </>
  );
};

export default App;

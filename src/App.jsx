import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <header className="mb-7 flex items-center justify-between  bg-blue-400 py-3">
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;

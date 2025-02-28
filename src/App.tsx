import "./App.css";
import { Header } from "Components/Header";
import MainLayout from "Components/layouts/MainLayout";
import { FilterProvider } from "Components/Contexts/FilterContext";

function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Header />
        <MainLayout />
      </div>
    </FilterProvider>
  );
}

export default App;

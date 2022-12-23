import Header from "../container/Header";
import HomePage from "../pages/HomePage";
import Plants from "../pages/Plants";
import Trees from "../pages/Trees";
import NewPlant from "../pages/NewPlant";
import { PagePlant } from "../container/PagePlant";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import {
  PlantsContext,
  PlantsContextProvider,
} from "../context/search/PlantState";

function App(): JSX.Element {
  return (
    <>
      <HashRouter>
        <PlantsContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plants" element={<Plants />}>
              <Route path=":slug" element={<PagePlant />} />
            </Route>
            <Route path="/trees" element={<Trees />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/newPlant" element={<NewPlant />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </PlantsContextProvider>
      </HashRouter>
    </>
  );
}

export default App;

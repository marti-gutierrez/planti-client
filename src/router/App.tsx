import Header from "../container/Header";
import HomePage from "../pages/HomePage";
import Plants from "../pages/Plants";
import Trees from "../pages/Trees";
import NewPlant from "../pages/NewPlant";
import { PagePlant } from "../container/PagePlant";
import { HashRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<Plants />}>
            <Route path=":slug" element={<PagePlant />} />
          </Route>
          <Route path="/trees" element={<Trees />} />
          <Route path="/newPlant" element={<NewPlant />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

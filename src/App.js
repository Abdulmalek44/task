import { Route, Routes } from "react-router-dom";
import { Home, MovieDetails } from "./Pages";


function App() {
  return (
    <>
      <Routes>
        <Route path="/task" element={<Home />} />
        <Route path="/search-details/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;

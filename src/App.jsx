// https://www.tabnine.com/code/java/classes/com.google.api.services.books.model.Volume$VolumeInfo$ImageLinks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Genres from "./components/Genres";
import Authors from "./components/Authors";
import BookName from "./components/BookName";
import BookDetails from "./components/BookDetails";
import Keywords from "./components/Keywords";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/genres" element={<Genres />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/keywords" element={<Keywords />} />
            <Route path="/name" element={<BookName />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

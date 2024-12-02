import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import fantasyBooks from "./data/fantasy.json";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div className="flex-grow-1">
        <MyNav />
        <Welcome />
        <BookList books={fantasyBooks} />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;

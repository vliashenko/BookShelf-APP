import { Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar/Appbar";
import HomeView from "./views/HomeView";
import AuthorView from "./views/AuthorView";
import BooksView from "./views/BooksView";
import NotFoundView from "./views/NotFoundView";
import BookItemView from "./views/BookItemView";

function App() {
  return (
    <div className="App">
        <Appbar/>

        <Routes>
          <Route 
            exact
            path="/" 
            element= {
              <HomeView/>
            }
          />
        
          <Route 
            path="/authors" 
            element= {
              <AuthorView/>
            }
          />

          <Route 
            exact
            path="/books/" 
            element= {
              <BooksView/>
            }
          />
          
          <Route 
            path="/books/:id" 
            element= {
              <BookItemView/>
            }
          />

          <Route path='*' element={<NotFoundView/>}/>
        </Routes>
    </div>
  );
}

export default App;

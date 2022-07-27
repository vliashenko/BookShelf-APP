import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar/Appbar";
// import HomeView from "./views/HomeView";
// import AuthorView from "./views/AuthorView";
// import BooksView from "./views/BooksView";
// import NotFoundView from "./views/NotFoundView";
// import BookItemView from "./views/BookItemView";
// import AuthorSubView from "./views/AuthorSubView";
// import TableView from "./views/TableView";
import Loader from "./components/Loader/Loader";

const HomeView = lazy(() => import("./views/HomeView" /*webpackChunkName: "home-view"*/));
const BooksView = lazy(() => import("./views/BooksView" /*webpackChunkName: "books-view"*/));
const AuthorView = lazy(() => import("./views/AuthorView" /*webpackChunkName: "author-view"*/));
const BookItemView = lazy(() => import("./views/BookItemView" /*webpackChunkName: "book-item-view"*/));
const NotFoundView = lazy(() => import("./views/NotFoundView" /*webpackChunkName: "not-found-view"*/));
const AuthorSubView = lazy(() => import("./views/AuthorSubView" /*webpackChunkName: "author-sub-view"*/));
const TableView = lazy(() => import("./views/TableView" /*webpackChunkName: "table-view"*/));


function App() {
  return (
    <div className="App">
        <Appbar/>
          <Suspense fallback={<Loader/>}>
            <Routes>
              
              <Route exact path="/" element= {<HomeView/>}/>
              
              <Route path="/authors" element= {<AuthorView/>}>
                <Route path=":authorId" element={<AuthorSubView/>} />
              </Route>

              <Route path="/books/"  element= {<BooksView/>}/>
              <Route path="/books/:id" element= {<BookItemView/>}/>

              <Route path="/table" element={<TableView/>}/>

              <Route path='*' element={<NotFoundView/>}/>
            </Routes>
          </Suspense>
    </div>
  );
}

export default App;

import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={SinglePost} path="/post/:slug" />
      <Route component={Post} path="/post" />
      <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

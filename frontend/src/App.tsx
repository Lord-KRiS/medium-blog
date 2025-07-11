import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import BlogsbyTag from "./pages/BlogsbyTag";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:id" element={<Blog />}></Route>
        <Route path="/blog/tag/:tag" element={<BlogsbyTag />}></Route>
        <Route path="/publish" element={<Publish />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

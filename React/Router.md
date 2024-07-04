import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
</BrowserRouter>

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
return (
<>
<nav>
<ul>
<li>
<Link to="/">Home</Link> // <Link> is used to set the URL and keep track of browsing history.
</li>
<li>
<Link to="/blogs">Blogs</Link>
</li>
<li>
<Link to="/contact">Contact</Link>
</li>
</ul>
</nav>

      <Outlet /> // The <Outlet> renders the current route selected.
    </>

)
};

export default Layout;

const Header = () => {
    return (
        <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
           <h1 className="logo"><a href="index.html">Site Logo<span>.</span></a></h1>
           <nav id="navbar" className="navbar">
              <ul>
                 <li className="dropdown">
                    <a href="index.html"><span>Product</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                       <li><a href="product-page.html">Product 1</a></li>
                       <li><a href="product-page.html">Product 2</a></li>
                       <li><a href="product-page.html">Product 3</a></li>
                    </ul>
                 </li>
                 <li className="dropdown">
                    <a href="/"><span>Client</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                       <li><a href="checkout.html">Client 1</a></li>
                       <li><a href="checkout.html">Client 2</a></li>
                       <li><a href="checkout.html">Client 3</a></li>
                    </ul>
                 </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
           </nav>
        </div>
     </header>
    )
}

export default Header;
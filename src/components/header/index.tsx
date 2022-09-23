import { Link } from 'react-router-dom'
import { clients } from "../../dummyData/client";

const Header = () => {
   return (
      <header id="header" className="d-flex align-items-center">
         <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo"><Link to="/">Site Logo<span>.</span></Link></h1>
            <nav id="navbar" className="navbar">
               <ul>
                  <li className="dropdown">
                     <Link to="/"><span>Client</span> <i className="bi bi-chevron-down"></i></Link>
                     <ul>
                        {clients.map((client: { name: string; id: string; }, index) => (
                           <li key={`Link-${index}`}>
                              <Link to={`/${client.id}`} key={`Link-${index}`}>{client.name}</Link>  
                           </li>
                        ))}
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
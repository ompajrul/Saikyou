import logo from "../images/saikyou_v.png";
import { Link } from "react-router-dom";
export default function Navibar(){
return(
<nav class="navbar navbar-expand-lg my-1 bg-body-tertiary shadow">
  <div class="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} style={{height:'8vh'}}></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/commission">Commission</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Portofolio</Link>
        </li>
     
       
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
)
}


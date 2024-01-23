import { Link } from "react-router-dom";
import { GlobalContext } from "../config/Context";

function Navbar() {
  const { isAuthenticated, navhandleLogout } = GlobalContext();

 
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><b>LIBRARY MANAGEMENT</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto">
          </div>
          <div className='d-flex'>
          <Link to={"/admin"} className="btn btn-warning" type="submit">Admin Dashboard</Link> 
            {
              isAuthenticated ? 
              <button className="btn btn-warning ms-2"  title="logout" onClick={() => navhandleLogout()}>Logout</button>
              :
              null
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

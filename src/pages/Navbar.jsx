import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../config/Context";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = GlobalContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout")
    setIsAuthenticated(false)
    navigate("/admin")
  }
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
            {
              isAuthenticated ? <><Link to={"/admin"} className="btn btn-warning" type="submit">Admin Dashboard</Link> <button className="btn btn-warning ms-2" href="#" title="logout" onClick={() => handleLogout()}>Logout</button></> :
                <Link to={"/admin"} className="btn btn-warning" type="submit">Admin Dashboard</Link>
            }
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

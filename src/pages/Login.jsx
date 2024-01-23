import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../config/Context';
function Login() {
  const { isAuthenticated, setIsAuthenticated } = GlobalContext()
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    let userCredential = { [e.target[0].name]: e.target[0].value, [e.target[1].name]: e.target[1].value }

    if (userCredential.email === "admin@gmail.com" && userCredential.password === "12345") {
      setIsAuthenticated(true)
      navigate("/admin")
    } else {
      setIsAuthenticated(true)
    }
  }
  
  return (
    <>
      <div className='row'>
        <div className='col-xxl-4 offset-xxl-4 col-xl-4 offset-xl-4 col-lg-6 offset-lg-3  col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-10 offset-1'>
          <div className="card mt-5">
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text" >We will never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

import { createContext,useContext,useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
// import {Get} from "./api/APImethods"
import ApiMethods from "./api/APImethods";
const Wrapper = createContext()
const ContextWrapper = ({children}) =>{
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authors, setAuthors] = useState(null)
  const [books, setBooks] = useState(null)
  // const [data,setData] = useState();
 useEffect(()=>{},[]);

 console.log(ApiMethods());
//------------> NavBar
  const navhandleLogout = () => {
    console.log("logout")
    setIsAuthenticated(false)
    navigate("/admin")
  }
// form loginform
  const loginfhandleSubmit = (e) => {
    e.preventDefault()
    const userCredential = { [e.target[0].name]: e.target[0].value, [e.target[1].name]: e.target[1].value }
    if (userCredential.email === "admin@gmail.com" && userCredential.password === "12345") {
      setIsAuthenticated(true)
      navigate("/admin/addbooks")
    } else {
      setIsAuthenticated(false)
    }
  }
  const FlowData = {
    isAuthenticated,
    setIsAuthenticated,
    authors,
    setAuthors,
    books,
    setBooks,
    navhandleLogout,
    loginfhandleSubmit,
  };
  return(
    <Wrapper.Provider value={FlowData}>
      {children}
    </Wrapper.Provider>
  )
}

export const GlobalContext = () =>{
  return useContext(Wrapper);
}

export default ContextWrapper;
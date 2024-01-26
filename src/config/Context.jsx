import { createContext,useContext,useState,useEffect } from "react"
import { GetAuthors,GetBooks } from "./api/API";
import { useNavigate } from "react-router-dom";

const Wrapper = createContext()
const ContextWrapper = ({children}) =>{

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [authors, setAuthors] = useState(null)
  const [books, setBooks] = useState(null)
  useEffect(() => { GetAuthors(setAuthors), GetBooks(setBooks) }, [authors,books]);
  const navigate = useNavigate();
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
    GetAuthors,
    GetBooks,
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
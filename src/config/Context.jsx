import { createContext,useContext,useState,useEffect } from "react"
import { GetAuthors,GetBooks } from "./api/API";

const Wrapper = createContext()
const ContextWrapper = ({children}) =>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authors, setAuthors] = useState(null)
  const [books, setBooks] = useState(null)
  useEffect(() => { GetAuthors(setAuthors), GetBooks(setBooks) }, []);

  const FlowData = {
    isAuthenticated,
    setIsAuthenticated,
    GetAuthors,
    GetBooks,
    authors,
    setAuthors,
    books,
    setBooks
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
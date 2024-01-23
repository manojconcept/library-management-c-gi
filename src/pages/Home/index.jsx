import Book from '../Book'
function index() {
  return (
    <>
      <div className='container my-5'>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

      </div>
      <div className='container min-vh-100'>
        <div className='row g-3 books-container'>
          <Book />
          <Book />
          <Book />
          <Book />

          <p className='text-center my-5'>No Books Available!</p>
        </div>
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default index

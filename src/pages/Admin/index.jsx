import Footer from "../Footer"
import { Link } from "react-router-dom";
import "./index.css"
import { Fragment } from "react";
import { GlobalContext } from "../../config/Context";

const Dashboard = () => {
  const { authors, books } = GlobalContext()
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="p-3 mt-5 list-container border rounded">
            <h3 className="p-3">Book List <Link to={"/admin/addbooks"} className="btn btn-primary mx-2 float-end">Add Book</Link></h3>
            {books.length === 0 ? <h4 className="p-3">No books added yet 😒</h4> : <table className="table book-list">
              <thead>
                <tr>
                  <th className="book-id" scope="col">#</th>
                  <th className="book-name" scope="col">Name</th>
                  <th className="book-author" scope="col">Author</th>
                  <th className="book-isbn" scope="col">ISBN</th>
                  <th className="book-pub-date" scope="col">Publication Date</th>
                  <th className="book-actions" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  books.map((book, index) => {
                    const d = new Date(book.pub_date)
                    let authorID = Number.parseInt(book.author) - 1
                    return (
                      <Fragment key={index}>
                        <tr>
                          <th scope="row">{book.id}</th>
                          <td>{book.title}</td>
                          <td>{authors[authorID].name}</td>
                          <td>{book.isbn}</td>
                          <td>{d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}</td>
                          <td>
                            <button className="btn btn-primary me-3">Edit</button>
                            <button className="btn btn-primary">Delete</button>
                          </td>
                        </tr>
                      </Fragment>
                    )
                  })
                }
              </tbody>
            </table>}
          </div>
          <div className="p-3 mt-5 list-container border rounded">
            <h3 className="p-3">Author List <Link to={"/admin/addauthors"} className="btn btn-warning mx-2 float-end" >Add Author</Link></h3>
            {authors.length === 0 ? <h4 className="p-3">No authors added yet 😒</h4> : <table className="table author-list">
              <thead>
                <tr>
                  <th className="author-id" scope="col">#</th>
                  <th className="author-name" scope="col">Name</th>
                  <th className="author-dob" scope="col">Date of Birth</th>
                  <th className="author-bio" scope="col">Biography</th>
                  <th className="book-actions" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  authors.map((author, index) => {
                    const d = new Date(author.dob)
                    return (
                      <Fragment key={index}>
                        <tr>
                          <th scope="row">{author.id}</th>
                          <td>{author.name}</td>
                          <td>{d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}</td>
                          <td>{author.bio}</td>
                          <td>
                            <button className="btn btn-primary me-3">Edit</button>
                            <button className="btn btn-primary">Delete</button>
                          </td>
                        </tr>
                      </Fragment>
                    )
                  })
                }

              </tbody>
            </table>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard

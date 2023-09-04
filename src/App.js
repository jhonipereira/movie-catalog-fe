import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [alertMessage, setAlertMessage] = useState("")
  const [alertClassName, setAlertClassName] = useState("d-none")
  const [jwtToken, setJwtToken] = useState("")

  const navigate = useNavigate();

  const logOut = () => {
    setJwtToken("")
    navigate("/")
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col">
          <h1 className="mt-3">Movie Catalog</h1>
        </div>
        <div className="col text-end">
          { jwtToken === "" ? 
            <Link to="/login"><span className="badge bg-primary">Login</span></Link>
            :
            <Link to="#!" onClick={logOut}><span className="badge bg-danger">Logout</span></Link>
          }
        </div>
        <hr className="mb-3" />
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav className="justify-content-center list-group ">
              <li className="list-group-item list-group-item-action">
                  <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="list-group-item list-group-item-action">
                  <Link to="/movies" className="nav-link" href="/movies">Movies</Link>
              </li>
              <li className="list-group-item list-group-item-action">
                  <Link to="/genres" className="nav-link" href="#">Genres</Link>
              </li>
              { jwtToken !== "" ?
                  <>
                  <li className="list-group-item list-group-item-action">
                      <Link to="/admin/movie/add" className="nav-link" href="#">Add movie</Link>
                  </li>
                  <li className="list-group-item list-group-item-action">
                      <Link to="/manage-catalogue" className="nav-link" href="#">Manage catalogue</Link>
                  </li>
                  <li className="list-group-item list-group-item-action">
                      <Link to="/graphql" className="nav-link" href="#">GraphQL</Link>
                  </li>
                  </>
                : null }
          </nav>
        </div>
        <div className="col-md-10">
          <Alert
            message={alertMessage}
            className={alertClassName}
          />
          <Outlet context={{
            jwtToken, setJwtToken,  setAlertClassName, setAlertMessage 
          }} />

        </div>
      </div>
    </div>
  );
}

export default App;

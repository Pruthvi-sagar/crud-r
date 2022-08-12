import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteUser } from "./redux/action";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const details = useSelector((e) => e.details);
  const addToRedux = () => {
    dispatch(add(email, name));
  };
  const deleteCard = (index) => {
    dispatch(deleteUser(index));
    console.log(details);
  };
  const edit = (index) => {
    const user = details.find((e, i) => index === i);
    console.log(user);
    setEmail(user.email);
    setName(user.name);
    dispatch(deleteCard(index));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="w-50">
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <button type="submit" class="btn btn-primary" onClick={addToRedux}>
            Submit
          </button>
        </div>
        <div className="section">
          <div class="card w-50 mt-5">
            {details.map((e, i) => (
              <div
                class="card-body my-3"
                key={i}
                style={{ border: "1px solid black", borderRadius: "22px" }}
              >
                <h5 class="card-title">{e.name}</h5>
                <p class="card-text">{e.email}</p>
                <button
                  href="#"
                  class="btn btn-primary mx-5 px-3"
                  onClick={() => {
                    edit(i);
                  }}
                >
                  edit
                </button>
                <button
                  href="#"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteCard(i);
                  }}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

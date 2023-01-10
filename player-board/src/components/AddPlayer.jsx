import { useState, useSyncExternalStore } from "react";

export default function AddPlayer(props) {
  const [users, setUsers] = useState([]);
  const generateUser = () => {
    users.map((user, index) => {
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>
          <button className="btn">-</button>0<button className="btn">+</button>
        </td>
      </tr>;
    });
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add player
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Insert player info
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label>Player Name: </label>
              <input></input>
              <label>Player Score: </label>
              <input></input>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  props.test("testUser", 10);
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "../Administrador/administrador.css";
import swal from "sweetalert";
import axios from "axios";
import { _url } from "../envairoment";


const NuevoProducto = () => {
  const [{ user, equipments }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);

  let idFavorite = [];
  let myFavorite = [];

  equipments.map((item) => {
    if (user.datosUser.favorite.includes(item._id)) {
      myFavorite.push(item);
    }
  });
  const favorite = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      swal({
        title: "Go to sign in to post your opinions",
        icon: "error",
        buttons: "ok",
      });
    } else {
      axios
        .put(
          `${_url}api/favorite/${id}`,
          {},
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((response) => {
          setReload(!reload);
        });
    }
  };

  //Orly al array My Favorite le puedes hacer el map de las cards
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "7vh",
        }}
      >
     {/*NUEVO PRODUCTO */}
     <div
          style={{
            marginLeft: "7vw",
            borderStyle: "solid",
            borderWidth: "0.5px",
            borderColor: "rgb(217, 217, 217)",
            borderRadius: "10px",
            height:"100%",
            maxHeight: "76vh",
          }}
        >
          <h3 style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <strong>New Product</strong>
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "0vw",
              marginBottom: "2vw",
              marginTop: "1vw",
              borderStyle: "solid",
              borderWidth: "0px",
              borderColor: "rgb(217, 217, 217)",
              borderRadius: "10px",
              width: "35vw",
              height:"100%",
              maxHeight: "70vh",
            }}
          >
            <div style={{ marginLeft: "1vw", marginRight: "2vw", marginTop:"2.5vh" }}>
              <form>
                <div class="input-group mb-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Type
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Name
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Description
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"22vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Time
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Image
                  </span>
                  <input
                    type="file"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Price
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    functions
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"22.9vw"}}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ marginTop: "3vh", marginBottom: "3vh" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

     {/*CONFIRMACION DATOS */}
     <div
          style={{
            marginLeft: "3vw",
            borderStyle: "solid",
            borderWidth: "0.5px",
            borderColor: "rgb(217, 217, 217)",
            borderRadius: "10px",
            height:"100%",
            maxHeight: "76vh",
          }}
        >
          <h3 style={{ marginTop: "1vh", marginLeft: "1vw" }}>
            <strong>Modification Product Detail</strong>
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "0vw",
              marginBottom: "2vw",
              marginTop: "1vw",
              borderStyle: "solid",
              borderWidth: "0px",
              borderColor: "rgb(217, 217, 217)",
              borderRadius: "10px",
              width: "35vw",
              height:"100%",
              maxHeight: "70vh",
            }}
          >
            <div style={{ marginLeft: "1vw", marginRight: "2vw", marginTop:"2.5vh" }}>
              <form>
                <div class="input-group mb-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Type
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Name
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Description
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"22vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Time
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Image
                  </span>
                  <input
                    type="file"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    Price
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"26.9vw"}}
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    functions
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    style={{width:"22.9vw"}}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ marginTop: "3vh", marginBottom: "3vh" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default NuevoProducto;

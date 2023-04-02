import React, { useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "../Administrador/administrador.css";
import swal from "sweetalert";
import axios from "axios";
import Notificaciones from "./Notificaciones";
import NuevoProducto from "./NuevoProducto";

const Home = () => {
  const [{ user, equipments, notifica }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);

  let idFavorite = [];
  let myFavorite = [];

  equipments.map((item) => {
    if (user.datosUser.favorite.includes(item._id)) {
      myFavorite.push(item);
    }
  });

  return (
    <>
      <section className="section2">
        <div className="banner-admin">


        </div>
      </section>

	  <div className='subtitle-principal-web mt-5 '>
											<h3><strong>Notifications account manage</strong></h3>
										</div>

      {/*          <Notificaciones />
       */}

      <div style={{ marginTop: "10vh", display: "flex", flexDirection: "row" }}>
        {/* <div className="btn-group-vertical" >
					<div class="dropdown">
						<button
							class="btn btn-light dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							style={{ width: "300px" }}
						>
							<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{notifica}
								<span class="visually-hidden">unread messages</span>
							</span>
						</button>

						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li>
								<a class="dropdown-item" href="#">
									Apps
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									Social Media
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									PCs
								</a>
							</li>
						</ul>
					</div>
					<button type="button" class="btn btn-light">
						New Product
					</button>
					<button type="button" class="btn btn-light">
						Users profiles
					</button>
					<button type="button" class="btn btn-light">
						Data Base
					</button>
				</div> */}

        <div className="administrador">
          <Notificaciones />
        </div>
      </div>

      {/* 
			</div>


			<div className="administradorDropdown">
				<div class="btn-group">
					<button class="btn btn-sm" type="button">
						
					</button>


					<button type="button" class="btn btn-sm  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="visually-hidden">Toggle Dropdown</span>
					</button>


					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a class="dropdown-item" href="#">
								Apps
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">
								Social Media
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">
								PCs
							</a>
						</li>
					</ul>
				</div>
				<button type="button" class="btn btn-light button-administrador">
					New Product
				</button>
				<button type="button" class="btn btn-light button-administrador">
				<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
								{notifica}
								<span class="visually-hidden">Notificaciones</span>
							</span>					
				</button>

			</div>

 */}
    </>
  );
};

export default Home;

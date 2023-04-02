import React, { useEffect, useState } from "react";
import { useStateValue } from "../../context/Stateprovider";
import "../Administrador/administrador.css";
import swal from "sweetalert";
import axios from "axios";
import { accionType } from "../../context/reducer";
import {_url} from '../envairoment'

const Notificaciones = () => {
  const [{ user, equipments, notifica }, dispatch] = useStateValue();
  const [reload, setReload] = useState(false);
  const [questions, setQuestions] = useState();
  const [changeQuestions, setChangeQuestions] = useState();

  let date = "";

  useEffect(() => {
    axios.get(`${_url}api/questions/`).then((response) => {
      let temporal = [];
      response.data.response.questions.map((item) => {
        if (!item.answer) {
          return temporal.push(item);
        }
      });
      setQuestions(temporal);
      setReload(!reload);
      dispatch({
        type: accionType.NOTIFICA,
        notifica: questions.length,
      });
    });
  }, [reload]);

  const inputText = (event) => {
    setChangeQuestions(event.target.value);
  };

  const answerQuestions = async (id, event) => {
    event.preventDefault();
    fecha();
    let data = changeQuestions;
    let newDate = date;
    await axios
      .put(`${_url}api/answer/${id}`, { data, newDate })
      .then((response) => {
        setReload(!reload);
      });
  };

  function fecha() {
    var registro = new Date();
    var dia = registro.getDate();
    var mes = registro.getMonth() + 1;
    var time = registro.getHours() + ":" + registro.getMinutes();
    var year = registro.getYear();
    date = dia + "/" + mes + "/" + year + " " + time;
  }

  return (
    <>
      <div className="divPrincipal">
        {/*NOTIFICACIONES*/}

        {questions?.map((item) => {
          return (
            <div className="divNotificaciones">
              <h3>
                <strong>Notification #{item._id}</strong>
              </h3>
              <div className="divDatos">
                <div>
                <h6 style={{marginLeft:"4px"}}>
                  <strong>User: </strong>
                </h6>
                </div>
                <div>
                <p style={{marginLeft:"4px"}}>
                  {" " + item.user.name +
                    " " +
                    item.user.lastName +
                    " update: " +
                    item.date} 
                </p>

                </div>

                  <div>
                  <h6 style={{marginLeft:"4px"}}>
                  <strong>Message: </strong>
                </h6>
                </div>
                <div>
                <p style={{marginLeft:"4px"}}>{" " + item.questions} </p>
              </div>

                  </div>


              <div className="divForm">
                <form onSubmit={(event) => answerQuestions(item._id, event)} className="formNoti">
                  <input
                    type="textarea"
                    className="form-control"
                    aria-describedby="reply"
                    onChange={inputText}
                  />
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{marginTop: "3vh", marginBottom: "2vh" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};


export default Notificaciones;

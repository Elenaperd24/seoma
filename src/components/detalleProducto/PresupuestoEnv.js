import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../../context/Stateprovider';
import axios from 'axios'
import "./app.css"
import swal from 'sweetalert'
import { Link as LinkRouter } from "react-router-dom";
import { _url } from "../envairoment";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const PresupuestoEnv = (props) => {

    console.log(props)
    const navigate = useNavigate();

    const [{ user, favorites }, dispatch] = useStateValue()
    const [reload, setReload] = useState(false)
    const [questions, setQuestions] = useState()

    let date = ""


    useEffect(() => {


    }, [reload])



    const submitQuestions = async (items) => {

        swal({
            title: "questions sent",
            icon: "success",
            buttons: "ok"
        })
        fecha()
        let valor = [...items].toString()

        const dataQuestions = {
            equipment: props.app._id,
            user: user.datosUser.id,
            message: "I want to consult for a web page that includes these functions" + valor,
            date: date
        }
        await axios.post(`${_url}api/questions`, { dataQuestions })
            .then(response => {

            })
        setReload(!reload)
    }
    function fecha() {
        var registro = new Date()
        var dia = registro.getDate()
        var mes = registro.getMonth() + 1
        var time = registro.getHours() + ":" + registro.getMinutes()
        var year = registro.getYear()
        date = dia + "/" + mes + "/" + year + " " + time
    }


    return (
        <>
            {user ?

                <div className="presupuestoContenedor" >

                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label"><strong> Email</strong> </label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={user ? user.datosUser.email : ""} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="staticName" className="col-sm-2 col-form-label"><strong> Name</strong> </label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext" id="staticName" value={user ? user.datosUser.name : ""} />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="staticUser" className="col-sm-2 col-form-label"><strong> User</strong> </label>
                        <div className="col-sm-10">
                            <input type="text" readonly className="form-control-plaintext" id="staticUser" value={user ? user.datosUser.id : ""} />
                        </div>
                    </div>



                    <div className="mb-3">
                        <p><strong>Product</strong> </p>
                        <div className="pruebadecheckcon">

                            {props.checked?.map((item) => {
                                return (
                                    <div>
                                        {item} -
                                    </div>

                                )
                            })}

                        </div>
                        <label for="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={"  I want to consult for a web page that includes these functions"} rows="3">

                        </textarea>


                        <div className="btnPresupuestoContenedor">
                            <button onClick={() => submitQuestions(props.checked)} type="button"  >
                                <LinkRouter to="/respuesta" className="btnPresupuesto"> SEND </LinkRouter>
                            </button>

                        </div>
                    </div>

                </div>

                :

                <div>
                    <p>You must sign in. If you don't have a user yet, please sign up <LinkRouter to="/signup" style={{ textDecoration: "none", color: "var(--color-bg-variant)", fontWeight: "bold" }}>here</LinkRouter></p>

                </div>

            }

        </>
    )
}
export default PresupuestoEnv

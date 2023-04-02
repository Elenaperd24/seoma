import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useStateValue } from "../../context/Stateprovider";
import { _url } from "../envairoment";



const Questions = () => {
    const [questions, setQuestions] = useState()
    const [{ equipments }, dispatch] = useStateValue();
    const [reload, setReload] = useState(false)
    const [changeQuestions, setChangeQuestions] = useState()
    let date = ""

    useEffect(() => {
        axios.get(`${_url}api/questions/`)
            .then(response => {
                console.log(response.data.response.questions)
                setQuestions(response.data.response.questions)
            })
    }, [])

    const inputText = (event) => {
        setChangeQuestions(event.target.value)
    }


    const answerQuestions = async (id) => {
        fecha()
        let data = changeQuestions
        let newDate = date
        if (id !== "x") {
            await axios.put(`${_url}api/answer/${id}`, { data, newDate })
                .then(response => {

                    setReload(!reload)
                })
        }
        else {

        }

    }

    function fecha() {
        var registro = new Date()
        var dia = registro.getDate()
        var mes = registro.getMonth() + 1
        var time = registro.getHours() + ":" + registro.getMinutes()
        var year = registro.getYear()
        date = dia + "/" + mes + "/" + year + " " + time
    }


    /*    let equimentsQuestions = []
       equipments.map((item) => {
           if (questions.equipment===item._id) {
               equimentsQuestions.push(item);
           }
       });
   
   console.log(equimentsQuestions) */
    return (
        <>
            <div style={{ margin: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {questions?.map((item) => {
                    return (

                        <div className="card mb-3" style={{ width: "90%" }}>
                            <div className="row g-0">
                                <div className="col-md-4" >
                                    <img src={process.env.PUBLIC_URL + `/img/equipments/${item.equipment.image[0]}`} style={{ borderRadius: "100%" }} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">{item.questions}</p>
                                        <p className="card-text"><small className="text-muted">{item.user.name + " " + item.user.lastName + " update: " + item.date}</small></p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </>

    )

}
export default Questions;
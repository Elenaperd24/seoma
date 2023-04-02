import React, { useEffect, useState } from "react";

import { accionType } from "../../context/reducer";
import { useStateValue } from "../../context/Stateprovider";
import "./userAccount.css";
import userImage from "../User/userImage.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import swal from "sweetalert";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Link as LinkRouter } from "react-router-dom";
/* import Administrador from "../Administrador/Administrador" */
import Administrador from "../Administrador/administrador";
import CheckIcon from "@mui/icons-material/Check";

const AccountUser = () => {
    const [{ user, equipments, questions, notifica }, dispatch] = useStateValue();
    const [reload, setReload] = useState(false);
    const [notificaciones, setNotificaciones] = useState(false);
    const [respuesta, setRespuesta] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("https://app-seomaweb.herokuapp.com/api/equipments").then((response) => {
            dispatch({
                type: accionType.EQUIPMENTSDB,
                equipments: response.data.response.equipments,
            });
        });
        axios.get("https://app-seomaweb.herokuapp.com/api/questions/").then((response) => {
            let temporal = [];
            response.data.response.questions.map((item) => {
                if (item.answer && item.user._id === user.datosUser.id && !item.check) {
                    return temporal.push(item);
                }
            });
            setRespuesta(temporal);
    
            dispatch({
                type: accionType.NOTIFICA,
                notifica: respuesta.length,
            });
        });
    }, [reload]);

    const actNoti = (valor) => {
        if (valor === "notifaciones") {
            setNotificaciones(true);
        } else {
            setNotificaciones(false);
        }
    };
    const leida = async (valor) => {
        await axios
            .put(`https://app-seomaweb.herokuapp.com/api/check/${valor}`)
            .then((response) => {
                //  console.log(response.data.response.check)
                let temporal = [];
                respuesta.map((item) => {
                    if (
                        response.data.response.check._id !== item._id &&
                        !response.data.response.check.check
                    ) {
                        return temporal.push(item);
                    }
                });
                setRespuesta(temporal);
          
                dispatch({
                    type: accionType.NOTIFICA,
                    notifica: respuesta.length,
                });
         
                setReload(!reload);
            });
    };

    let idFavorite = [];
    let myFavorite = [];

    equipments.map((item) => {
        if (item.likes.includes(user.datosUser.id)) {
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
                    `https://app-seomaweb.herokuapp.com/api/favorite/${id}`,
                    {},
                    { headers: { Authorization: "Bearer " + token } }
                )
                .then((response) => {
                    setReload(!reload);
                });
        }
    };

    return (
        <>
            {user.datosUser.email !== "seomadesign@gmail.com" ? (
                <>

                    <div className='account-General'>

                        <div className='account-YourImgDet'>
                            {/* <div
                     style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20vh",
                        marginLeft: "5vw",
                     }}> */}

                            {/* 
                        <div className="d-flex col-lg-4 col-sm-7 col-md-7 account-YourImg"> */}
                            <div className="account-YourImg">


                                <div className="account-Your">

                                    {/* <div className="custom-header-title col-sm-12 col-md-6 col-lg-5 account-Your" */}
                                    {/* <div className="account-Your"
                                    style={{ marginLeft: "2vw", marginTop: "10vh" }}> */}

                                    <div >
                                        <h1 className="">Your account</h1>
                                        <h4 className="custom-header-subtitle">Find your activity history here</h4>
                                    </div>

                                </div>

                                <div>
                                    <div className="account-Img">
                                        <img src={user.datosUser.img ? user.datosUser.img : userImage}
                                            // className="custom-image d-block w-100 col-sm-12 col-md-6 col-lg-6 col-lg-5" alt="User Image" />
                                            className="custom-image d-block w-100 col-sm-12 col-md-6 col-lg-6 col-lg-5 " alt="User Image" />
                                    </div>
                                </div>

                            </div>




                            <div className="card  col-lg-4 col-sm-5 col-md-5 mb-4 account-Det">
                                <h5 className="card-header background-card">Account details</h5>
                                <div className="card-body data">
                                    <p className="card-text justify-content-between d-flex p-2">
                                        <div className="d-inline">User</div>
                                        <div className="d-inline text-secondary account-text-secondary">PRUEBA</div>
                                    </p>
                                    <p className="card-text d-flex p-2 justify-content-between">
                                        <div className="d-inline">Email</div>
                                        <div className="d-inline text-secondary account-text-secondary">
                                            {user.datosUser.email}
                                        </div>
                                    </p>
                                    <p className="card-text d-flex p-2 justify-content-between">
                                        <div className="d-inline">Name</div>
                                        <div className="d-inline text-secondary account-text-secondary">
                                            {user.datosUser.name}
                                        </div>
                                    </p>
                                    <p className="card-text d-flex p-2 justify-content-between">
                                        <div className="d-inline">Last Name</div>
                                        <div className="d-inline text-secondary account-text-secondary">
                                            {user.datosUser.lastName}
                                        </div>
                                    </p>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>


                        {/* <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "2vh",
                            }}> */}

                        <div className="account-FavNotGeneral mb-5">

                            {/* Card favorites */}
                            {/* <div
                                className="card custom-card text-center card text-center col-lg-8 col-sm-5 col-md-5"
                                style={{ height: "100vh" }}
                            > */}

                            {/* <div
                                className="card custom-card text-center card text-center col-lg-8 col-sm-5 col-md-5"
                                style={{ height: "100vh" }}
                            > */}

                            {/* <div className="card custom-card text-center card text-center col-lg-8 col-sm-5 col-md-5"> */}
                            <div className="card custom-card text-center card text-center col-lg-10 col-sm-8 col-md-6 my-5">
                                <div className="card-header background-card ">
                                    <ul className="nav nav-tabs card-header-tabs ">
                                        <li className="nav-item ">
                                            <a
                                                className="nav-link custom-nav-link custom-link active background-card-click "
                                                aria-current="true"
                                                href="#"
                                                onClick={() => actNoti("favorite")}
                                            >
                                                Favorites
                                            </a>
                                        </li>

                                        <li className="nav-item d-flex">
                                            <div>
                                                <a
                                                    className="nav-link custom-nav-link background-card-click"
                                                    href="#"
                                                    onClick={() => actNoti("notifaciones")}
                                                >
                                                    Notifications {notifica}
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {notificaciones ? (
                                    <div className="pruebaUser" >
                                        {respuesta?.map((item) => {
                                            return (
                                                <div className="card ">
                                                    <h4> {item.answer}</h4>
                                                    <div
                                                        className="d-flex"
                                                        style={{ justifyContent: "center" }}
                                                    >
                                                        {/* <button onClick={()=>leida(item._id)}>
                                                <LinkRouter to={`/equipment/${item.equipment}`}  className="myButton">
                                                    Answer
                                                </LinkRouter>
                                                </button> */}

                                                        <button
                                                            onClick={() => leida(item._id)}
                                                            className="myButton"
                                                        >
                                                            <CheckIcon />
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <div className="card-body custom-card-body ">
                                
                                    
                                        {/* cards de favoritos */}
                                        <div style={{ display: "flex" }}>
                                            {myFavorite?.map((item) => {
                                                return (
                                                    <Card
                                                        sx={{
                                                            width: 340,
                                                            margin: "10px",
                                                            boxShadow: "1px 0px 5px 3px rgba(0,0,0,0.1)",
                                                        }}
                                                    >
                                                        <CardHeader
                                                            sx={{ height: "30px", paddingY: 6 }}
                                                            avatar={
                                                                <FavoriteIcon
                                                                    className={
                                                                        user && item.likes.includes(user.datosUser.id)
                                                                            ? "colorLike"
                                                                            : ""
                                                                    }
                                                                    onClick={() => favorite(item._id)}
                                                                />
                                                            }
                                                            /*      action={
                                                                                               <LinkRouter key={item._id} to={`/item/${item._id}`}>
                                                                                                 <FavoriteIcon style={{ color: "#7dd6e5" }} />
                                                                                               </LinkRouter>
                                                                                             } */
                                                            title={item.name}
                                                        />
                                                        <Swiper navigation={true} modules={[Navigation]}>
                                                            <SwiperSlide className="swiper-slide">
                                                                <img
                                                                    src={
                                                                        process.env.PUBLIC_URL +
                                                                        `/img/equipments/${item.image[0]}`
                                                                    }
                                                                    alt="images"
                                                                ></img>
                                                            </SwiperSlide>

                                                            <SwiperSlide className="swiper-slide">
                                                                <img
                                                                    src={
                                                                        process.env.PUBLIC_URL +
                                                                        `/img/equipments/${item.image[1]}`
                                                                    }
                                                                    alt="images"
                                                                ></img>
                                                            </SwiperSlide>

                                                            <SwiperSlide className="swiper-slide">
                                                                <img
                                                                    src={
                                                                        process.env.PUBLIC_URL +
                                                                        `/img/equipments/${item.image[2]}`
                                                                    }
                                                                    alt="images"
                                                                ></img>
                                                            </SwiperSlide>
                                                        </Swiper>
                                                        <CardContent>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {item.price + " $USD"}
                                                                <p>{item.time}</p>
                                                            </Typography>
                                                        </CardContent>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                paddingBottom: 2,
                                                            }}
                                                        >
                                                            <LinkRouter
                                                                to={`/equipment/${item._id}`}
                                                                className="myButton"
                                                            >
                                                                Read More
                                                            </LinkRouter>
                                                        </Box>
                                                    </Card>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                </>
            ) : (
                <Administrador />
            )}
        </>
    );
};

export default AccountUser;

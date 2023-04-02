
import { Link as LinkRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { accionType } from '../../context/reducer';
import { useStateValue } from '../../context/Stateprovider';
import { alpha, styled } from '@mui/material/styles';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import swal from 'sweetalert'
import HeroDetalle from "../detalleProducto/HeroDetalle";

// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { _url } from "../envairoment";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const DetalleEquipments = () => {

  const [{ equipments, equipmentsNew, user }, dispatch] = useStateValue()
  const [reload, setReload] = useState(false)
  const [expanded, setExpanded] = React.useState(false);
  const [checkKey, setCheckKey] = useState("")
  const [brandValue, setBrandValue] = useState("")
  const [favoritos, setFavoritos]= useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${_url}api/equipments`)
    .then(response => {  
      console.log(response)  
      dispatch({
        type: accionType.EQUIPMENTSDB,
        equipments: response.data.response.equipments
      })
    })
  
    dispatch({
      type: accionType.FILTER,
      equipmentsNew: equipments
    })
  }, [reload])


  const handleExpandClick = (parametro) => {
    setCheckKey(parametro)
    setExpanded(!expanded);
  //  console.log(checkKey)
  };

  let brands = []
  equipmentsNew.map((equipment) => {
    if (!brands.includes(equipment.brand)) {
      return (
        brands.push(equipment.brand)
      )
    }
  })

  function filterEquipments(event) {
    let textEquipment = event.target.value.toLowerCase()
    if (textEquipment !== "") {
      let resultFilter = []
      if (brandValue === "All Brand" || brandValue === "") {
        resultFilter = equipments.filter(equipment =>
          equipment.name.toLowerCase().includes(textEquipment))
      }
      else {
        resultFilter = equipments.filter(equipment =>
          equipment.brand === brandValue &&
          equipment.name.toLowerCase().includes(textEquipment)
        )
      }
      dispatch({
        type: accionType.FILTER,
        equipmentsNew: resultFilter
      })
    }
    else {
      let resultFilter
      resultFilter = equipments.filter(equipment => equipment.brand === brandValue)
      if (resultFilter.length > 0) {
        dispatch({
          type: accionType.FILTER,
          equipmentsNew: resultFilter
        })
      }
      else {
        dispatch({
          type: accionType.FILTER,
          equipmentsNew: equipments
        })
      }
    }
  }

  function selectBrand(event) {
    setBrandValue(event.target.name)
    let resultFilter
    resultFilter = equipments.filter(equipment => equipment.brand === event.target.name)
    dispatch({
      type: accionType.FILTER,
      equipmentsNew: resultFilter
    })
    if (event.target.name === "All Brand") {
      dispatch({
        type: accionType.FILTER,
        equipmentsNew: equipments
      })
    }
  }


  const favorite = async (id) => {
    console.log(id)
    const token = localStorage.getItem("token")
    if (!token) {
      swal({
        title: "Go to sign in to post your opinions",
        icon: "error",
        buttons: "ok"
      })
    }
    else {
      axios.put(`${_url}api/favorite/${id}`, {},
        { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {       
      //    console.log(response.data.response.equip.likes) 
         setFavoritos(response.data.response.equip.likes)
          
          setReload(!reload)
    
          
        })
    }
  }
/*   console.log(favoritos)
  console.log(user)
  console.log(equipmentsNew) */
  return (

    <>
    <HeroDetalle/>
      <div >
        {/* TEXT INPUNT DE BUSQUEDA */}
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '60ch' }, display: "flex", justifyContent: "center" }}
          noValidate
          autoComplete="off"

        >
          <TextField label="Find your Equipment"
            onChange={filterEquipments}
            onKeyPress={filterEquipments}
            
         />

         
        </Box>

        <div className="contenedorProductosC" >
          {/* CHECK DE MARCAS DE BUSQUEDA */}
          <div className="checkresponsive" style={{ display: "flex", justifyContent: "left", flexDirection: "column", padding: 20, marginTop: 30 }}>
            {brands.length > 1 ?
              brands?.map((brand) => {
                return (
                  <div style={{ display: "flex" }}>
                    <Switch {...label} defaultChecked onChange={selectBrand} name={brand}
                      color="default"
                      style={{ color: "rgb(2,104,115)" }} />
                    {brand}
                  </div>
                )
              })
              :
              <div style={{ display: "flex" }}>
                <GreenSwitch {...label} onChange={selectBrand} name={"All Brand"} />
                Press to see all brands
                <div>
                  <h1 style={{ display: "flex", justifyContent: "left", marginTop: "2%" }}>
                    {brandValue === "All Brand" ? "" : brandValue}
                  </h1>
                </div>
              </div>}

          </div>

          {/* AQUI COMIENZAN LAS CARDS */}
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 30 }}>
            {equipmentsNew.length > 0 ?
              equipmentsNew?.map(equipment => {
                return (
                  <Card key={equipment._id} sx={{ width: 340, margin: "20px", boxShadow: "1px 0px 5px 3px rgba(0,0,0,0.1)" }}>
                    <CardHeader
                      sx={{ cursor: "pointer", height: "30px", paddingY: 6 }}
                      avatar={
                        <FavoriteIcon
                          className={user && equipment.likes.includes(user.datosUser.id) ?
                            "colorLike" : ""}
                          onClick={() => favorite(equipment._id)}

                        />}
                     
                      title={equipment.name}
                    />
                    <Swiper navigation={true} modules={[Navigation]} >
                      <SwiperSlide className="swiper-slide">
                        <img src={process.env.PUBLIC_URL + `/img/equipments/${equipment.image[0]}`} alt="image"></img>
                      </SwiperSlide>

                      <SwiperSlide className="swiper-slide">
                        <img src={process.env.PUBLIC_URL + `/img/equipments/${equipment.image[1]}`} alt="image"></img>
                      </SwiperSlide>

                      <SwiperSlide className="swiper-slide">
                        <img src={process.env.PUBLIC_URL + `/img/equipments/${equipment.image[2]}`} alt="image"></img>
                      </SwiperSlide>
                    </Swiper>


                    <Stack spacing={1}>
                      <Rating name="size-large" defaultValue={2} size="large" />
                    </Stack>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {equipment.price + " $USD"}
                        <p>
                          {equipment.time}</p>
                      </Typography>
                    </CardContent>
                    <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: 2 }}>

                      <LinkRouter to={`/equipment/${equipment._id}`} className="myButton">
                        Read More
                      </LinkRouter>

                    </Box>
                  </Card>)
              }) :
              <h1 style={{ color: "", display: "flex", justifyContent: "center", marginTop: "2%" }}>Sorry, no matches, please try again..</h1>}

          </div>
        </div>

      </div>


    </>
  )

}

export default DetalleEquipments
/* eslint-disable no-undef */
const Apps = require('../models/apps')
const Smedia = require('../models/smedias.js')
const Equipments = require('../models/equipments.js')
const User = require("../models/user")

const datosController = {
    obtenerApp: async (req, resp) => {
        let apps
        let error = null
        try {
            apps = await Apps.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { apps },
            success: error ? false : true,
            error: error
        })
    },
    obtenerSocialMedia: async (req, resp) => {
        let socialMedia
        let error = null
        try {
            socialMedia = await Smedia.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { socialMedia },
            success: error ? false : true,
            error: error
        })
    },
    obtenerEquipments: async (req, resp) => {
        let equipments
        let error = null
        try {
            equipments = await Equipments.find()
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { equipments },
            success: error ? false : true,
            error: error
        })
    },


    equipment: async (req, resp) => {
        let equipment;
        const selecEquipment = req.params.equipment
        let error = null
        try {
            equipment = await Equipments.find({ _id: selecEquipment })
        } catch (err) {
            error = err
            console.log(error);
        }
        resp.json({
            response: error ? 'ERROR' : { equipment },
            success: error ? false : true,
            error: error
        })
    },

    favorite: async (req, resp) => {
        const idEquip = req.params.id //equipo selec
        const idUser = req.user.id // usuario
        let usuarioFav
        let newEquip
        try {
            usuarioFav = await User.findOne({ _id: idUser })
            newEquip = await Equipments.findOne({_id:idEquip})
        
            if (usuarioFav.favorite.includes(idEquip)) {             
                let user = await User.findByIdAndUpdate({ _id: idUser }, { $pull: { favorite: idEquip } }, { new: true })
                let equip = await Equipments.findByIdAndUpdate({ _id: idEquip }, { $pull: { likes: idUser } }, { new: true })
                resp.json({ success: true, response:{user, equip}  })
                console.log(user)    
            }
            else {
                let user = await User.findByIdAndUpdate({ _id: idUser }, { $push: { favorite: idEquip } }, { new: true })
                let equip = await Equipments.findByIdAndUpdate({ _id: idEquip }, { $push: { likes: idUser } }, { new: true })
                resp.json({ success: true, response:{user, equip}  })
                console.log(user)  
            }
        } catch (err) {
            error = err
            resp.json({ success: false, response: error })
        }
    }



}

module.exports = datosController

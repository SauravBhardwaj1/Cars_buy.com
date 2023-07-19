const express= require('express');
const { CarModel } = require('../models/Car.model');

const OemRoutes = express.Router();

OemRoutes.get("/getDetails", async(req,res)=>{
    const { search } = req.query
    try {
      if (search) {
        let details = await CarModel.find({
          $or: [
            { model_name: { $regex: search, $options: "i" } },
            { model_year: { $regex: search, $options: "i" } },
            { colors: { $regex: search, $options: "i" } },
          ],
        })
        res.status(200).send({ details })
      } else {
        let details = await CarModel.find({})
        res.send({ details })
      }
    } catch (error) {
      res.send({ error })
    }
})

module.exports = {OemRoutes}
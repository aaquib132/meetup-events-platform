const { initializeDatabase } = require('./db/db.connect')
const Event = require('./models/events.models')
initializeDatabase()
const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const eventData = async () => {
    try {
     const data = await Event.find()
     return data 
    } catch (error) {
        throw error
    }
}

app.get('/events', async (req,res) => {
    try {
        const data = await eventData()

        if(data){
            res.json(data)
        }else{
            res.status(404).json({error: "Event Data Not Found"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed To Fetch Event Data."})
    }
    
})

const getEventById = async (id) => {
    try {
        const data  = await Event.findById(id)
        return data
    } catch (error) {
        throw error
    }
}

app.get('/events/:eventId', async (req, res) => {
    try {
        const data =  await getEventById(req.params.eventId)
        if(data){
            res.json(data)
        }else{
            res.status(404).json({error: "Event not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Failed to fetch event data."})
    }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
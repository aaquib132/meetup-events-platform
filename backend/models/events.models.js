const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventTitle: {
        type: String,
        required: true
    },
    eventPosterUrl: String,
    mode: {
        type: String,
        enum: ["Online", "Offline"],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: String,
    endTime: String,
    hostedBy: {
        type: String,
        required: true
    },
    location: String,
    price: Number,
    speakers: [
        {
            speakerName: String,
            speakerDesignation: String
        }
    ],
    eventDetails: String,
    dressCode: String,
    ageRestriction: String,
    eventTags: [String]
},
    {
        timestamps: true,
    },
);

const Event = mongoose.model("Event", eventSchema)

module.exports = Event

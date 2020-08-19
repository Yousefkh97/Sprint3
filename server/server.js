const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Express
app.use(express.static('public'));


// MongoDB: Estaplish connection
const url = "mongodb+srv://Yousef:5DITEwKxJ0hWLJPH@cluster0.rpovv.mongodb.net/FirstDB";
const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });


//Schema:
const Task = mongoose.model('Task', {
    jiraItem: {
        jiraId: String,
        jiraName: String,
        jiraType: String,
        priority: String,
        status: String,
        specialFields: {
            jiraParentId: String,
            functionalTest: Boolean,
            qaRepresentative: String,
            fixVersion: String
        }
    },
    qcItem: {
        requirementId: String,
        requirementType: String,
        status: String
    },
    diffItem: {
        type: { type: String },
        updatedTime: Number,
        updatedFields: [{
            fieldName: String,
            oldVal: String,
            newVal: String
        }]
    }

});


// API Definitions:

app.get('/api/getDeletedAggr', async function (request, response) {

    let tasks = await Task.aggregate(
        [{ $match: { "diffItem.type": "Delete" } },
        {
            $group: {
                _id: "$diffItem.updatedTime",
                tasks: { $push: "$$ROOT" }
            }
        }
        ])
    response.send(tasks)
})


const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })





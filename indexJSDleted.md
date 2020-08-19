const express = require('express')
const app = express()


var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))

const url = "mongodb+srv://Yousef:5DITEwKxJ0hWLJPH@cluster0.rpovv.mongodb.net/FirstDB";

const mongoose = require('mongoose');
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

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
  // taskItem: {
  //   user: User,
  //   isDone: Boolean,
  //   updatedTime: Date,
  //   createdTime: Date
  // }
});

const date1 = new Date(2020,08,01).getTime();
const date2 = new Date(2020,08,03).getTime();
const date3 = new Date(2020,08,05).getTime();
const date4 = new Date(2020,08,07).getTime();
const date5 = new Date(2020,08,10).getTime();
const date6 = new Date(2020,08,16).getTime();
const date7 = new Date(2020,08,20).getTime();
const date8 = new Date(2020,08,25).getTime();

const tasksList = [
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Delete",
      "updatedTime": date1,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }


  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Update",
      "updatedTime": date2,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }


  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Create",
      "updatedTime": date3,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }


  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Delete",
      "updatedTime": date4,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }


  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Delete",
      "updatedTime": date5,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }
  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Update",
      "updatedTime": date6,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }
  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Create",
      "updatedTime": date7,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }
  },
  {
    "jiraItem": {
      "priority": "P00",
      "status": "Backlog",
      "jiraType": "Epic",
      "jiraName": "PSI 41: SAR Support for FSCK/Recovery",
      "jiraId": "TRIES-41773",
      "specialFields": {
        "jiraParentId": "TRIF-842",
        "functionalTest": true,
        "qaRepresentative": "Lior",
        "fixVersion": "PSI_41"
      }
    },
    "qcItem": {
      "requirementId": "2164",
      "requirementType": "Epic",
      "status": "Backlog",
    },
    "diffItem": {
      "type": "Delete",
      "updatedTime": date8,
      "updatedFields": [
        {
          "fieldName": "qaFeatureOwner",
          "oldVal": "in Progress",
          "newVal": "done",

        }
      ]
    }
  }
];


// Task.insertMany(tasksList,()=>{
//   console.log("Done!")
// })

app.get('/api/taskList', function (req, res) {
  Task.find({"diffItem.type": "Delete"},(err,docs)=>{
    res.send(docs)
  })
})


const port = process.env.PORT || 4000
app.listen(port, () => { console.log("App is Listening on port", port) })
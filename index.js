
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

let users = new Object();
users["1"] = ["John", "Doe"]
users["2"] = ["Bob", "Rose"]

let favcolor = new Object();
favcolor["1"] =  "favorite color: blue"
favcolor["2"] =  "Favorite color: red"

//Get records
app.get("/favcolor", (req, res) => {

    //verify that the user exists
    if (favcolor[req.headers.id] === undefined){

        res.status(400).send({"msg": "User not found"})
        return;
    }


    //Verify ID maches the first and last name

    if (req.headers.firstname == users[req.headers.id][0] && req.headers.lastname == users[req.headers.id][1]){
        if(req.body.reasonforvisit === "reviewfavcolor"){

            res.status(200).send({"msg": favcolor[req.headers.id]})
             return;

        }else{

          res.status(501).send({"msg": "Unable to process request"})
        }

    } else {
        res.status(401).send({"msg": "First or Lastname does not match the ID"})
        return;
    }
    //Return the favorite color
    res.status(200).send({"msg": "HTTP GET - Success"});


});


//Create a new user
app.post("/favcolor", (req, res) => {
    res.status(200).send({"msg": "HTTP POST - Success"});
});

//Update existing username
app.put("/favcolor", (req, res) => {
    res.status(200).send({"msg": "HTTP PUT - Success"});
});

//Detele a recod
app.delete("/favcolor", (req, res) => {
    res.status(200).send({"msg": "HTTP DELETE - Success"});
});


app.listen(3000);
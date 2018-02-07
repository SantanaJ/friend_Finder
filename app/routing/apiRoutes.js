var characters = require("../data/friend.js");



module.exports = function (app) {
  
  app.get("/character/:character", function (req, res) {
    switch(req.params.character){
       case "eleven":
            res.json(characters.eleven);
             break;
        case "mike":
             res.json(characters.mike);
              break;   
        case "dustin":
              res.json(characters.dustin);
               break;
        case "lucas":
               res.json(characters.lucas);
                break;
        case "will":
                res.json(characters.will);
                 break;
    }
});

app.post("/new", function (req,res){
    switch(req.body.user_match){
        case "eleven":
            characters.eleven.push(req.body.name);
            break;
        case "mike":
            characters.mike.push(req.body.name);
            break;
        case "dustin":
            characters.dustin.push(req.body.name);
            break;
        case "lucas":
            characters.lucas.push(req.body.name);
            break;
        case "will":
            characters.will.push(req.body.name);
            break;

    }
});

}


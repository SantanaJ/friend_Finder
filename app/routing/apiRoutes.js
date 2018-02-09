var characters = require("../data/friend.js");



module.exports = function (app) {
  
  app.get("/character/:character", function (req, res) {
    switch(req.params.character){
       case "eleven":
            res.json(characters[0]);
             break;
        case "mike":
             res.json(characters[1]);
              break;   
        case "dustin":
              res.json(characters[2]);
               break;
        case "lucas":
               res.json(characters[3]);
                break;
        case "will":
                res.json(characters[4]);
                 break;
    }
});

app.post("/new", function (req,res){

    characters.push(req.body.name);
    res.json(req.body.user_match);
});

}


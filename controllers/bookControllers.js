const axios = require("axios");
const db = require("../models")

// module.exports = {
//     bookSearch: function(req,res) {
//         const searchTerm = req.params.searchTerm;
//         axios.get(
//             `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+intitle`)
//         .then(results => {
//             console.log(results)
//             res.json(results)
//         })
//         .catch(error => console.log(error))
//     },
// }

    // create: function(req, res){
    //     db.Model.create(req.body)
    //     .then(dbModel => res.json(dbModel))
    // }
    // model then controller then routes
const router = require("express").Router();
const axios = require('axios');
require("dotenv/config");

axios.defaults.headers.common["app_id"] = process.env.appId;
axios.defaults.headers.common["app_key"] = process.env.keyApi;


router.get("/dashboard", (req, res, next) => {
  // console.log('REQQQQQQQQQQQQQQ');
  axios.get('https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/dog?strictMatch=false')
    .then(def => {
      console.log('DEFFFFF', def.data.results[0].id);
      const definition = def.data.results[0].id;
      res.render("dashboard", { definition });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
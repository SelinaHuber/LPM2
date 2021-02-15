const router = require("express").Router();
const axios = require('axios');
require("dotenv/config");

axios.defaults.headers.common["app_id"] = process.env.appId;
axios.defaults.headers.common["app_key"] = process.env.keyApi;


router.get("/dashboard", (req, res, next) => {
  // console.log('REQQQQQQQQQQQQQQ');
  axios.get('https://od-api.oxforddictionaries.com/api/v2/translations/en/de/dog?strictMatch=false')
    .then(def => {
      console.log('DEFFFFF', def.data.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text);
      const searchedWord = def.data.results[0].id;
      const translatedWord = def.data.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text
      res.render("dashboard", { searchedWord, translatedWord });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
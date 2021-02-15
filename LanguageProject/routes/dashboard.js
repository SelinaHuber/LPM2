const router = require("express").Router();
const axios = require('axios');
// const process = require('process');
require("dotenv/config");

// const endPoint = 'entries';
// const wordId = process.argv[2];
// console.log('LOGGGINGGG', wordId)


axios.defaults.headers.common["app_id"] = process.env.appId;
axios.defaults.headers.common["app_key"] = process.env.keyApi;


router.get("/dashboard", (req, res, next) => {
  // console.log('REQQQQQQQQQQQQQQ');
  axios.get(`https://od-api.oxforddictionaries.com/api/v2/translations/de/en/katze?strictMatch=false`)
    .then(def => {
      // console.log('DEFFFFF', def.data.results[0].lexicalEntries[0]);
      // console.log('DEFFFFF', def.data.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text);
      const searchedWord = def.data.results[0].id;
      const translatedWord = def.data.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text
      const engSentence = def.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].translations[0].text
      const gerSentence = def.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text
      const ipaWord = def.data.results[0].lexicalEntries[0].entries[0].pronunciations[0].phoneticSpelling
      res.render("dashboard", { searchedWord, translatedWord, gerSentence, engSentence, ipaWord });
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;


// english sentence example
//def.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text
// german sentence example
//def.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].translations[0].text
// ipa 
//def.data.results[0].lexicalEntries[0].entries[0].pronunciations[0]
const translating= require('../model/model');
const { translate } = require('bing-translate-api');

class translator{
   async translator(req,res){
       try{
        let { text , lang } = req.body;

        let find = await translating.findOne({text, convertedLang:lang});
       
        if(find){
            
            res.json({status:true,text:find});

        }
        else{
           
            let data = await translate(text, null, lang, true)
            
           let create = await translating({text, convertedLang:lang,convertedText:data.translation}) 
           await create.save();
            res.json({status:true,create})
       }
    }
       catch(err){
        console.log(err)   
        res.json({status:false,Error:"Language not supported"})}
   }
}
module.exports = new translator();
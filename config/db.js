const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://not7that:not7that@cluster0.k4qor.mongodb.net/translater?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true},(err)=>{
    if(err) throw err
    
});


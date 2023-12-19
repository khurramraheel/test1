let User =  require('./db/models/user');
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ali:1234@cluster0.xht8ahs.mongodb.net/').then((connection)=>{
    console.log(connection)
}).catch((err)=>{
    console.log(err)
})

let express=  require('express');

let app = express();
app.use(express.json())

// User.find()
// User.findByIdAndDelete()
// new User()
// User.findOne()



app.put('/update-user', async (req, res)=>{

    let user = await User.findByIdAndUpdate(req.body._id, req.body)
    res.    json(user);


});

app.post('/login', async (req, res)=>{

    let user = await User.findOne(req.body)
    res.    json(user);


});

app.delete('/del-user', async (req, res)=>{

    let users = await User.findByIdAndDelete(req.query.id);
    res.json({
        success:true
    });

});


app.get('/get-users', async (req, res)=>{

    let users = await User.find();
    res.json(users);


});

app.post('/create-user', async (req, res)=>{

    let user = new User(req.body);
    await user.save();

    res.json({
        success:true
    })

})

app.use(express.static('./build'));

app.listen(8080,()=>{
    console.log('server chaling')
})

// mongooseJS
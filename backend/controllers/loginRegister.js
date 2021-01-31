const User = require('../models/User')

function register(req, res){
    console.log(req.body)

    User.findOne({username: req.body.username}, function(err, foundUser){
        if (err){
            console.log(err);
        }
        else{
            if (foundUser){
                res.json({'status': 'Username already exists. Choose another one.'})
            }
            else{
                User.findOne({email: req.body.email}, function(err, foundUser){
                    if (err){
                        console.log(err);
                    }
                    else{
                        if (foundUser){
                            res.json({'status': 'Email already exists. Choose another one.'})
                        }
                        else{
                            if (req.body.password === req.body.repPass){
                                const newUser = new User({
                                    username: req.body.username,
                                    fName: req.body.fName,
                                    lName: req.body.lName,
                                    email: req.body.email,
                                    password: req.body.password,
                                    socketid: "",
                                    requests: [],                                    
                                    friends: [],
                                    chats: []
                                })
                            
                                newUser.save(function(err){
                                    if(err){
                                        console.log(err);
                                    }
                                    else{
                                        res.json({'status': 'registered'})
                                    }
                                })
                                
                            }
                        }
                    }
                })
                
            }
        }
    })
    
}

function login(req ,res){
    const email = req.body.email
    User.findOne({email: email}, function(err, foundUser){
        if (err){
            console.log(err);
        }
        else{
            if (foundUser){
                if (foundUser.password === req.body.password)
                {
                    res.json({'status': 'logged', 'userObj' : foundUser}).status(200)
                }
                else{
                    res.json({'status': 'Password is incorrect'})
                }
            }
            else{
                res.json({'status': "User doesn't exist"})
            }
        }
    })
}


exports.register = register
exports.login = login
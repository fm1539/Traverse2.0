const { request } = require('express');
const User = require('../models/User')

function findUser(req, res){
    const username = req.params.userId
    User.findOne({username: username}, function(err, foundUser) {
        if (err) {
            console.log(err);
        }
        else {
            if (foundUser) {
                res.json({status: "found user", foundUser: foundUser})
            }
            else {
                res.json({status: "not found"})
            }
        }
    })
}

function addFriend(req, res) {
    console.log(req.params.userId)
    User.findOne({username: req.params.userId}, (err, foundUser) => {
        if (err){
            console.log(err);
        }
        else{
            if (!foundUser.requests.includes(req.body.user.username)){
                foundUser.requests.push(req.body.user.username)
                foundUser.save()
                res.json({status: 'request sent'})
            }
            else{
                res.json({status: 'request failed'})
            }
        }
    })
}

function acceptFriend(req, res) {
    const currUser = req.body.currUser.username
    const otherUser = req.params.userId
    User.findOne({username: currUser}, (err, foundUser) => {
        if (err) {
            console.log(err);
        }
        else{
            foundUser.friends.push(otherUser)
            var filtered = foundUser.requests.filter(function(value, index, arr){
                return value !== otherUser
            })
            foundUser.requests = filtered
            console.log(foundUser.requests);
            foundUser.save()            
        }
    })
    User.findOne({username: otherUser}, (err, foundUser) => {
        if (err) {
            console.log(err);
        }
        else {
            foundUser.friends.push(currUser)
            foundUser.save()
        }
    })
    res.json({status: 'friends'})
}

function getFriends(req, res){
    const username = req.params.userId
    let friendsObjArr = []
    User.findOne({username: username}, (err, foundUser) => {
        if (err){
            console.log(err);
        }
        else {
            foundUser.friends.forEach(friend => {
                User.findOne({username: friend}, (err, foundFriend) =>{
                    if (err){
                        console.log(err);
                    }
                    else{
                        console.log(foundFriend);
                        friendsObjArr.push(foundFriend)   
                    }
                })
            });
            res.json(friendsObjArr)
        }
    })
    
}

exports.findUser = findUser
exports.addFriend = addFriend
exports.acceptFriend = acceptFriend
exports.getFriends = getFriends
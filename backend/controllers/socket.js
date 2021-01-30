function index(req, res){
    res.send({respnose: 'i am alive.'}).status(200)
}

exports.index = index
exports.getProduct = (req, res) => {
    Product.findAll({
        where: {
            is_use: true
        },
        raw: true
    })
        .then(data=>{
            res.json(data);
        });
};

exports.addProduct = (req, res) => {
    console.log(req.body);
    if(!req.body || Object.keys(req.body).length == 0) return res.sendStatus(425);
    res.json();
};
exports.getSliderPhotos = (req, res)=>{
    MainSlider.findAll({
        where: {
            is_use: true
        },
        raw: true
    })
        .then(data=>{
        res.json(data);
    });
}

exports.addSliderPhotos = (req, res)=>{
    res.sendStatus(425);
}
const express = require('express');
const router = express.Router();

router.route('/')
    .get( (req, res) => {
        res.render('index',{
            key1: 'GSW'
        });
    })
    .post( (req, res) => {
        res.render('index',{
            key2: req.body.key2,
            len: req.body.key2.length
        })
    }
)
router.get('/:foreign',  (req, res) => {
    res.render('index',{
        key:req.params.foreign
    })
})

module.exports = router
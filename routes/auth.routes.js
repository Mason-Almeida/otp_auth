const router = require('express').Router();

router.get('/' , (req,res) => {
    res.status(200).send('Got');
});

router.get('/token' , (req,res) => {
    res.status(300).send("toen");
})

module.exports = router;
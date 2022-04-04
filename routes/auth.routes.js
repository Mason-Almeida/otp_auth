const router = require('express').Router();

router.get('/' , (req,res) => {
    res.status(200).render('pages/index');
});

router.post('/users' , (req , res) => {
    
})


module.exports = router;
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({ status: 'Estamos levantando el servicio......' });
});

router.get('/backend', (req, res) => {
    res.send("Hola Geeks");
});

router.post('/data', (req, res) => {
    res.json({ peticion: "Post......" });
});


module.exports = router;
const Spot = require('../models/Spot.js');
const User = require('../models/User.js');

module.exports = {

    async index(req, res)
    {
        const { tech }  = req.query;

        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

    async store(req, res)
    {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user)
            return res.status(400).json({ error: 'User dont not exists'})

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim()),
        })

        return res.json(spot);
    }

    /* update(){

    }
    
    destroy(){

    }

    show(){

    } */
    
};  
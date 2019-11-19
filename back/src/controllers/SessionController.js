const User = require('../models/User.js');

module.exports = {

    //index()

    async store(req, res)
    {
        const { email }  =  req.body;

        let user = await User.findOne({ email });

        if(!user)
            user = await User.create({ email });

        return res.json(user);
    }

    /* update(){

    }
    
    destroy(){

    }

    show(){

    } */
    
};  
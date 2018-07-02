if(process.env.Node_ENV === "production")
{
    module.exports = { 
        MONGODB_URI : 'mongodb://girish:g1r1sh@ds123971.mlab.com:23971/giri_vidjot_prod'
    }
} else {
    module.exports = {
        // MONGODB_URI : 'mongodb://localhost/vidjot-dev'
        MONGODB_URI : 'mongodb://girish:g1r1sh@ds123971.mlab.com:23971/giri_vidjot_prod'
        
    }
}


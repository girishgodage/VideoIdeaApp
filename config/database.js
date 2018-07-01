if(process.env.Node_ENV === "production")
{
    module.exports = {
        mongoURI : 'mongodb://girish:g1r1sh@ds123971.mlab.com:23971/giri_vidjot_prod'
    }
} else {
    module.exports = {
        mongoURI : 'mongodb://localhost/vidjot-dev'
    }
}


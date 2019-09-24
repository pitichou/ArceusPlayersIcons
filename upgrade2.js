const fs = require('fs')
const poke = require("./pkmn.json")

Object.keys(poke).forEach(k => {
    Object.keys(poke[k].icons).forEach(i => {
        if (fs.existsSync(__dirname + "/pixels/regular/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".png")) {
            fs.renameSync(__dirname + "/pixels/regular/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".png", __dirname + "/pixels/regular/"+ k +(i == "." ? "" : "-"+i) + ".png")
            if (i.hasOwnProperty("has_female")) {
                fs.renameSync(__dirname + "/pixels/regular/female/"+ poke[k].slug.eng + ".png", __dirname + "/pixels/regular/female/"+ k +"F.png")
                fs.renameSync(__dirname + "/pixels/shiny/female/"+ poke[k].slug.eng + ".png", __dirname + "/pixels/shiny/female/"+ k +"FS.png")
            } 
        } else {
            console.log("pixels: "+ k + "-" +i)
        }
        if (fs.existsSync(__dirname + "/pixels/shiny/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".png")) {
            fs.renameSync(__dirname + "/pixels/shiny/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".png", __dirname + "/pixels/shiny/"+ k +(i == "." ? "" : "-"+i) + "S.png")
        } else {
            console.log("pixels(shiny): "+ k + "-" +i)
        }
        if (fs.existsSync(__dirname + "/sprites/regular/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".gif")) {
            fs.renameSync(__dirname + "/sprites/regular/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".gif", __dirname + "/sprites/regular/"+ k + (i == "." ? "" : "-"+i) + ".gif")
        } else {
            console.log("sprites: "+ k + "-" +i)
        }
        if (fs.existsSync(__dirname + "/sprites/shiny/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".gif")) {
            fs.renameSync(__dirname + "/sprites/shiny/"+ poke[k].slug.eng + (i == "." ? "" : "-"+i) + ".gif", __dirname + "/sprites/shiny/"+ k + (i == "." ? "" : "-"+i) + "S.gif")
        } else {
            console.log("sprites(shiny): "+ k + "-" +i)
        }
    })
})
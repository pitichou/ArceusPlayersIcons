const fs = require('fs')
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

const doJob = async () => {
    const elements = await readdir(__dirname)
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].toLowerCase().endsWith(".png") || elements[i].toLowerCase().endsWith(".txt") || elements[i].toLowerCase().endsWith(".js")) {
            if (elements[i].toLowerCase().endsWith(".png")){
                let num = elements[i].replace(/^([0-9])+/g, (c) => c.toString().padStart(3,'0'))
                if (elements[i] !== num) {
                    fs.rename(__dirname + "/"+ elements[i], __dirname + "/"+ num)
                }
            }
        } else {
            let elements2 = await readdir(__dirname+"/"+elements[i])
            for (let j = 0; j < elements2.length; j++) {
                if (elements2[j].toLowerCase().endsWith(".png")){
                    let num = elements2[j].replace(/^([0-9])+/g, (c) => c.toString().padStart(3,'0'))
                    if (elements2[j] !== num) {
                        fs.rename(__dirname+"/"+elements[i] + "/"+ elements2[j], __dirname +"/"+elements[i] + "/"+ num)
                    }
                }
            }
        }
    }
}

doJob()
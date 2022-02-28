#!/usr/bin/env node

const { writeFileSync, existsSync } = require("fs");
const { join } = require("path");
const args = process.argv.slice(2)

const isOption = (val) => val.startsWith("--") || val.startsWith("--");
const error = `touch: missing file operand
Try 'touch --help' for more information.`;

const options = args.filter((val) => {
    if(isOption(val)) {
        return val;
    }
});

const dirOrFile = args.filter((val) => {
    if(!isOption(val)) {
        return val;
    }
});

if(options.length == 0) {
    if(dirOrFile.length == 0) {
        console.log(error)
    }else {
        try {
            dirOrFile.forEach(val => {
                let pth = join(process.cwd(), val);
                if(!existsSync(pth)) {
                    writeFileSync(pth, "");
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    }
}else {
    console.log(error);
}
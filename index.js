#!/usr/bin/env node

const { ascii, numToAscii } = require("solverjs");
const { writeFileSync, existsSync, unlinkSync } = require("fs");
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

const divideNameToRange = (name) => {
    if(name.includes("..")) {
        let range = [];
        let [start, end] = name.split("..");
        if(start === end) {
            return [start]
        }else if(Number.isInteger(Number(start)) && Number.isInteger(Number(end))) {
            for(let i = start; i <= end; i++) {
                range.push(i);
            }
            return range;
        }else { 
            start = ascii(start);
            end = ascii(end);
            for(let i = start; i <= end; i++) {
                range.push(numToAscii(i));
            }
            return range;
        }
    } else {
        return null;
    }
}

if(options.length == 0) {
    if(dirOrFile.length == 0) {
        console.log(error)
    }else {
        try {
            let [baseFile, sufixFile] = [false, false];
            dirOrFile.forEach((val, idx) => {
                let range = divideNameToRange(val);
                if(range === null) {
                    let pth = join(process.cwd(), val);
                    if(!existsSync(pth)) {
                        baseFile = true;
                        writeFileSync(pth, "");
                    }
                }else if(range !== null) {
                    range.forEach(sufix => {
                        let pth = join(process.cwd(), dirOrFile[idx - 1] + sufix);
                        if(!existsSync(pth)) {
                            sufixFile = true;
                            writeFileSync(pth, "");
                        }
                    });
                }
                if(baseFile && sufixFile) {
                    unlinkSync(dirOrFile[idx - 1]);
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    }
}else {
    console.log(error);
}
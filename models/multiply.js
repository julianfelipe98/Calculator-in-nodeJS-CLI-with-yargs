const fs =require('fs');

/**
 * write a file on tables folder
 * @date 2020-12-21
 * @param {on this case the param base is the file name} base
 * @param {the data param is the file info } data
 * @returns {table name}
 */
let writeFile=(base,data)=>{
    return new Promise((resolve,reject)=>{
        if (!fs.existsSync('./tables')) fs.mkdirSync('./tables')
            
        fs.writeFile(`tables/table${base}.txt`, data, (err)=>{
            if (err)
                reject(err)
            else 
                resolve(`table${base}.txt`);
        })
    })
}

/**
 * crete the multiplication of a base with limit
 * @date 2020-12-21
 * @param {base of the multiplication} base
 * @param {limit of the multiplication} limit
 * @returns {multiplication product}
 */
let multiply=(base,limit)=>{
    if(Number(base)){
        let data='';
        for (let i = 1; i <= limit; i++) {
            data +=`${base}*${i}=${base*i} \n`;
        }
        return data;
    }else{
        return `el valor ${base} no es un numero`
    }
}
/**
 * create the multiplication on the tables folder 
 * @date 2020-12-21
 * @param {the multiplication base} base
 * @param {the multiplication limit } limit
 * @returns {}
 */
let createFile= async(base,limit)=>{
    if (Number(base)) {
        let data=await multiply(base,limit);
        let file =await writeFile(base,data);
        return file;
    }else{
        throw new Error(`${base} no es un numero `);
    }
}
module.exports={
    createFile,
    multiply
}
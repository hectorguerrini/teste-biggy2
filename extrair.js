const fs = require('fs'); 

function tabelaProduto(){
    let arr = fs.readFileSync('./products.csv','utf-8');
 
    arr = arr.split('\n');
    let saida = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].replace('\r', '');
        const line = arr[i].split(',');
        const obj = {
            ID: line[0],            
            Category: line[1],
            Name: line[2],

        }
        saida.push(obj);
    }
    return saida;
}
function tabelaUserBehevior(){
    let arr = fs.readFileSync('./user_behavior.csv','utf-8');
    arr = arr.split('\n');
    let saida = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].replace('\r', '');
        const line = arr[i].split(',');
        const obj = {
            ID: line[0],
            produtosClicked: line[1] != '' ? line[1].split(';') : [],
            produtosComprados: line[2] != '' ? line[2].split(';'): []

        }
        saida.push(obj);
    }
    return saida;
}

module.exports = {

    produtos: tabelaProduto(),
    user_behavior: tabelaUserBehevior()

}




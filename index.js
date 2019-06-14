var tabelas = require('./extrair');
function sortObject(obj) {
    obj.sort(function(a, b) { return a.qtde - b.qtde; });
    obj.reverse();
    return obj;
}

function printTopN(array,nElements,message){
    console.log(`Top ${nElements} ${message}`);
    for(let i = 0; i < nElements ; i++){
        console.log(`${i+1} -> Id: ${array[i].idProduto}, Produto: ${array[i].Produto}, Quantidade Vendido: ${array[i].qtde} `)
    }
    console.log('------------------------')
}

const topN = 5;



// Produtos Comprados
let comprados = []
tabelas.user_behavior.forEach( (el) => {
    comprados = [...comprados,...el.produtosComprados]
});
let produtosComprados = []
tabelas.produtos.forEach((el) =>{
    const qtdComprados = comprados.filter((c) => c === el.ID).length;
    produtosComprados.push({
        idProduto: el.ID,
        Produto: el.Name,
        qtde: qtdComprados
    })
})

var orderProdutos = sortObject(produtosComprados);
printTopN(orderProdutos,topN, 'Comprados')

// Produtos Clickados
let clicked = [];
tabelas.user_behavior.forEach( (el) => {
    clicked = [...clicked,...el.produtosClicked]
});
let produtosClicked = []
tabelas.produtos.forEach((el) =>{
    const qtdeClicked = clicked.filter((c) => c === el.ID).length;
    produtosClicked.push({
        idProduto: el.ID,
        Produto: el.Name,
        qtde: qtdeClicked
    })
})
var orderProdutosClicked = sortObject(produtosClicked);
printTopN(orderProdutosClicked,topN, 'Clickados')


// Produtos Comprados em conjunto de produto X
const ProdutoX = '1';
let compradosCom = []
tabelas.user_behavior.forEach( (el) => {
    let arrayP = el.produtosComprados.length > 1 && el.produtosComprados.indexOf(ProdutoX) != -1 ? el.produtosComprados.filter(p => p != ProdutoX) : [];
    compradosCom = [...compradosCom,...arrayP]
});
let produtosCompradosCom = []
tabelas.produtos.forEach((el) =>{
    const qtdeCompradosCom = compradosCom.filter((c) => c === el.ID).length;
    produtosCompradosCom.push({
        idProduto: el.ID,
        Produto: el.Name,
        qtde: qtdeCompradosCom
    })
})
var orderProdutosCompradosCom = sortObject(produtosCompradosCom);
printTopN(orderProdutosCompradosCom,topN, 'Comprados em conjunto')

// Produtos Clickados em conjunto de produto X
const ProdutoY = '1';
let clickadosCom = []
tabelas.user_behavior.forEach( (el) => {
    let arrayP = el.produtosClicked.length > 1 && el.produtosClicked.indexOf(ProdutoY) != -1 ? el.produtosClicked.filter(p => p != ProdutoY) : [];
    clickadosCom = [...clickadosCom,...arrayP]
});
let produtosClickadosCom = []
tabelas.produtos.forEach((el) =>{
    const qtdeClickadosCom = clickadosCom.filter((c) => c === el.ID).length;
    produtosClickadosCom.push({
        idProduto: el.ID,
        Produto: el.Name,
        qtde: qtdeClickadosCom
    })
})
var orderProdutosClickadosCom = sortObject(produtosClickadosCom);
printTopN(orderProdutosClickadosCom,topN, 'Clickados em conjunto')

// Produtos Comprados em conjunto Clickado em Z
const ProdutoZ = '1';
let ClickCom = []
tabelas.user_behavior.forEach( (el) => {
    let arrayP = el.produtosComprados.length > 0 && el.produtosClicked.indexOf(ProdutoZ) != -1 ? el.produtosComprados.filter(p => p != ProdutoZ) : [];
    ClickCom = [...ClickCom,...arrayP]
});
let produtosClickCom = []
tabelas.produtos.forEach((el) =>{
    const qtdeClickCom = ClickCom.filter((c) => c === el.ID).length;
    produtosClickCom.push({
        idProduto: el.ID,
        Produto: el.Name,
        qtde: qtdeClickCom
    })
})
var orderProdutosClickCom = sortObject(produtosClickCom);
printTopN(orderProdutosClickCom,topN, 'Comprados em conjundo clickados')


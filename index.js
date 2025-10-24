const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
const PORT = process.env.PORT || 8080;

//criando a rota inicial
app.get("/", function(req, res) {
    res.send("<h1>Bem vindo ao nosso site do Lehi e Victor!</h1>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req, res) {
    res.send("<h1>Lista de Produtos Novos!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req, res) {
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send("retorno consulta:" + req.params.parametro);
})


//rota com parametro opcional
app.get("/cadastro/{:nome}", function(req, res) {
    //req --> dados enviados pelo cliente
    var nome = req.params.nome;
    if (nome) {
        res.send("<h1>produto " + nome + " criado guri!</h1>");
    } else {
        res.send("produto criado meu amigo!");
    }

})


//app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 3000
//    if (erro){
//        console.log("Erro ao Iniciar.");
//    }else{
//        console.log("Servidor Iniciado.");
//    }
//})

console.log("PORT env: ", process.env.port);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
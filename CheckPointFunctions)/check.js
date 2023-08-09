function mostrarLembrete() {
    console.log('Water the plants');
}
function saudacaoEmEspanhol() {

    console.log('Buenas tardes.');
}
function agradecerCliente() {
    console.log('Thank you for your purchase! We appreciate your business.')
}
agradecerCliente()
agradecerCliente()
agradecerCliente()
agradecerCliente()
function agradecerCliente(nome='Cole'){
    console.log('Thank you for your purchase '+nome+'! We appreciate your business.')
}
agradecerCliente('carol')
function criarListaDeCompras(item1 = 'Leite', item2 = 'pão', item3 = 'ovos'){
    console.log(item1 + item2 + item3)
}
function contarMonitores(linhas , colunas ){
    return linhas * colunas
}
const numeroDeMonitores = contarMonitores(5, 4)
console.log(numeroDeMonitores)
function custoDosMonitores(linhas , colunas){
    return (linhas*colunas)*200
}
const custoTotal = custoDosMonitores(5, 4)
console.log(custoTotal)
const plantaPrecisaDeAgua = dia => {
    if (dia === 'Wednesday') {
        return true
    } else {
        return false
    }   
}
console.log(plantaPrecisaDeAgua('Tuerday'))
const dividendo = prompt("Digite o Dividendo:");
const divisor = prompt("Digite o Divisor:");

if(divisor === 0 )
{
    alert("Não é possivel Executar a divisão pois nenhum numero é dividido por zero");
} else{
    const resultatdo = dividendo / divisor;
    alert(`${dividendo} dividio por ${divisor} é ${resultatdo}`)
}
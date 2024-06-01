document.getElementById('m').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário padrão
    
    // Obter os valores dos campos
    var name = document.getElementById('name').value;
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);
    var value4 = parseFloat(document.getElementById('value4').value);
    var value5 = parseFloat(document.getElementById('value5').value);
    var value6 = parseFloat(document.getElementById('value6').value);
    
    // Calcular a soma
    var sum = value1 + value2 + value3 + value4 + value5 + value6;
    
    // Exibir o resultado na página
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<p>Nome: " + name + "</p><p>Soma dos valores: " + sum + "</p>";
});
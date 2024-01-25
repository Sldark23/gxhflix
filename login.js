document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter dados do formulário
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Carregar contas do arquivo JSON
    fetch('contas.json')
        .then(response => response.json())
        .then(accounts => {
            // Verificar se as credenciais são válidas
            var validLogin = accounts.some(function(account) {
                return account.username === username && account.password === password;
            });

            if (validLogin) {
                window.location.href = 'sere.html';
                // Adicione aqui o redirecionamento para a página principal após o login
            } else {
                alert("Credenciais inválidas. Tente novamente.");
            }
        })
        .catch(error => console.error('Erro ao carregar contas:', error));
});
const mudarUsuarioBtn = document.getElementById('mudarUsuario'); 
const fotoUsuario = document.getElementById('foto');
const nomeUsuario = document.getElementById('nome');
const emailUsuario = document.getElementById('email');

async function carregarUsuarioAleatorio() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const usuario = data.results[0];

        fotoUsuario.src = usuario.picture.large; 
        nomeUsuario.textContent = usuario.name.first + ' ' + usuario.name.last;
        emailUsuario.textContent = usuario.email;
    } catch (error) {
        console.error('Erro ao carregar o usuário:', error);
    }
}

mudarUsuarioBtn.addEventListener('click', carregarUsuarioAleatorio);

// Carrega um usuário aleatório ao carregar a página inicialmente
carregarUsuarioAleatorio();

function mostrarIngredientes(elemento) {
  const ingredientes = elemento.querySelector('.produto-ingredientes');
  if (!ingredientes) return; 

  if (ingredientes.style.display === 'block') {
    ingredientes.style.display = 'none';
  } else {
    ingredientes.style.display = 'block';
  }
}

function mostrarSabores(elemento) {
  const sabores = elemento.querySelector('.produto-sabores');
  if (!sabores) return; 

  if (sabores.style.display === 'block') {
    sabores.style.display = 'none';
  } else {
    sabores.style.display = 'block';
  }
}

function mostrarItens(elemento) {
  const itens = elemento.querySelector('.produto-itens');
  if (!itens) return; 

  if (itens.style.display === 'block') {
    itens.style.display = 'none';
  } else {
    itens.style.display = 'block';
  }
}

function toggleTabela() {
  const tabela = document.getElementById('acrescimos');
  tabela.style.display = tabela.style.display === 'none' || tabela.style.display === '' ? 'block' : 'none';
}
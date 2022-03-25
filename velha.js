var jogador,
	vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {
	if (vencedor !== null) {
		return;
	}

	var quadrado = document.getElementById(id);

	// stops the code when the content is bit '-'
	if (quadrado.innerHTML !== '-') {
		return;
	}

	quadrado.innerHTML = jogador;
	quadrado.style.color = '#000';

	if (jogador === 'X') {
		jogador = 'O';
	} else {
		jogador = 'X';
	}

	mudarJogador(jogador);
	checarVencedor();

	console.log(`quadrado ${id} clicado`);
}

function mudarVencedor(quadrado) {
	vencedor = quadrado.innerHTML;
	vencedorSelecionado.innerHTML = vencedor;
}

function mudarJogador(valor) {
	jogador = valor;
	jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
	var quadrado1 = document.getElementById(1);
	var quadrado2 = document.getElementById(2);
	var quadrado3 = document.getElementById(3);
	var quadrado4 = document.getElementById(4);
	var quadrado5 = document.getElementById(5);
	var quadrado6 = document.getElementById(6);
	var quadrado7 = document.getElementById(7);
	var quadrado8 = document.getElementById(8);
	var quadrado9 = document.getElementById(9);

	if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
		mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
		mudarVencedor(quadrado1);
		return;
	}
	if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
		mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
		mudarVencedor(quadrado4);
		return;
	}
	if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
		mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
		mudarVencedor(quadrado7);
		return;
	}
	if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
		mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
		mudarVencedor(quadrado1);
		return;
	}
	if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
		mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
		mudarVencedor(quadrado2);
		return;
	}
	if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
		mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
		mudarVencedor(quadrado3);
		return;
	}
	if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
		mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
		mudarVencedor(quadrado1);
		return;
	}
	if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
		mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
		mudarVencedor(quadrado3);
		return;
	}
}

function mudarCorQuadrado(posicao1, posicao2, posicao3) {
	posicao1.style.background = '#0f0';
	posicao2.style.background = '#0f0';
	posicao3.style.background = '#0f0';
}

function checaSequencia(posicao1, posicao2, posicao3) {
	var eigual = false;

	if (
		posicao1.innerHTML !== '-' &&
		posicao1.innerHTML === posicao2.innerHTML &&
		posicao2.innerHTML === posicao3.innerHTML
	) {
		eigual = true;
	}
	return eigual;
}

// TODO: Add button to toss the coin

function reiniciar() {
	vencedor = null;
	vencedorSelecionado.innerHTML = '';

	for (var i = 1; i <= 9; i++) {
		quadrado = document.getElementById(i);
		quadrado.style.background = '#eee';
		quadrado.style.color = '#eee';
		quadrado.innerHTML = '-';
	}
	mudarJogador('X');
}

// Menu Hamburguer
    const botaoMenu = document.querySelector('.botao-menu');
    const navegacao = document.querySelector('.navegacao-principal');
    
    botaoMenu.addEventListener('click', () => {
      navegacao.classList.toggle('ativo');
      botaoMenu.textContent = navegacao.classList.contains('ativo') ? '✕' : '☰';
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navegacao-principal a').forEach(link => {
      link.addEventListener('click', () => {
        navegacao.classList.remove('ativo');
        botaoMenu.textContent = '☰';
      });
    });

    // Acessibilidade - Contraste
    const botaoContraste = document.getElementById('botao-contraste');
    let contrasteAtivo = false;
    
    botaoContraste.addEventListener('click', () => {
      contrasteAtivo = !contrasteAtivo;
      document.body.classList.toggle('alto-contraste', contrasteAtivo);
      botaoContraste.textContent = contrasteAtivo ? 'Tema Normal' : 'Alto Contraste';
    });

    // Controles de Fonte
    const aumentarFonte = document.querySelector('.aumentar-fonte');
    const diminuirFonte = document.querySelector('.diminuir-fonte');
    const resetarFonte = document.querySelector('.resetar-fonte');
    
    function alterarTamanhoFonte(acao) {
      const corpo = document.body;
      let tamanhoAtual = parseFloat(window.getComputedStyle(corpo, null).getPropertyValue('font-size'));
      
      if (acao === 'aumentar') {
        corpo.style.fontSize = (tamanhoAtual + 2) + 'px';
      } else if (acao === 'diminuir') {
        corpo.style.fontSize = (tamanhoAtual - 2) + 'px';
      } else {
        corpo.style.fontSize = '16px';
      }
    }

    aumentarFonte.addEventListener('click', () => alterarTamanhoFonte('aumentar'));
    diminuirFonte.addEventListener('click', () => alterarTamanhoFonte('diminuir'));
    resetarFonte.addEventListener('click', () => alterarTamanhoFonte('resetar'));
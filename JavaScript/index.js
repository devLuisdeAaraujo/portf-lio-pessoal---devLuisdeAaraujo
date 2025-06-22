window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    setTimeout(() => {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.style.display = 'none';
      }, 1000); // depois da transição de opacidade
    }, 2000); // tempo de exibição da splash (2 segundos)
  });//Splash Activity

  //Baixar Documento
function baixarDocumento(){

  const link = document.createElement('a')
  link.href='../Arquivos/Documentos/Habilidades.pdf'
  link.download = 'Habilidades.pdf'
  link.click()
}

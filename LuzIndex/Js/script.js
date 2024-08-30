(function(){
    emailjs.init("RgRd4XueEUv6UxaWj"); })();

  document.getElementById('contatoDoFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    /*console.log("Nome:", document.getElementById('nome').value);
    console.log("Email:", document.getElementById('email').value);
    console.log("Telefone:", document.getElementById('telefone').value);
    console.log("Nome da Empresa:", document.getElementById('nome_empresa').value);
    console.log("Faturamento:", document.getElementById('faturamento').value);*/

    emailjs.sendForm('service_2dwktgs', 'template_zeb911k', this)
      .then(function() {
        alert('Enviado com Sucesso!');
      }, function(error) {
        alert('Falha ao enviar! Revise o preenchimento! ' + JSON.stringify(error));
      });
  });
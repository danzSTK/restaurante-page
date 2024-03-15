
$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 99999-9999'
    });

    $('form').validate({
        rules: {
            telefone: {
                required: true
            },
            nome:{
                required: true
            },
            email:{
                required:true,
                email:true
            }
        },
        messages:{
            telefone: "Por favor, digite seu número para contato",
            nome:'Por favor, preencha seu nome',
            email:'Por favor, preencha seu email ex: Exemplo@gmail.com'
        }
    })
})
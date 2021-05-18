var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault();
   
   var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);   
   

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);        
        return;        
    }

    addPacienteNaTabela(paciente); 

   form.reset();
   var mensagennsErro = document.querySelector("#mensagens-erro");
   mensagennsErro.innerHTML = "";
});

function addPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    })
};


function obtemPacienteDoFormulario(form) {
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaIMC(form.peso.value, form.altura.value)
        }
        return paciente;
};

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome"); 
    var pesoTd = montaTd(paciente.peso, "info-peso"); 
    var alturaTd = montaTd(paciente.altura, "info-altura"); 
    var gorduraTd = montaTd(paciente.gordura, "info-gordura"); 
    var imcTd = montaTd(paciente.imc, "info-imc"); 
 

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);

    return pacienteTr; 
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente) {

    var erros = [];
    
   if(paciente.nome.length == 0) erros.push("Adicione um nome");
   if(paciente.gordura.length == 0) erros.push("Adicione o percentual de gordura");
   if(!validaPeso(paciente.peso) || paciente.peso.length == 0) erros.push("Peso é inválido");
    if(!validaAltura(paciente.altura) || paciente.altura.length == 0) erros.push("Altura é inválida");
    
    return erros;   
}

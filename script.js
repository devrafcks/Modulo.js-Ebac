document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");
  
    if (campoB > campoA) {
      mensagem.textContent = "✅ O número B é maior que A.";
      mensagem.style.color = "green";
    } else {
      mensagem.textContent = "❌ O número B deve ser maior que A.";
      mensagem.style.color = "red";
    }
});

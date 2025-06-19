function adicionarTarefa() {
  const input = document.getElementById("tarefa");
  const texto = input.value.trim();

  if (texto !== "") {
    const lista = document.getElementById("lista");

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textoTarefa = document.createTextNode(texto);

    li.appendChild(checkbox);
    li.appendChild(textoTarefa);

    lista.appendChild(li);

    input.value = "";
  }
}

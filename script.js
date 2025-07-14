document.addEventListener("DOMContentLoaded", () => {
  const ramos = Array.from(document.querySelectorAll(".ramo"));

  function actualizar() {
    ramos.forEach(ramo => {
      const requisitos = ramo.dataset.prerrequisitos;
      if (!requisitos || requisitos === "") {
        ramo.classList.remove("bloqueado");
        return;
      }

      const reqs = requisitos.split(",").map(id => id.trim());
      const aprobados = reqs.every(id =>
        document.querySelector(`.ramo[data-id="${id}"]`)?.classList.contains("aprobado")
      );

      if (aprobados) {
        ramo.classList.remove("bloqueado");
      } else {
        ramo.classList.add("bloqueado");
        ramo.classList.remove("aprobado");
      }
    });
  }

  ramos.forEach(ramo => {
    const tieneReq = ramo.dataset.prerrequisitos;
    if (tieneReq) ramo.classList.add("bloqueado");

    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;
      ramo.classList.toggle("aprobado");
      actualizar();
    });
  });

  actualizar();
});

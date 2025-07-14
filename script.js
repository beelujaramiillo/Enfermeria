const ramos = [
  { id: "morfologia", nombre: "Morfología", abre: ["fisiologia_basica", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "bases_enfermeria", nombre: "Bases Teorías de Enfermería y Bioética", abre: ["bases_cuidado", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "matematicas", nombre: "Bases Matemáticas y Estadística", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "ingles_a2", nombre: "Inglés Nivel A2-", abre: ["ingles_a2_plus"] },
  { id: "comunicacion_escrita", nombre: "Comunicación Escrita", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "comunicacion_oral", nombre: "Comunicación Oral", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "biologia", nombre: "Bases Biológicas", abre: ["fisiologia_basica", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "quimica", nombre: "Bases Químicas", abre: ["bioquimica", "semana1", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "bases_cuidado", nombre: "Bases del Cuidado de Enfermería", abre: ["enf_familiar", "enf_clinico", "semana1", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "ingles_a2_plus", nombre: "Inglés Nivel A2+", abre: ["ingles_b1"] },
  { id: "lectura_critica", nombre: "Lectura Crítica", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "pensamiento_critico", nombre: "Pensamiento Crítico", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "fisiologia_basica", nombre: "Fisiología Básica", abre: ["fisiopatologia", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_familiar", nombre: "Enfermería Familiar y de la Comunidad", abre: ["enf_comunitaria", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "microbiologia", nombre: "Microbiología", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "salud_publica", nombre: "Salud Pública y Epidemiología", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "bioquimica", nombre: "Bioquímica", abre: ["farmacologia", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "semana1", nombre: "Semana I", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "ingles_b1", nombre: "Inglés Nivel B1-", abre: ["ingles_tecnico"] },
  { id: "fisiopatologia", nombre: "Fisiopatología", abre: ["adulto1", "enf_mujer", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_clinico", nombre: "Cuidado de Enfermería Clínico", abre: ["adulto1", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "psicologia", nombre: "Psicología de la Salud", abre: ["educacion_salud", "enf_psicosocial", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "farmacologia", nombre: "Farmacología Clínica", abre: ["adulto1", "enf_psicosocial", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "ingles_tecnico", nombre: "Inglés Técnico", abre: ["physical_exam", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "adulto1", nombre: "Cuidados de Enfermería del Adulto 1", abre: ["adulto2", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "educacion_salud", nombre: "Educación para la Salud", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_mujer", nombre: "Enfermería de la Mujer y el Recién Nacido", abre: ["enf_nino", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_psicosocial", nombre: "Enfermería Psicosocial", abre: ["enf_psiquiatria", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "adulto2", nombre: "Cuidados de Enfermería del Adulto 2", abre: ["enf_urgencia", "enf_comunitaria", "enf_geronto", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "fundamentos_socio", nombre: "Fundamentos Socioantropológicos", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "physical_exam", nombre: "Physical Exam", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_psiquiatria", nombre: "Enfermería en Psiquiatría", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_urgencia", nombre: "Enfermería en Urgencia", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_comunitaria", nombre: "Enfermería en Salud Comunitaria", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "investigacion", nombre: "Investigación Cualitativa y Cuantitativa", abre: ["diseno_proyecto", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "gestion", nombre: "Gestión en Enfermería", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_nino", nombre: "Enfermería del Niño y del Adolescente", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "enf_geronto", nombre: "Enfermería Gerontogeriátrica", abre: ["internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "diseno_proyecto", nombre: "Diseño de Proyecto de Investigación", abre: ["investigacion_aplicada", "internado_hospitalario", "internado_comunitario", "electivo1", "electivo2"] },
  { id: "investigacion_aplicada", nombre: "Investigación Aplicada en Salud" },
  { id: "internado_comunitario", nombre: "Internado Comunitario" },
  { id: "internado_hospitalario", nombre: "Internado Hospitalario" },
  { id: "electivo1", nombre: "Curso Electivo Opcional/Lab 1" },
  { id: "electivo2", nombre: "Curso Electivo Opcional/Lab 2" },
];

const contenedor = document.getElementById("malla");

function crearCaja(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = ramo.nombre;
  div.dataset.id = ramo.id;
  if (ramo.prerrequisitos?.length) {
    div.classList.add("bloqueado");
  }
  return div;
}

// Crear diccionario de dependencias
const dependencias = {};
ramos.forEach(r => {
  r.abre?.forEach(destino => {
    if (!dependencias[destino]) dependencias[destino] = [];
    dependencias[destino].push(r.id);
  });
});

ramos.forEach(ramo => contenedor.appendChild(crearCaja(ramo)));

function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(el => {
    const id = el.dataset.id;
    const requisitos = dependencias[id];
    if (!requisitos) {
      el.classList.remove("bloqueado");
      return;
    }
    const aprobados = requisitos.every(reqId =>
      document.querySelector(`.ramo[data-id="${reqId}"]`)?.classList.contains("aprobado")
    );
    if (aprobados) {
      el.classList.remove("bloqueado");
    } else {
      el.classList.add("bloqueado");
      el.classList.remove("aprobado");
    }
  });
}

document.querySelectorAll(".ramo").forEach(el => {
  el.addEventListener("click", () => {
    if (el.classList.contains("bloqueado")) return;
    el.classList.toggle("aprobado");
    actualizarEstado();
  });
});

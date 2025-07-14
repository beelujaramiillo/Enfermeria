const ramos = document.querySelectorAll('.ramo');

// Define los prerrequisitos: "ramo destino" => ["requisitos"]
const prerequisitos = {
  ingles_a2_plus: ["ingles_a2"],
  ingles_b1: ["ingles_a2_plus"],
  ingles_tecnico: ["ingles_b1"],
  bioquimica: ["quimica"],
  fisiologia_basica: ["morfologia", "biologia"],
  bases_cuidado: ["bases_enfermeria"],
  semana1: ["bases_cuidado", "quimica"],
  enf_familiar: ["bases_cuidado"],
  enf_clinico: ["bases_cuidado"],
  farmacologia: ["bioquimica"],
  fisiopatologia: ["fisiologia_basica"],
  adulto1: ["fisiopatologia", "enf_clinico", "farmacologia"],
  enf_mujer: ["fisiopatologia"],
  educacion_salud: ["psicologia"],
  enf_psicosocial: ["farmacologia", "psicologia"],
  adulto2: ["adulto1"],
  enf_urgencia: ["adulto2"],
  enf_comunitaria: ["adulto2", "enf_familiar"],
  enf_geronto: ["adulto2"],
  physical_exam: ["ingles_tecnico"],
  enf_nino: ["enf_mujer"],
  enf_psiquiatria: ["enf_psicosocial"],
  diseno_proyecto: ["investigacion"],
  investigacion_aplicada: ["diseno_proyecto"],
  internado_hospitalario: [
    "morfologia", "bases_enfermeria", "matematicas", "comunicacion_escrita", "comunicacion_oral", 
    "biologia", "quimica", "bases_cuidado", "lectura_critica", "pensamiento_critico", 
    "fisiologia_basica", "enf_familiar", "microbiologia", "salud_publica", "bioquimica", "semana1", 
    "fisiopatologia", "enf_clinico", "psicologia", "farmacologia", "ingles_tecnico", "adulto1", 
    "educacion_salud", "enf_mujer", "enf_psicosocial", "adulto2", "fundamentos_socio", 
    "physical_exam", "enf_psiquiatria", "enf_urgencia", "enf_comunitaria", "investigacion", 
    "gestion", "enf_nino", "enf_geronto", "diseno_proyecto"
  ],
  internado_comunitario: ["internado_hospitalario"],
  electivo1: ["morfologia", "bases_enfermeria", "matematicas", "comunicacion_escrita", "comunicacion_oral", 
              "biologia", "quimica", "bases_cuidado", "lectura_critica", "pensamiento_critico", 
              "fisiologia_basica", "enf_familiar", "microbiologia", "salud_publica", "bioquimica", 
              "semana1", "fisiopatologia", "enf_clinico", "psicologia", "farmacologia", 
              "ingles_tecnico", "adulto1", "educacion_salud", "enf_mujer", "enf_psicosocial", 
              "adulto2", "fundamentos_socio", "physical_exam", "enf_psiquiatria", "enf_urgencia", 
              "enf_comunitaria", "investigacion", "gestion", "enf_nino", "enf_geronto", 
              "diseno_proyecto"],
  electivo2: ["electivo1"]
};

// Revisión inicial: desactiva los ramos bloqueados
function revisarEstadoInicial() {
  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (prerequisitos[id]) {
      ramo.classList.add("bloqueado");
    }
  });
}

// Verifica si todos los prerrequisitos de un ramo están aprobados
function requisitosAprobados(id) {
  const reqs = prerequisitos[id] || [];
  return reqs.every(reqId => {
    const ramo = document.querySelector(`.ramo[data-id="${reqId}"]`);
    return ramo && ramo.classList.contains("aprobado");
  });
}

// Actualiza el estado bloqueado/desbloqueado de los ramos
function actualizarEstado() {
  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (prerequisitos[id]) {
      if (requisitosAprobados(id)) {
        ramo.classList.remove("bloqueado");
      } else {
        ramo.classList.add("bloqueado");
        ramo.classList.remove("aprobado");
      }
    }
  });
}

// Evento al hacer clic en un ramo
ramos.forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;
    ramo.classList.toggle("aprobado");
    actualizarEstado();
  });
});

revisarEstadoInicial();

const information = [
  {
    name: `About Me`,

    title: "Hugo José Esparza Fanizzi",

    subtitle: `No creo en las palabras "No se puede" o "No se hacerlo" para todo hay solución y todos tenemos la capacidad de aprender lo que queramos`,

    summary: `¡Que bueno que has llegado hasta aquí!. Soy Hugo José Esparza Fanizzi, nacido en Venezuela, lleno de aspiraciones y metas por cumplir que seguro conseguire aqui en España.
    <br/><br/>    
    No creo en la palabra "No se puede" o  "No se hacerlo", pienso que ahora en el mundo que vivimos hay soluciones para todo y por eso me he querido sumergir en la programación ya que es un mar de infinitas posibilidades. 
    <br/><br/>
    Me gusta mucho aprender cosas nuevas y me esmero por conseguir los objetivos que me propongo sin importar las veces que caiga seran mas las veces que me levantaré.`,

    story: `Trabajo desde los 15 años, siempre he sido un poco inquieto por salir adelante, termine el bachillerato y empece a estudiar Ingenieria Eléctronica, la cual no pude terminar por iniciar mi nueva vida en España. 
    <br/><br/>
    Llegue a españa el 12 de Octubre del 2017 junto a mi esposa, llenos de iluciones y ganas de salir adelante, a los tres meses consegui mi primer trabajo como dependiente de tienda en la cual me ofrecieron la posibilidad de aprender a reparar equipos eléctronicos, sin dudar acepte y aprendi todo lo que me enseñaron y con el tiempo reforce esos conocimientos y me especialice mas en el sector, sin embargo, no me llenaba del todo. 
    <br/><br/>
    Siempre me ha gustado realizar formatos en excel y hacer fórmulas, entonces por que no estudiar algo en lo que podre hacer de todo, por tal motivo decidi estudiar desarrollo web.
    <br/><br/>
    El 20 de Agosto del 2020 nacio mi hermosa hija. En Abril del 2021 mi esposa y yo empezamos un negocio a pesar de todos los inconvenientes de la pandemia decidimos hacerlo y aun sigue funcionando gracias a nuestro esfuerzo y dedicación, la cual tambien quiero transmitir en mis futuros trabajos.
    <br/><br/>
    Dar lo mejor de mi para obtener los mejores resultados y sin ponerme limites para aprender lo que sea necesario en el trayecto.
    `,
    personalObjectives: [
      `Hacer crecer nuestro negocio y emprender más`,
      `Crecer junto a mi familia y poder pasar mas tiempo juntos`,
    ],

    jobsGoals: [
      `Aprender cada día mas sobre el desarrollo de aplicaciones web`,
      `Escalar y llegar a ser de mucho valor en la empresa que este`,
      `Poder desarrollar aplicaciónes web de utilidad para mejores las empresas y negocios en general`,
    ],

    whyMe: `Quizas mi experiencia actual no haga saltar tu interés, pero te aseguro que si me dan una oportunidad no te arrepentiras, por que hay algo que no te da la experiencia y son las ganas de aprender, la actitud para ello y el espíritu necesario para crecer, los conocimientos se construyen y da igual los que necesite seguro paso a paso los obtendré`,

    photoURL: ``,

    callToAction: `Llámame - ¿Que es lo peor que puede pasar?`,
  },

  {
    name: `Education`,
    summary: `Mi última formación ha sido "Desarrollador Web Full Stack" impartido por Adecco y Red.es en el 2022`,
    educations: [
      {
        title: `DESARROLLADOR WEB FULL STACK`,
        trainingCenter: `ADECCO Y RED.ES`,
        year: `2022`,
        timeContents: `230 Hours`,
        contents: [
          `Programación (HTML, CSS Y JAVASCRIPT)`,
          `BBDD (MySQL)`,
          `JAVA`,
        ],
      },
      {
        title: `FUNDAMENTOS DE JAVASCRIPT`,
        trainingCenter: `PLATZI`,
        year: `2021`,
        timeContents: `230 Hours`,
        contents: [
          `Introducción a la programación`,
          `Fundamentos de JavaScript`,
        ],
      },
      {
        title: `REPARACIÓN DE DISPOSITIVOS ELECTRÓNICOS`,
        trainingCenter: `IRIPARO`,
        year: `2018`,
        timeContents: `80 Hours`,
        contents: [
          `Reparación de móviles`,
          `Reparación de tablets`,
          `Reparación de portatiles`,
        ],
      },
      {
        title: `INGENIERÍA ELECTRÓNICA     AUTOMATIZACIÓN Y CONTROL`,
        trainingCenter: `URBE-VENEZUELA`,
        year: `2017`,
        timeContents: `FINALIZADO EN 2º CURSO`,
      },
      {
        title: `BACHILLER EN CIENCIAS`,
        trainingCenter: `URBE-VENEZUELA`,
        year: `2010`,
      },
    ],
  },

  {
    name: `Experiences`,
    summary: `Mi anterior trabajo fue como "Técnico de reparación de móviles SAMSUNG" en ANOVO`,
    experiences: [
      {
        job: `PRÁCTICAS CURSO PROGRAMADOR WEB
        FULL STACK`,
        company: `ADECCO Y RED.ES`,
        timeWorking: `2022`,
        functions: [
          `Curriculum - HTML4`,
          `Réplica de pagina de google - HTML5 / CSS3`,
          `Sistema de gestión de cafetería - JAVA SWING`,
          `Gestión de venta de entradas futbol - JAVA SERVLETS`,
          `Sistema de quejas por distritos Madrid- JAVA SERVLETS
          `,
        ],
      },
      {
        job: `TÉCNICO EN REPARACIÓN DE DISPOSITIVOS
        ELECTRÓNICOS`,
        company: `IRIPARO / ANOVO`,
        timeWorking: `2018-2022`,
        functions: [
          `Reparación de dispositivos con software (ODIN - SAMSUNG)`,
          `Reparación de dispositivos Hardware (Multi-marca)`,
          `Reparaciones de nivel 3 soldadura y micro-soldadura`,
        ],
      },
      {
        job: `SOPORTE TÉCNICO REDES`,
        company: `SAETA INGENIERÍA `,
        timeWorking: `2013-2017`,
        functions: [
          `Configuración de equipos de redes (CISCO).
        `,
        ],
      },
    ],
  },
  {
    name: `Contact Me`,
    titleName: `Name:`,
    titleMessage: `Message:`,
    titleEmail: `Email:`,
    titleSend: `Confirm`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(information));
};

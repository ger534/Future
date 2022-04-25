import X035 from '../assets/X035.png'

//acts images
import Ojo from '../assets/logo_tecno.png'
import HolaMundo1 from '../assets/Arte_305_Bust.png'
import Resolucion from '../assets/_Arte_Escena_305_Y_503.png'
import NuevaPerspectiva from '../assets/Arte_Árbol_Amarillo.png'
import Rendicion from '../assets/Arte_Juicio305_V3.png'
import Epilogo from '../assets/Arte_Escena_Nave_Ganso.png'

//game cover image
import HolaMundo from '../assets/Arte_305_Fondo_V3.png'
import ChosenOne from '../assets/the-chosen-one.jpeg'
import lastMartian from '../assets/the-last-martian.jpeg'
import TheIsland from '../assets/the-island.jpeg'
import island from '../assets/island.jpeg'

//char images
import character_503 from '../assets/Arte_503_Full_Body.png'
import character_305 from '../assets/Arte_305__Full_Body.png'
import character_Ganso from '../assets/Arte_ganoso_full_body.png'
import character_Muro from '../assets/Arte_Muro_Full_Body.png'

//game covers array
const gameCovers = [
  {
    title: "Hola, Mundo",
    route: "/tecno-topia",
    image: HolaMundo,
    acts: [{ bigTitle: "Términos y condiciones", title: "Términos y condiciones", route: "/terms_and_conditions", gameId: "terms_and_conditions", next: "/hello_world_1", image: Ojo, orientation: "landscape", coverText: "Estás a punto de comenzar una experiencia que no sabes dónde terminará ¿te sientes listo? Antes de empezar \"Hola, Mundo\" debemos confirmar que lo estás." },
    { bigTitle: "Hola, Mundo", title: "Hola Mundo: Alarma en la Tierra", route: "/hello_world_1", gameId: "hello_world_1", next: "/hello_world_2", image: HolaMundo, orientation: "portrait", coverText: "305 es un monitor en la tierra moderna. Su labor consiste en reparar las averías que ocurren en un importante sistema de entretenimiento futurista. Hasta que un día todo cambia." },
    { bigTitle: "Hola, Mundo", title: "Hola Mundo: Rendición de cuentas", route: "/hello_world_2", gameId: "hello_world_2", next: "/hello_world_3", image: Rendicion, orientation: "landscape", coverText: "¿Sueño o pesadilla? Independientemente, 305 debe explicar a sus colegas y al Muro de Fuego los acontecimientos producidos a partir de la alarma." },
    { bigTitle: "Hola, Mundo", title: "Hola Mundo: Nueva perspectiva", route: "/hello_world_3", gameId: "hello_world_3", next: "/hello_world_4", image: NuevaPerspectiva, orientation: "portrait", coverText: "Una nueva... ¿dimensión? La realidad se vuelve fragil luego de una conversación profunda y un par de demostraciones." },
    { bigTitle: "Hola, Mundo", title: "Hola Mundo: Resolución", route: "/hello_world_4", gameId: "hello_world_4", next: "/hello_world_5", image: Resolucion, orientation: "landscape", coverText: "Todo lo que inicia debe terminar ¿estás listo para concluir esta historia?" },
    { bigTitle: "Hola, Mundo", title: "Hola Mundo: Epílogo", route: "/hello_world_5", gameId: "hello_world_5", next: "/", image: Epilogo, orientation: "landscape", coverText: "¿Qué nos depara el futuro?" },
    ],
    extraContent: [{ title: "Personajes", route: "/characters" },
    { title: "Borrador: Términos y condiciones", route: "/0-terms_and_conditions" },
    { title: "Borrador: Hola Mundo", route: "/1-hello_world" },
    { title: "Cómo se hizo", route: "/how_was_done" },
    { title: "Comentarios", route: "/comments" }
    ]
  }
]

let games = [
  { title: "Términos y condiciones", gameId: "terms_and_conditions", route: "/terms_and_conditions", next: "/hello_world_1", image: Ojo, orientation: "landscape", },
  { title: "Hola Mundo: Alarma en la Tierra", gameId: "hello_world_1", route: "/hello_world_1", next: "/hello_world_2", image: HolaMundo, orientation: "portrait", },
  { title: "Hola Mundo: Rendición de cuentas", gameId: "hello_world_2", route: "/hello_world_2", next: "/hello_world_3", image: Rendicion, orientation: "landscape", },
  { title: "Hola Mundo: Nueva perspectiva", gameId: "hello_world_3", route: "/hello_world_3", next: "/hello_world_4", image: NuevaPerspectiva, orientation: "portrait", },
  { title: "Hola Mundo: Resolución", gameId: "hello_world_4", route: "/hello_world_4", next: "/hello_world_5", image: Resolucion, orientation: "landscape",},
  { title: "Hola Mundo: Epílogo", gameId: "hello_world_5", route: "/hello_world_5", next: "/", image: Epilogo, orientation: "landscape", },
]

//current plays array
const mainPlays = [
  {
    title: "Hola, Mundo",
    route: "/tecno-topia",
    image: HolaMundo1,
    author: "Gabriel Espinoza Rojas"
  },
  {
    title: "X035",
    route: "/X035",
    image: X035,
    author: "Autores varios"
  },
  {
    title: "El Elegido",
    route: "/the-chosen-one",
    image: ChosenOne,
    author: "Steven Cubillo"
  },
  {
    title: "El último marciano",
    route: "/the-last-martian",
    image: lastMartian,
    author: "Henry Caamaño"
  },
  {
    title: "La isla",
    route: "/the-island",
    image: TheIsland,
    author: "W.Smayler"
  },
]

//characters array
const mainCards = [
  {
    title: "305",
    route: "/305",
    //text: "El supervisor",
    image: character_305,
  },
  {
    title: "503",
    route: "/503",
    //text: "El antagonista",
    image: character_503,
  },
  {
    title: "Muro",
    route: "/Muro",
    //text: "El antagonista",
    image: character_Muro,
  },
  {
    title: "Ganso",
    route: "/Ganso",
    //text: "El soporte",
    image: character_Ganso,
  },
]

let tales = [
  { title: "X035", file_name: "X035", route: "/X035", cover: X035 },
  { title: "El Elegido", file_name: "the-chosen-one", route: "/the-chosen-one", cover: ChosenOne },
  { title: "El último marciano", file_name: "the-last-martian", route: "/the-last-martian", cover: lastMartian },
  { title: "La isla", file_name: "the-island", route: "/the-island", cover: TheIsland },
]

let chapters = [
  { title: "Términos y condiciones", file_name: "0-terms_and_conditions", route: "/0-terms_and_conditions", next: "/1-hello_world" },
  { title: "Hola mundo", file_name: "1-hello_world", route: "/1-hello_world", next: "/2-post_mortem" },
  { title: "Post mortem", file_name: "2-post_mortem", route: "/2-post_mortem", next: "/3-cognitive_dissonance" },
  { title: "Disonancia cognitiva", file_name: "3-cognitive_dissonance", route: "/3-cognitive_dissonance", next: "/4-histology" },
  { title: "Histología", file_name: "4-histology", route: "/4-histology", next: "/5-faraday_cage" },
  { title: "Jaula de Faraday", file_name: "5-faraday_cage", route: "/5-faraday_cage", next: "/6-madness_for_two" },
  { title: "Locura para dos", file_name: "6-madness_for_two", route: "/6-madness_for_two", next: "/7-gamblers" },
  { title: "Ludópatas", file_name: "7-gamblers", route: "/7-gamblers", next: "/8-ambivalence" },
  { title: "Ambivalencia", file_name: "8-ambivalence", route: "/8-ambivalence", next: "/" },
  
  { title: "El Elegido", file_name: "the-chosen-one", route: "/the-chosen-one", next: "/" },
]

export {
  gameCovers,
  mainPlays,
  mainCards,
  tales,
  chapters,
  games
} 
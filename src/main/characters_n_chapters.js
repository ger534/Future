import Test from '../assets/Test2.png'
import Aniristuv from '../assets/Aniristuv.png'
import OCT from '../assets/803.png'
import Irvus from '../assets/503.png'

//characters array
const mainCards = [
    {
        title: "Aniristuv", 
        //text: "El supervisor",
        image: Aniristuv,
    },
    {
        title: "503",
        //text: "El antagonista",
        image: Irvus,
    },
    {
        title: "803",
        //text: "El antagonista",
        image: OCT,
    },
    {
        title: "Letenci Alestopor", 
        //text: "El soporte",
        image: Test,
    },
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
  ]

  export{
    mainCards,
    chapters
  } 
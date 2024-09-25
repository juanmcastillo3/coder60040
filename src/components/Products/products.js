import ham1 from '../../assets/ham1.png';
import ham2 from '../../assets/ham2.png';
import ham3 from '../../assets/ham3.png';
import ham4 from '../../assets/ham4.png';
import ham5 from '../../assets/ham5.png';
import ham6 from '../../assets/ham6.png';
import ham7 from '../../assets/ham7.png';
import ham8 from '../../assets/ham8.png';
import ham9 from '../../assets/ham9.png';
import ham10 from '../../assets/ham10.png';
import ham11 from '../../assets/ham11.png';
import ham12 from '../../assets/ham12.png';
import ham13 from '../../assets/ham13.png';
import ham14 from '../../assets/ham14.png';
import ham15 from '../../assets/ham15.png';
import ham16 from '../../assets/ham16.png';
import ham17 from '../../assets/ham17.png';
import ensalada1 from '../../assets/ensalada1.png';
import ensalada2 from '../../assets/ensalada2.png';
import snack1 from '../../assets/snak1.png';
import snack2 from '../../assets/snak2.png';
import snack3 from '../../assets/snak3.png';
import snack4 from '../../assets/snak4.png';
import snack5 from '../../assets/snak5.png';



const products = [
  {
    id: 1,
    name: "Mega Bacon Dev",
    category: "Hamburguesas",
    description: "Doble hamburguesa, doble cheddar, doble panceta, cebolla caramelizada y ketchup",
    price: "$ 1200",
    image: ham1
  },
  {
    id: 2,
    name: "Java Hamburguer",
    category: "Hamburguesas",
    description: "Queso pategrás, tomates frescos, escabeche de jalapeño y guacamole",
    price: "$ 1150",
    image: ham2
  },
  {
    id: 3,
    name: "Jabarscript Hamburguer",
    category: "Hamburguesas",
    description: "Queso danbo, huevo a la plancha, jamón cocido, cebolla a la plancha y mayonesa de oliva",
    price: "$ 1300",
    image: ham3
  },
  {
    id: 4,
    name: "Syntax Error Hamburguer",
    category: "Hamburguesas",
    description: "Queso reggianito, batata frita, sarza (cebolla, limón, jalapeño, cilantro) y salsa Huancaína",
    price: "$ 1250",
    image: ham4
  },
  {
    id: 5,
    name: "C++ Hamburguer",
    category: "Hamburguesas",
    description: "Queso ahumado, guacamole, aros de cebolla, rúcula, lechuga capuchina y mostaza dulce",
    price: "$ 1280",
    image: ham5
  },
  {
    id: 6,
    name: "Algorithms Dev",
    category: "Hamburguesas",
    description: "Queso azul, cebolla caramelizada, rúcula y mayonesa de berenjena",
    price: "$ 1350",
    image: ham6
  },
  {
    id: 7,
    name: "StackOverFlow Hamburguer",
    category: "Hamburguesas",
    description: "Doble hamburguesa, doble cheddar, pepinos en pickle, cebolla, lechuga capuchina y salsa Gran Dev",
    price: "$ 1320",
    image: ham7
  },
  {
    id: 8,
    name: "Visual Hamburguer Code",
    category: "Hamburguesas",
    description: "Queso danbo, tomate, lechuga capuchina, pepinos en pickle, cebolla blanca y mostaneza",
    price: "$ 1240",
    image: ham8
  },
  {
    id: 9,
    name: "Intellij Hamburguer",
    category: "Hamburguesas",
    description: "Queso cheddar, huevo a la plancha, panceta, fideos moñito con cheddar y salsa barbacoa",
    price: "$ 1360",
    image: ham9
  },
  {
    id: 10,
    name: "Sublime Hamburguer",
    category: "Hamburguesas",
    description: "Queso mozzarella, tomates asados, salchicha parrillera y pesto de albahaca",
    price: "$ 1400",
    image: ham10
  },
  {
    id: 11,
    name: "Slack",
    category: "Hamburguesas",
    description: "Queso cheddar, panceta ahumada, pepinos en pickle y ketchup Dev",
    price: "$ 1150",
    image: ham11
  },
  {
    id: 12,
    name: "Bootstrap Hamburguer",
    category: "Hamburguesas",
    description: "Queso ahumado, rúcula, menta, pickle de hongos de pino y mayonesa de merken",
    price: "$ 1260",
    image: ham12
  },
  {
    id: 13,
    name: "Wordpress Hamburguer",
    category: "Hamburguesas",
    description: "Queso parmesano, ajos confitados, rúcula, mollejas a la plancha y mayonesa de lima y cilantro",
    price: "$ 1380",
    image: ham13
  },
  {
    id: 14,
    name: "GitHub Hamburguer",
    category: "Hamburguesas",
    description: "Tomates secos, cebolla frita, rúcula, mozzarella y alioli",
    price: "$ 1300",
    image: ham14
  },
  {
    id: 15,
    name: "Notepad Hamburguer ++",
    category: "Hamburguesas",
    description: "Sánguche de pechuga de pollo frita, panceta ahumada, lechuga capuchina y tártara Dev",
    price: "$ 1290",
    image: ham15
  },
  {
    id: 16,
    name: "PHamburguerP",
    category: "Hamburguesas",
    description: "Queso provoleta con chimichurri, morcilla, morrón a la plancha, cebolla roja y ketchup ahumado",
    price: "$ 1250",
    image: ham16
  },
  {
    id: 17,
    name: "Script Hamburguer",
    category: "Hamburguesas",
    description: "Queso pategrás, tomates marinados, lechuga capuchina y alioli",
    price: "$ 1210",
    image: ham17
  },
  {
    id: 18,
    name: "Ensalada SQL",
    category: "Ensaladas",
    description: "Lechuga capuchina, panceta ahumada, croutones, queso parmesano, pechuga de pollo y nuestro aderezo Caesar",
    price: "$ 950",
    image: ensalada1
  },
  {
    id: 19,
    name: "Ensalada MongoDB",
    category: "Ensaladas",
    description: "Mix de verdes, queso ahumado, queso cheddar, huevo duro, guacamole, tomates asados y salsa de morrón",
    price: "$ 900",
    image: ensalada2
  },
  {
    id: 20,
    name: "Strings",
    category: "Acompañamientos",
    description: "Aros de cebolla acompañados con Barbacoa Blanca",
    price: "$ 650",
    image: snack1
  },
  {
    id: 21,
    name: "ABM de pollo",
    category: "Acompañamientos",
    description: "Dados de pollo supremas marinadas en 11 especias y mayo vieja escuela",
    price: "$ 700",
    image: snack2
  },
  {
    id: 22,
    name: "Data Structure con cheddar",
    category: "Acompañamientos",
    description: "Papas fritas con tempero, queso cheddar, panceta y cebolla de verdeo",
    price: "$ 600",
    image: snack3
  },
  {
    id: 23,
    name: "Trellos de espinaca",
    category: "Acompañamientos",
    description: "Espinaca, queso reggianito y alioli",
    price: "$ 700",
    image: snack4
  },
  {
    id: 24,
    name: "React Dev",
    category: "Acompañamientos",
    description: "Papas fritas con crema de quesos, salchicha parrillera y cebolla de verdeo",
    price: "$ 800",
    image: snack5
  },
];

export default products;

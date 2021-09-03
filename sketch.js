const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
// aqui estoy declaando las variables las cuales tienen una matriz pero no van a tener nada.
var par = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

var world, engine;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  // a qui estoy crendo la cantidad de objetos asta que sus posiciones sean mayor al ancho de mi pantalla 
  for (var k = 0; k <=800; k = k + 80) {
    // y aqui estoy haciendo la llamada a divisions por cada vez que se crea una nueva
    // division o sea se siguen creando hasta que el ciclo for sea falso 
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    
  }


  // lo que se explico en el for de las divisiones aplica tanto con los plinkos como con las particulas 


  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //crea los objetos partícula

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 

  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones

// aqui se esta declarando un for en el cual se crea una variable y se dice que mientra que 
//la varible sea menor a la largura que ocupan las divisiones  k se seguira sumando 
  for (var k = 0; k < divisions.length; k++) {
    // y aqui se esta haciendo que aparezcan todas y cada una de las divisiones 
    divisions[k].display();
  }
  if (frameCount % 60 === 0)
  {

    // como lo de width esta entre parentesis represneta un solo argumento el cual 
    //crea el paramatre de x con width /2 -200 y width/2+200
    par.push(new particle (random(width/2-200, width/2+200), 10, 10));
  }

  //  lo que se explico en lo de las divisiones del draw aplica tanto con los plinkos como con las particulas.

  //muestra las partículas 
  for (var p = 0; p < par.length; p++) {

    par[p].display();
  }

}

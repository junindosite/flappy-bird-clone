
//Importando o phasher
import Phaser from "phaser";

//criando a variavel de configuração do jogo
const config = {
  //webGL(biblioteca graficos web) JS api para renderizar jogos 2d e 3d
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    //arcade biblioteca que gerencia simulações físicas
    default: 'arcade'
  },
  scene: {
    preCarregamento,
    create,
  }
}

//carregando assets(imagens, muisca e animações)
function preCarregamento (){
  //cena
  debugger
}

// Função para configurar e criar os objetos do jogo
function create (){
  debugger
}

//colocando config no jogo
new Phaser.Game(config);
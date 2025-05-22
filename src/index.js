
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
    preload,
    create,
  }
}

//carregando assets(imagens, muisca e animações)
function preload (){
  //cena
  this.load.image('sky', 'assets/sky.png')
}

// Função para configurar e criar os objetos do jogo
function create (){
  //x = 400
  //y = 300
  //key da imagem
  this.add.image (config.width / 2, config.height /2, 'sky')
}

//colocando config no jogo
new Phaser.Game(config);
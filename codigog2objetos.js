//exemplo utilizando as bibliotecas Mappa e Geolocation
//https://github.com/cvalenzuela/Mappa
//https://github.com/bmoren/p5.geolocation

//exemplo utilizando a biblioteca p5.speech
//https://idmnyu.github.io/p5.js-speech/

var meuMapa;


var mappa = new Mappa('Leaflet');

var options = {
  lat: 0,
  lng: 0,
  zoom: 15,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
  locationData =  getCurrentPosition();
}

function setup(){
  options.lat = locationData.latitude;
  options.lng = locationData.longitude;
  createCanvas(640,640);
  meuMapa = mappa.tileMap(options); 
  meuMapa.overlay(canvas);
  meuMapa.onChange(desenhaMapa);
}

function desenhaMapa() {
  clear();
  var pos = meuMapa.latLngToPixel(locationData.latitude, locationData.longitude);

  fill('black');
  textSize(15);
  textStyle(BOLD);
  text("quer saber aonde você está? dá um clique!", 160, 80);
  fill(70,130,0,180);
  

}

var minhaVoz = new p5.Speech();

function mousePressed() {
  ellipse(mouseX, mouseY, 40, 40);
  minhaVoz.listVoices();
  minhaVoz.setVoice('Google português do Brasil');
  minhaVoz.setRate(1,5);
  minhaVoz.setPitch(1);
  minhaVoz.speak('não importa. você está exatamente aonde você deveria estar!');
}

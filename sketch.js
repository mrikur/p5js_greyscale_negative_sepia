function preload(){
  foto = loadImage("rizkykur.jpg");
  huruf = loadFont("AngelRhapsodyRegular.ttf");
  fotoOlah= createImage(360,360);
  fotoOlah1= createImage(360,360);
  fotoOlah2= createImage(360,360);
}
function setup() {
  createCanvas(720, 720);
  textFont(huruf);
  warnaAsli = color(0);
  warnaOlah = color(0);
  merahOlah = color(0);
  hijauOlah = color(0);
  biruOlah = color(0);
  noLoop();
}

function draw() {
  background(255);
  foto.resize(360,360);
  fotoOlah.loadPixels();
  fotoOlah1.loadPixels();
  fotoOlah2.loadPixels();
  for(let i=0; i<foto.width;i++){
    for(let j=0; j<foto.height;j++){
      warnaAsli= foto.get(i, j);
      merahOlah= red(warnaAsli);
      hijauOlah= green(warnaAsli);
      biruOlah= blue(warnaAsli);
      warnaOlah= color(0.21*merahOlah + 0,72*hijauOlah +  0.07* biruOlah);
      fotoOlah.set(i, j, warnaOlah);
      merahOlah1= (0.393*red(warnaAsli))+(0.769*green(warnaAsli))+(0.189*blue(warnaAsli));
      hijauOlah1= (0.349*red(warnaAsli))+(0.686*green(warnaAsli))+(0.168*blue(warnaAsli));
      biruOlah1= (0.272*red(warnaAsli))+(0.534*green(warnaAsli))+(0.131*blue(warnaAsli));
      warnaOlah1= color(merahOlah1,hijauOlah1,biruOlah1);
      fotoOlah1.set(i,j, warnaOlah1);
      warnaOlah2= color(255-merahOlah,255-hijauOlah,255-biruOlah);
      fotoOlah2.set(i,j, warnaOlah2);
    }
  }
    fotoOlah.updatePixels();
    fotoOlah1.updatePixels();
    fotoOlah2.updatePixels();
    stroke("#FF0000");
    textSize(50);
    image(foto, 0, 0);
    text("ASLI", 36,60);
    image(fotoOlah, 360, 0);
    text("GRAYSCALE", 397,60);
    image(fotoOlah1, 0, 360);
    text("SEPIA", 60,397);
    image(fotoOlah2, 360, 360);
    text("NEGATIVE", 397,397);
}
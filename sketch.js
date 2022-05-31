// Title: The Last Envoy

// Theme: Takeshi Kovac

// Inspiration: Takeshi Kovac is the main character in a show called Altered carbon. This piece of work is molded around, that is why the image is chosen as the main background
// The enovy image is chosen and inverted in particularly because the image shows the contrast of who Takeshi Kovac believes he is within the smoke not his outer skin
// The dragon is represented as a symbol of his true clan, enovys, this is why it is slightly transparent because its always in his subconscious of who he is.
// The unicorn is a statement piece which is only noticed by the keen watcher, he holds this unicorn bag through the show whilst being a solider throughout, it shows vulnerability. Hence why I've made it run across the image. 



/// ----- 1. Put some images here! -------------
/// You need to download them from somewhere, try and find
/// a source that has proper usage rights (Creative Commons 
/// non-commercial, or public domain)

/// ---- MAKE SURE TO PUT THE URL YOU FOUND THEM AT HERE, 
/// ---- OR LET US KNOW THE SOURCE ------------------------

// Picture of Takeshi from
// https://www.pinterest.co.uk/pin/484629609911607971/  
let takeshi;

// Picture of envoy from
// https://www.pinterest.co.uk/pin/700169073327075184/
let envoy;

// Picture of dragon
// https://www.cleanpng.com/png-takeshi-kovacs-ouroboros-dragon-tattoo-art-avatan-6976881/download-png.html
let dragon;

// Picture of unicorn from
//https://www.pngwing.com/en/free-png-ndhjo/download
let unicorn;



/// --- PRELOAD ------------------------
/// This is useful to load an image  or do a task that is important to run
/// *before* the sketch is loaded. preload() runs once *before* setup

function preload() {  
    
//load images from the assets folder
  takeshi = loadImage('assets/takeshi.jpg'); // takeshi

  envoy = loadImage('assets/envoy.png'); // envoy

  dragon = loadImage('assets/dragon.png');  // dragon
    
  unicorn = loadImage('assets/unicorn.png');  // unicorn  

  pixelDensity(1); // if you are on a very large screen, this can
  // help your images scale to the proper size when drawn.
    
    frameRate(3); // this control how fast the glitch moves.
}


///
/// Setup -------------------------
///
function setup() {  

  // tell us something out out images
  console.info('Image dimensions');
  console.info('----------------');
  
  console.info('takeshi:' + takeshi.width + '/' + takeshi.height);

  console.info('envoy:' + envoy.width + '/' + envoy.height);

  console.info('dragon:' + dragon.width + '/' + dragon.height);
    
  console.info('unicorn:' + unicorn.width + '/' + unicorn.height);

  createCanvas(1024,600);
    
    // resizing of the image named dragon
    dragon.resize(350,350);
    // resizing of the image named envoy
    envoy.resize(400,400);
    // resizing of the image named unicorn
    unicorn.resize(80,80);
    

}


function draw()
{
    
    imageMode(CORNER); // this function interprets the second and third parameters of image() as the upper-left corner of the image.
    image(takeshi, 0, 0, 1024,600);
        
    tint(255,100); // this makes the image slightly transparent
    dragon.filter(THRESHOLD); // this filter makes the image black and white.
    imageMode(CORNER); 
    image(dragon,700,150);
    
    tint(255,255); // removes the transparency.
    drawRandomImageSection(envoy); // calling the function to draw the glitch
    
    // if statement to alternate the glitch image between normal and INVERT.
    if(floor(1,10) == 1)
        {
            envoy.filter(INVERT);
        }
    
    // loop for the unicorn going across the image
    for (let i = 0; i < 30;i++)
    {
        //positioning of the unicorn
        let x = random(0,930);
        let y = 500;
        image(unicorn,x,y);
        //makes the unicorn transparent.
        tint(255,230);
    }

}

function drawRandomImageSection(img) {


// coordinates of the source image.
  let sourceX = 0; //???
  let sourceY = 0; //???
  let sourceWidth = 1280; //???
  let sourceHeight = 720; //???

// coordinates of the desired destination for the image.    
  let destX = random(245,275); //???
  let destY = random(295,315); //???
  let destWidth = 185; //???
  let destHeight = 135; //???



// Displays the random part of the image on the screen
  image(img,
    destX, destY,
    destWidth, destHeight,
    sourceX, sourceY,
    sourceWidth, sourceHeight);
}
    
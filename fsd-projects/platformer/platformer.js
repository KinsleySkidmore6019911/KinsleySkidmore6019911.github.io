$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(200, 650, 150, 15);
createPlatform(500,550,50,15);
createPlatform(200,450, 150,15);
createPlatform(700,650,150,15);
createPlatform(700,300,30,15);
createPlatform(100,350,150,15);
createPlatform(400,250,30,15);
createPlatform(500,400,100,15);
createPlatform(950,200,100,15);
createPlatform(1200,500,100,15);
createPlatform(1250,150,50,15);
createPlatform(1000,400,100,15);


    // TODO 3 - Create Collectables
createCollectable("steve",200,450);
createCollectable("max",800,200);
createCollectable("grace",1200,300);
createCollectable("kennedi",700,500);
createCollectable("diamond",500,100);

    
    // TODO 4 - Create Cannons
createCannon("right",600,4000);
createCannon("left",100,2500);
createCannon("right"300,2000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

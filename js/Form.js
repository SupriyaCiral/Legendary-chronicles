class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Start');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.title2 = createElement('h3');
  
    this.image = createImg('alauddin.jpg');
    this.image1 = createImg('padmavati1.jpg');
    this.image2 = createImg('backgroung.jpeg');
    this.name = null;
    this.story = createElement('h4')
    this.story2 = createElement('h4')
    this.story3 = createElement('h4')
    this.button1 = createButton('Play');
  // this.message = createElement('h1');

    //Questions page
    this.title3 = createElement('h1');
    this.title4 = createElement('h3');
    this.input1 = createInput("Enter Answer");
   this.input2 = createInput("Enter Answer");
    this.input3 = createInput("Enter Answer");
    this.input4 = createInput("Enter Answer");
    this.a1 = createElement('h3')
    this.a2 = createElement('h3')
    this.a3 = createElement('h3')
    this.a4 = createElement('h3')
    this.a5 = createElement('h3')
    this.buttonsubmit = createButton('Submit');
    this.clue1=null;
    this.clue2=null;
    this.clue3=null;
    this.clue4=null;
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Legendary Chronicles");
    this.title.position(displayWidth/2 - 130, 50);
    this.title2.html("The Best One Rules");
    this.title2.position(displayWidth/2 - 50, 100);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
   
    this.image.position(10, 100);
    this.image.size (400, 400);

    this.image1.position(width-400, 100);
    this.image1.size (400, 400);

    this.image2.position(0, height-230);
    this.image2.size (width,230);

// hide in title page
    this.input1.hide();
    this.input2.hide();
     this.input3.hide();
     this.input4.hide();
     this.a1.hide();
     this.a2.hide();
     this.a3.hide();
     this.a4.hide();
     this.a5.hide();
     this.buttonsubmit.hide(); 
     this.button1.hide();

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      //this.message.hide();
      this.name = this.input.value();
     // playerCount+=1;
      //player.index = playerCount;
     // player.update();
     // player.updateCount(playerCount);
      this.greeting.html("Hello " + this.name)
      this.greeting.position(displayWidth/2 - 40 ,200);

       this.story.html("Once there was two rulers who were fighting for Queen Padmavati")
       this.story.position(450, 250);
        this.story2.html("The best ruler who answers the question of Padmavati's father")
        this.story3.html("will win her and the kingdom and take her to home");
        this.story3.position(450, 350);
        this.story2.position(450, 300);
        this.button1.show();
        this.button1.position(600, 400);
    });
    this.button1.mousePressed(()=>{
      this.greeting.hide();
    this.story.hide();
    this.story2.hide();
    this.story3.hide();
    this.image.hide();
    this.image1.hide();
    this.image2.hide();
    this.button1.hide();
    //this.message.hide();



    //show
    this.input1.show();
    this.input2.show();
     this.input3.show();
     this.input4.show();
     this.a1.show();
     this.a2.show();
     this.a3.show();
     this.a4.show();
     this.a5.show();
     this.buttonsubmit.show(); 
// Quiz part
    this.title3.html("Give the right answer to rule the kingdom.");
    this.title3.position(displayWidth/2 - 250, 120);
    this.a1.html("What are the four pillars of king to rule a kindom?")
         this.a1.position(450, 200);
          this.a2.html("Clue1: Neccesity to survive.")
          this.a3.html("Clue2: To wear and protect yourself.");
          this.a4.html("Clue3: You can but anything using this.")
          this.a5.html("Clue4: 3/4th of the world is covered with it.");
          this.a3.position(350, 350);
          this.a2.position(350, 300);
          this.a4.position(350, 400);
          this.a5.position(350, 450);
           
          this.input1.position(800, 320);
          this.input2.position(800, 370);
          this.input3.position(800, 420);
          this.input4.position(800, 470);

          this.buttonsubmit.position(600, 600);


    });

    this.buttonsubmit.mousePressed(()=>{
      this.a1.hide();
    this.a2.hide();
    this.a3.hide();
    this.a4.hide();
    this.a5.hide();
    this.button1.hide();
    this.clue1 = this.input1.value();
    this.clue2 = this.input2.value();
    this.clue3 = this.input3.value();
    this.clue4 = this.input4.value();

    if(this.clue1 === "food"){
            score = score+1;
    }
    if(this.clue2 === "clothes"){
      score = score+1;
    }
    if(this.clue3 === "money"){
      score = score+1;
}
    if(this.clue4 === "water"){
           score = score+1;
     }
     if(score === 4){
       
        this.title3.html("Winner of the day, Congratulations");
        this.title3.position(displayWidth/2 - 230, 320);
        this.image.show();
        this.image1.show();
     }
     else 
     {
      this.title3.html("You lose, better luck next time");
      this.title3.position(displayWidth/2 - 200, 320);
     }
    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
   
    this.buttonsubmit.hide(); 
    console.log("score" + score);
    });

  }
}

class Form{
    constructor(){
    }

    display(){
    var title=createElement('h1');
    title.html("Car Racing Game");
    title.position(130,0);

    var input=createInput("Name");
    var button=createButton("Play");
    var greetings=createElement('h2');
    input.position(130,160);
    button.position(250,200);

    button.mousePressed(function(){
    input.hide();
    button.hide();

    var Name=input.value();
    playerCount=playerCount+1;
    player.update(name);
    player.updateCount(playerCount);
    greetings.html("Hi "+Name);
    greetings.position(130,160);
    })
    }









}
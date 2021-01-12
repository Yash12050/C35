class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("carracinggame");
        title.position(200,200);
        var input = createInput("name");
        var button = createButton('enter');
        var greeting = createElement('h3');
        input.position(500,500);
        button.position(400,400);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello"+name);
            greeting.position(100,100);
        })
    }
}
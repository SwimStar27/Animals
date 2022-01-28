var canvas = new fabric.Canvas('myCanvas');

dory_x = 10;
dory_y = 10;

fish_width = 60;
fish_height = 60;

var dory_object= "";
var fish_object= "";

function doryupdate(){
    fabric.Image.fromURL("dorynoback.png",function(Img){
        dory_object=Img;
        dory_object.scaleToWidth(50);
        dory_object.scaleToHeight(50);
        dory_object.set({
            top:dory_y,left:dory_x

        });
        canvas.add(dory_object);
    });
    }
    function new_image(get_image){
        fabric.Image.fromURL(get_image,function(Img){
            fish_object=Img;
            fish_object.scaleToWidth(fish_width);
            fish_object.scaleToHeight(fish_height);
            fish_object.set({
                top:dory_y,left:dory_x
            });
            canvas.add(fish_object);
        });
    }
    window.addEventListener("keydown",downkey);
    function downkey(e){
     keyPressed=e.keyCode;
     console.log(keyPressed);
     if(e.shiftKey==true && keyPressed=='87'){
         fish_width=fish_width+10;
         fish_height=fish_height+10;
         document.getElementById("cw").innerHTML=fish_width;
         document.getElementById("ch").innerHTML=fish_height;
     }  
      if(e.shiftKey==true && keyPressed=='68'){
        fish_width=fish_width-10;
        fish_height=fish_height-10;
        document.getElementById("cw").innerHTML=fish_width;
        document.getElementById("ch").innerHTML=fish_height;
    } 
     if(keyPressed=='37'){
         left();
         console.log("left");
     }
     if(keyPressed=='38'){
        up();
        console.log("up");
     }
     if(keyPressed=='39'){
         right();
         console.log("right");
     }
     if(keyPressed=='40'){
         down();
         console.log("down");
     }
     if(keyPressed=='78'){
         new_image('nemo.gif');
         console.log("n");
     }
     if(keyPressed=='66'){
         new_image('bubbles.png');
         console.log("b");
     }
     if(keyPressed=='80'){
         new_image('peach.png');
         console.log("p");
     }
     if(keyPressed=='83'){
         new_image('Squirt.png');
         console.log("s");
     }
    }
    function up(){
        if(dory_y>=0){
            dory_y=dory_y-fish_height;
            canvas.remove(dory_object);
            doryupdate();
        }
    }
    function down(){
if(dory_y<=400){
    dory_y=dory_y+fish_height;
    canvas.remove(dory_object);
    doryupdate();
}
    }
    function left(){
        if(dory_x>0){
            dory_x=dory_x-fish_width;
            canvas.remove(dory_object);
            doryupdate();
        }
    }
    function right(){
        if(dory_x<=420){
            dory_x=dory_x+fish_width;
            canvas.remove(dory_object);
            doryupdate();
        }
    }
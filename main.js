var canvas= new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_object);
    });
}
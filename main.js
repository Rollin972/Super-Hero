var canvas = new fabric.Canvas("myCanvas")

Player_x = 10;
Player_y = 10;

block_width = 30;
block_height = 30;

player_img = "";
block_img = "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(img)
    {
       player_img = img;
       player_img.scaleToWidth(150);
       player_img.scaleToHeight(140);
       player_img.set({

          top: Player_y,
          left: Player_x
       });
       canvas.add(player_img);
    });

}

function block_update(get_img)
{
    fabric.Image.fromURL(get_img,function(img)
    {
       block_img = img;
       block_img.scaleToWidth(block_width);
       block_img.scaleToHeight(block_height);
       block_img.set({

          top: Player_y,
          left: Player_x
       });
       canvas.add(block_img);
    });

}


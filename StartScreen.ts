
function StartScreen() {
    let Cursor: Sprite = null;
    let Play: Sprite = null;


    scene.setBackgroundImage(startScreenIMG);
    Play = sprites.create(playBtnIMG, SpriteKind.NPC);
    Cursor = sprites.create(cursorIMG, SpriteKind.NPC);
    Cursor.setPosition(75, 108);
    controller.moveSprite(Cursor);



    sprites.onOverlap(SpriteKind.NPC, SpriteKind.NPC, function (sprite, otherSprite) {
        if (sprite == Play && (otherSprite == Cursor && controller.A.isPressed())) {
            ScreenFactory("Level1")
        }
    })

}


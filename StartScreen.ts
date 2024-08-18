
function StartScreen() {
    let Cursor: Sprite = null;
    let Play: Sprite = null;
    let Continue: Sprite = null;


    scene.setBackgroundImage(startScreenIMG);
    Play = sprites.create(playBtnIMG, SpriteKind.NPC);
    // blockSettings.writeString(CURRENT_LEVEL_LOCATOR, 'saddasdasdasd')
    console.log('StartScreen')
    console.log(blockSettings.readString(CURRENT_LEVEL_LOCATOR))
    if (blockSettings.exists(CURRENT_LEVEL_LOCATOR) === true) {
        Continue = sprites.create(assets.image`Continuebutton`, SpriteKind.NPC);
        Continue.setPosition(75, 90);
    }

    Cursor = sprites.create(cursorIMG, SpriteKind.NPC);
    Cursor.setPosition(75, 108);
    controller.moveSprite(Cursor);



    sprites.onOverlap(SpriteKind.NPC, SpriteKind.NPC, function (sprite, otherSprite) {
        if (sprite == Play && (otherSprite == Cursor && controller.A.isPressed())) {
            blockSettings.remove(CURRENT_LEVEL_LOCATOR)
            ScreenFactory("Level1")
        }
        
        if (sprite == Continue && (otherSprite == Cursor && controller.A.isPressed())) {
            ScreenFactory(blockSettings.readString(CURRENT_LEVEL_LOCATOR))
                                                                               
        }
    })


}


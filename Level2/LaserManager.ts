let Laser2: Sprite = null
let Laser1: Sprite = null
let RedBtn: Sprite = null

function Laser() {
    RedBtn = sprites.create(redbuttonUp, SpriteKind.colouredButton)
    RedBtn.x = 72
    RedBtn.y = 315

    sprites.onOverlap(SpriteKind.Player, SpriteKind.colouredButton, function (sprite, otherSprite) {
        characterAnimations.runFrames(
            RedBtn,
            [ img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f 2 2 2 1 1 1 1 1 f . . . 
    f f f 2 2 2 2 2 3 3 3 1 1 f f f 
    f b f f f f f f f f f f f f 2 f 
    f c b b b b b 2 2 2 2 2 2 2 2 f 
    f c c c c c b b b b 2 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f 2 2 2 1 1 1 1 1 f . . . 
    . . f 2 2 2 2 2 3 3 3 1 1 f . . 
    . f 2 2 2 2 2 2 2 2 2 3 1 2 f . 
    f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 
    f b f f f f f f f f f f f f 2 f 
    f c b b b b b 2 2 2 2 2 2 2 2 f 
    f c c c c c b b b b 2 2 2 2 2 f 
    f f f f f f f f f f f f f f f f 
    `],
            400,
            characterAnimations.rule(Predicate.NotMoving)
        )

        console.log("redbutton")
        Laser1.x = -100000
        Laser1.y = -100000
        Laser2.x = 248
        Laser2.y = 32
        
    })
    
    Laser1 = sprites.create(laserRedIMG, SpriteKind.Annoying)
    Laser1.x = 296
    Laser1.y = 180
    Laser2 = sprites.create(laserYellowIMG, SpriteKind.AnnoyingMuch)
    Laser2.x = 248
    Laser2.y = 32
    
    // red button
    scene.onOverlapTile(SpriteKind.Player, myTiles.tile29, function (sprite, location) {
        // music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
        // Laser1 = sprites.create(laserRedIMG, SpriteKind.Annoying)
        // Laser1.x = 296
        // Laser1.y = 180
       
    })
    
    // yellow button
    scene.onOverlapTile(SpriteKind.Player, myTiles.tile27, function (sprite, location) {
        // music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
        Laser1.x = 296
        Laser1.y = 180
        Laser2.x = -100000
        Laser2.y = -100000
        console.log("yellowbutton")

    })
    
}
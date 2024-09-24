let Laser2: Sprite = null
let Laser1: Sprite = null
let RedBtn: Sprite = null

function Laser() {
    RedBtn = sprites.create(redbuttonUp, SpriteKind.colouredButton)
    RedBtn.x = 0
    RedBtn.y = 300


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
        console.log("redbutton")
        Laser1.x = -100000
        Laser1.y = -100000
        Laser2.x = 248
        Laser2.y = 32
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
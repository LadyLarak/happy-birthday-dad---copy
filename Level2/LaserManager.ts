let Laser2: Sprite = null
let Laser1: Sprite = null
let RedBtn: StatefulButton = null
let RedBtn2: StatefulButton = null

function Laser() {
    RedBtn = createBtn(redBtnUp, 'up')
    RedBtn.sprite.x = 72
    RedBtn.sprite.y = 315
    RedBtn2 = createBtn(redBtnUp, 'up')
    RedBtn2.sprite.x = 328
    RedBtn2.sprite.y = 105

    sprites.onOverlap(SpriteKind.Player, SpriteKind.redColouredButton, function (sprite, otherSprite) {

        console.log("redbutton")
        // btn is up
        if (RedBtn.state == 'up') {
            RedBtn.state = "down"
            RedBtn.sprite.setImage(redBtnDown)
        }

        // btn is down
        else {
            RedBtn.state = "up"
            RedBtn.sprite.setImage(redBtnUp)
        }
        Laser1.x = -100000
        Laser1.y = -100000
        Laser2.x = 248
        Laser2.y = 32
        pause(1500)

        if (RedBtn2.state == "up") {
            RedBtn2.state = "down"
            RedBtn2.sprite.setImage(redBtnDown)
        }

        else {
            RedBtn2.state = "up"
            RedBtn2.sprite.setImage(redBtnUp)
            Laser1.x = -100000
            Laser1.y = -100000
            Laser2.x = 248
            Laser2.y = 32
            pause(1500)
        }
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    ScreenFactory("Level3")
})

function Level2Screen() {
    scene.setBackgroundImage(level2ScreenIMG)
    tiles.setCurrentTilemap(tilemap`Level3`)
    CreateHero()
    Hero.x = 8
    Hero.y = 310
    sprites.destroy(mySprite2, effects.none, 1)
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC, effects.none, 1)
    CreatShark1()
    TheFish()
    Laser()


    function CreatShark1() {
        Shark1 = sprites.create(img`
        ....................................
        .................ccff...............
        ................cdbcf...............
        .........ffffffccbbf................
        ......fffbbbbbbbbcccff..............
        .....fbbbbbbbbbbbbbbbcfff......ccccc
        .....bcbbbbbffbcbcbbbbcccff...cdbbbc
        .....bbb1111ffbbcbcbbbcccccffcddbbc.
        .....fb11111111bcbcbbbcccccccbdbbf..
        ......fccc33c11bbbbbbcccccccccbbcf..
        .......fc131cc11bbbbccccccccffbccf..
        ........f33c1111bbbcccccbdbc..fbbcf.
        .........ff1111cbbbfdddddcc....fbbf.
        ...........ccc1fbdbbfddcc.......fbbf
        ..............ccfbdbbfc..........fff
        .................fffff..............
        `, SpriteKind.Enemy)
        Shark1.setPosition(50, 25)
        Shark1.follow(Hero, 25)
        characterAnimations.loopFrames(
            Shark1,
            [img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        ..............fccbbcf............ccc
        ........ffffffccccccff.........ccbbc
        ......ffbbbbbbbbbbbbbcfff.....cdbbc.
        ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
        ....fbbb1111ff1bcbcbbbcccccccbbbcf..
        .....fb11111111bbbbbbcccccccccbccf..
        ......fccc33cc11bbbbccccccccfffbbcf.
        .......fc131c111bbbcccccbdbc...fbbf.
        ........f33c111cbbbfdddddcc.....fbbf
        .........ff1111fbdbbfddcc........fff
        ...........cccccfbdbbfc.............
        .................fffff..............
        `, img`
        .................ccfff..............
        ................cddbbf..............
        ...............cddbbf...............
        .........ffffffccbbcf...............
        ......fffbbbbbbbbcccff..............
        .....fbbbbbbbbbbbbbbbcfff......ccccc
        .....bcbbbbbffbcbcbbbbcccff...cdbbbc
        .....bbb1111ffbbcbcbbbcccccffcddbbc.
        .....fb11111111bcbcbbbcccccccbdbbf..
        ......fccc33c11bbbbbbcccccccccbbcf..
        .......fc131cc11bbbbccccccccffbccf..
        ........f33c1111bbbcccccbdbc..fbbcf.
        .........ff1111cbbbfdddddcc....fbbf.
        ...........ccc1fbdbbfddcc.......fbbf
        ..............ccfbdbbfc..........fff
        .................fffff..............
        `, img`
        ..................ccfff.............
        .................cddbbf.............
        ........fffffffffddbbf..............
        .......fbbbbbbbbbfcbcf..............
        .......fbbc111bffbbccffff...........
        .......fb111111ffbbbbbcccff....ccccc
        ........f1cc3311bbcbcbbccccf..cdbbbc
        ........fcc131c1bbbcbcbcccccfcddbbc.
        .........f111111bbbcbcbccccccbdbbf..
        .........f1111111bbbbbccccccccbbcf..
        ..........f111111bbbbcccccccffbccf..
        ...........c1111cbbbcccccbdbc.fbbcf.
        ............cc11cbbbfddddddc...fbbf.
        ..............cffbdbbfdddcc.....fbbf
        .................fbdbbfcc........fff
        ..................fffff.............
        `, img`
        ....................ccfff...........
        ..........fffffffffcbbbbf...........
        .........fbbbbbbbbbfffbf............
        .........fbb111bffbbbbff............
        .........fb11111ffbbbbbcff..........
        .........f1cccc11bbcbcbcccf.........
        ..........fc1c1c1bbbcbcbcccf...ccccc
        ............c3331bbbcbcbccccfccddbbc
        ...........c333c1bbbbbbbcccccbddbcc.
        ...........c331c11bbbbbcccccccbbcc..
        ..........cc13c111bbbbccccccffbccf..
        ..........c111111cbbbcccccbbc.fccf..
        ...........cc1111cbbbfdddddc..fbbcf.
        .............cccffbdbbfdddc....fbbf.
        ..................fbdbbfcc......fbbf
        ...................fffff.........fff
        `, img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, img`
        ....................................
        ....................................
        ....................................
        ...............ccffff...............
        ..............cddbbbf...............
        .......ffffffcddbbbf................
        .....ffbbbbbbbbbbbbbcfff.......ccccc
        ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
        ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
        .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
        .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
        .ffbb1111fffbbcbbbbcccccccbcffbccf..
        ..ff111111111bbbbccccccbbbcc..fbbcf.
        ....ccccccc111bdbbbfddbccc.....ffbbf
        ........ccccccfbdbbbfcc..........fff
        ...............ffffff...............
        `],
            500,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            Shark1,
            [img`
        ..............fffcc.................
        ..............fbbddc................
        ...............fbbddc...............
        ccc............fcbbccf..............
        cbbcc.........ffccccccffffff........
        .cbbdc.....fffcbbbbbbbbbbbbbff......
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff....
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf....
        ..fcbbbcccccccbbbcbcb1ff1111bbbf....
        ..fccbcccccccccbbbbbb11111111bf.....
        .fcbbfffccccccccbbbb11cc33cccf......
        .fbbf...cbdbcccccbbb111c131cf.......
        fbbf.....ccdddddfbbbc111c33f........
        fff........ccddfbbdbf1111ff.........
        .............cfbbdbfccccc...........
        ..............fffff.................
        `, img`
        ..............fffcc.................
        ..............fbbddc................
        ...............fbbddc...............
        ...............fcbbccffffff.........
        ..............ffcccbbbbbbbbfff......
        ccccc......fffcbbbbbbbbbbbbbbbf.....
        cbbbdc...ffcccbbbbcbcbffbbbbbcb.....
        .cbbddcffcccccbbbcbcbbff1111bbb.....
        ..fbbdbcccccccbbbcbcb11111111bf.....
        ..fcbbcccccccccbbbbbb11c33cccf......
        ..fccbffccccccccbbbb11cc131cf.......
        .fcbbf..cbdbcccccbbb1111c33f........
        .fbbf....ccdddddfbbbc1111ff.........
        fbbf.......ccddfbbdbf1ccc...........
        fff..........cfbbdbfcc..............
        ..............fffff.................
        `, img`
        .............fffcc..................
        .............fbbddc.................
        ..............fbbddfffffffff........
        ..............fcbcfbbbbbbbbbf.......
        ...........ffffccbbffb111cbbf.......
        ccccc....ffcccbbbbbff111111bf.......
        cbbbdc..fccccbbcbcbb1133cc1f........
        .cbbddcfcccccbcbcbbb1c131ccf........
        ..fbbdbccccccbcbcbbb111111f.........
        ..fcbbccccccccbbbbb1111111f.........
        ..fccbffcccccccbbbb111111f..........
        .fcbbf.cbdbcccccbbbc1111c...........
        .fbbf...cddddddfbbbc11cc............
        fbbf.....ccdddfbbdbffc..............
        fff........ccfbbdbf.................
        .............fffff..................
        `, img`
        ...........fffcc....................
        ...........fbbbbcfffffffff..........
        ............fbfffbbbbbbbbbf.........
        ............ffbbbbffb111bbf.........
        ..........ffcbbbbbff11111bf.........
        .........fcccbcbcbb11cccc1f.........
        ccccc...fcccbcbcbbb1c1c1cf..........
        cbbddccfccccbcbcbbb1333c............
        .ccbddbcccccbbbbbbb1c333c...........
        ..ccbbcccccccbbbbb11c133c...........
        ..fccbffccccccbbbb111c31cc..........
        ..fccf.cbbcccccbbbc111111c..........
        .fcbbf..cdddddfbbbc1111cc...........
        .fbbf....cdddfbbdbffccc.............
        fbbf......ccfbbdbf..................
        fff.........fffff...................
        `, img`
        ..........fffcc...fffffff...........
        ..........fbbbbcffbbbbbbbf..........
        ...........fbffbbbbb111bbf..........
        ...........ffbbbbff11111bf..........
        .........ffcbbbbbff1cccc1f..........
        ........fcccbcbcbb1c1c1cff..........
        ccccc..fcccbcbcbbb1333ccf...........
        cbbddcfccccbcbcbbb1c333c............
        .ccbddcccccbbbbbbb1c333c............
        ..ccbbccccccbbbbb11c333c............
        ..fccbfccccccbbbb11c133cc...........
        ..fccfcbbcccccbbbc11c31cc...........
        .fcbbf.cdddddfbbbc111111c...........
        .fbbf...cdddfbbdbf1111cc............
        fbbf.....ccfbbdbfffccc..............
        fff........fffff....................
        `, img`
        ....................................
        ....................................
        ....................................
        ...............ffffcc...............
        ...............fbbbddc..............
        ................fbbbddcffffff.......
        ccccc.......fffcbbbbbbbbbbbbbff.....
        cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
        .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
        ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
        ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
        ..fccbffcbcccccccbbbbcbbfff1111bbff.
        .fcbbf..ccbbbccccccbbbb111111111ff..
        fbbff.....cccbddfbbbdb111ccccccc....
        fff..........ccfbbbdbfcccccc........
        ...............ffffff...............
        `],
            500,
            characterAnimations.rule(Predicate.MovingRight)
        )
        statusbar5 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar5.attachToSprite(Shark1, 0, 0)
    }


    function TheFish() {
        Fish = sprites.create(img`
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . . 2 2 5 5 5 5 5 2 . . 
        . . . . . 2 5 5 5 5 5 5 5 5 2 . 
        . . . . 2 3 3 3 3 3 3 5 5 5 2 . 
        . . . . 2 4 4 3 3 4 3 3 2 2 . . 
        . . . 2 4 4 4 3 3 4 4 4 2 . . . 
        . . . 2 4 4 c 4 3 4 4 4 2 . 2 2 
        . . . 2 3 c 4 4 3 4 4 4 3 3 5 2 
        . . 2 2 3 4 f 4 3 4 3 4 5 5 5 2 
        . 2 2 3 3 4 4 4 4 4 3 4 3 3 5 2 
        f 3 3 3 4 4 4 4 4 3 3 4 f . 2 2 
        f f f 4 4 4 4 4 4 3 3 3 f . . . 
        . . . f f 4 4 4 3 3 3 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
        characterAnimations.loopFrames(
            Fish,
            [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 2 . . . 
        . . . . . . 2 5 5 5 5 5 2 2 . . 
        . . . . . 2 5 5 5 5 5 5 5 5 2 . 
        . . . . 2 3 3 3 3 3 3 5 5 5 2 . 
        . . . . 2 3 3 3 3 4 3 3 2 2 . . 
        . . . . 2 4 4 3 3 4 4 4 2 . . . 
        . . . 2 4 4 4 4 3 4 4 4 2 . . . 
        . . . 2 4 4 c 4 3 4 4 4 3 3 2 2 
        . . 2 2 3 c 4 4 3 4 3 4 5 5 5 2 
        . . 2 2 3 4 f 4 4 4 3 4 3 3 5 2 
        . 2 2 3 3 4 4 4 4 4 3 4 f 3 5 2 
        f 3 3 3 4 4 4 4 4 3 3 3 f . 2 2 
        f f f f f 4 4 4 3 3 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . . 2 2 5 5 5 5 5 2 . . 
        . . . . . 2 5 5 5 5 5 5 5 5 2 . 
        . . . . 2 3 3 3 3 3 3 5 5 5 2 . 
        . . . . 2 4 4 3 3 4 3 3 2 2 . . 
        . . . 2 4 4 4 3 3 4 4 4 2 . . . 
        . . . 2 4 4 c 4 3 4 4 4 2 . 2 2 
        . . . 2 3 c 4 4 3 4 4 4 3 3 5 2 
        . . 2 2 3 4 f 4 3 4 3 4 5 5 5 2 
        . 2 2 3 3 4 4 4 4 4 3 4 3 3 5 2 
        f 3 3 3 4 4 4 4 4 3 3 4 f . 2 2 
        f f f 4 4 4 4 4 4 3 3 3 f . . . 
        . . . f f 4 4 4 3 3 3 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, img`
        . . . . . . . . . 2 2 2 2 2 . . 
        . . . . . . 2 2 2 5 5 5 5 2 2 . 
        . . . . 2 2 5 5 5 5 5 5 5 5 2 . 
        . . . . 2 3 3 3 3 3 3 5 5 5 2 . 
        . . . 2 4 4 4 3 3 4 3 3 2 2 . . 
        . . . 2 4 4 c 4 3 4 4 4 2 . 2 2 
        . . . 2 3 c 4 4 3 4 4 4 2 3 5 2 
        . . 2 2 3 4 f 4 3 4 4 4 3 3 5 2 
        2 2 2 3 3 4 4 4 3 4 3 4 5 5 5 2 
        f 3 3 3 4 4 4 4 4 4 3 4 3 3 2 2 
        . f f 4 4 4 4 4 4 3 3 4 f . . . 
        . . . f 4 4 4 4 4 3 3 3 f . . . 
        . . . . f f 4 4 3 3 5 5 f . . . 
        . . . . . . f 5 5 5 5 5 f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . 2 2 2 2 2 . . . 
        . . . . . . 2 2 5 5 5 5 5 2 . . 
        . . . . . 2 5 5 5 5 5 5 5 5 2 . 
        . . . . 2 3 3 3 3 3 3 5 5 5 2 . 
        . . . . 2 4 4 3 3 4 3 3 2 2 . . 
        . . . 2 4 4 4 3 3 4 4 4 2 . . . 
        . . . 2 4 4 c 4 3 4 4 4 2 . 2 2 
        . . . 2 3 c 4 4 3 4 4 4 3 3 5 2 
        . . 2 2 3 4 f 4 3 4 3 4 5 5 5 2 
        . 2 2 3 3 4 4 4 4 4 3 4 3 3 5 2 
        f 3 3 3 4 4 4 4 4 3 3 4 f . 2 2 
        f f f 4 4 4 4 4 4 3 3 3 f . . . 
        . . . f f 4 4 4 3 3 3 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        characterAnimations.loopFrames(
            Fish,
            [img`
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . 2 2 5 5 5 5 5 2 . . . . . . 
        . 2 5 5 5 5 5 5 5 5 2 . . . . . 
        . 2 5 5 5 3 3 3 3 3 3 2 . . . . 
        . . 2 2 3 3 4 3 3 3 3 2 . . . . 
        . . . 2 4 4 4 3 3 4 4 2 . . . . 
        . . . 2 4 4 4 3 4 4 4 4 2 . . . 
        2 2 3 3 4 4 4 3 4 c 4 4 2 . . . 
        2 5 5 5 4 3 4 3 4 4 c 3 2 2 . . 
        2 5 3 3 4 3 4 4 4 f 4 3 2 2 . . 
        2 5 3 f 4 3 4 4 4 4 4 3 3 2 2 . 
        2 2 . f 3 3 3 4 4 4 4 4 3 3 3 f 
        . . f 5 5 5 3 3 4 4 4 f f f f f 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 . . . . . . . . 
        . . 2 5 5 5 5 5 2 2 . . . . . . 
        . 2 5 5 5 5 5 5 5 5 2 . . . . . 
        . 2 5 5 5 3 3 3 3 3 3 2 . . . . 
        . . 2 2 3 3 4 3 3 4 4 2 . . . . 
        . . . 2 4 4 4 3 3 4 4 4 2 . . . 
        2 2 . 2 4 4 4 3 4 c 4 4 2 . . . 
        2 5 3 3 4 4 4 3 4 4 c 3 2 . . . 
        2 5 5 5 4 3 4 3 4 f 4 3 2 2 . . 
        2 5 3 3 4 3 4 4 4 4 4 3 3 2 2 . 
        2 2 . f 4 3 3 4 4 4 4 4 3 3 3 f 
        . . . f 3 3 3 4 4 4 4 4 4 f f f 
        . . f 5 5 3 3 3 4 4 4 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `, img`
        . . 2 2 2 2 2 . . . . . . . . . 
        . 2 2 5 5 5 5 2 2 2 . . . . . . 
        . 2 5 5 5 5 5 5 5 5 2 2 . . . . 
        . 2 5 5 5 3 3 3 3 3 3 2 . . . . 
        . . 2 2 3 3 4 3 3 4 4 4 2 . . . 
        2 2 . 2 4 4 4 3 4 c 4 4 2 . . . 
        2 5 3 2 4 4 4 3 4 4 c 3 2 . . . 
        2 5 3 3 4 4 4 3 4 f 4 3 2 2 . . 
        2 5 5 5 4 3 4 3 4 4 4 3 3 2 2 2 
        2 2 3 3 4 3 4 4 4 4 4 4 3 3 3 f 
        . . . f 4 3 3 4 4 4 4 4 4 f f . 
        . . . f 3 3 3 4 4 4 4 4 f . . . 
        . . . f 5 5 3 3 4 4 f f . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . 2 2 2 2 2 . . . . . . . . 
        . . 2 5 5 5 5 5 2 2 . . . . . . 
        . 2 5 5 5 5 5 5 5 5 2 . . . . . 
        . 2 5 5 5 3 3 3 3 3 3 2 . . . . 
        . . 2 2 3 3 4 3 3 4 4 2 . . . . 
        . . . 2 4 4 4 3 3 4 4 4 2 . . . 
        2 2 . 2 4 4 4 3 4 c 4 4 2 . . . 
        2 5 3 3 4 4 4 3 4 4 c 3 2 . . . 
        2 5 5 5 4 3 4 3 4 f 4 3 2 2 . . 
        2 5 3 3 4 3 4 4 4 4 4 3 3 2 2 . 
        2 2 . f 4 3 3 4 4 4 4 4 3 3 3 f 
        . . . f 3 3 3 4 4 4 4 4 4 f f f 
        . . f 5 5 3 3 3 4 4 4 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
        )
        Fish.follow(Hero, 60)
        Fish.setPosition(46, 115)
        statusbar4 = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
        statusbar4.attachToSprite(Fish)
        S2 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
        characterAnimations.loopFrames(
            S2,
            [img`
        f f f . . . . . . . . f f f . . 
        c b b c f . . . . . . c c f f . 
        . c b b c f . . . . . . c c f f 
        . c c c b f . . . . . . c f c f 
        . c c b b c f . c c . c c f f f 
        . c b b c b f c c 3 c c 3 c f f 
        . c b c c b f c b 3 c b 3 b f f 
        . . c c c b b c b 1 b b b 1 c . 
        . . . c c c c b b 1 b b b 1 c . 
        . . . . c c b b b b b b b b b c 
        . . . . f b b b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b b 2 2 2 2 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `, img`
        . . . . . . . . . . . f f f . . 
        f f f . . . . . . . . c c f f f 
        c b b c f . . . c c . c c c f f 
        . c b b b f f c c 3 c c 3 c f f 
        . c c c b b f c b 3 c b 3 c f f 
        . c c b c b f c b b b b b b c f 
        . c b b c b b c b 1 b b b 1 c c 
        . c b c c c b b b b b b b b b c 
        . . c c c c c b b c 1 f f 1 b c 
        . . . c f b b b b f 1 f f 1 f c 
        . . . c f b b b b f f f f f f f 
        . . c c f b b b b f 2 2 2 2 f f 
        . . . . f c b b b 2 2 2 2 2 f . 
        . . . . . f c b b b 2 2 2 f . . 
        . . . . . . f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . c c . . . 
        . . . . . . c c c 3 c c 3 f . . 
        . . . . . c c c b 3 c b 3 c f . 
        . . . . f f b b b b b b b b c f 
        . . . . f f b b b 1 b b b 1 c c 
        . . . f f f c b b b b b b b b c 
        . . . f f f f b b c 1 f f 1 b c 
        . . . b b b c c b f 1 f f 1 f f 
        . . . c c c c f b f f f f f f f 
        . . c c c b b f b f 2 2 2 2 f f 
        . . . c b b c c b 2 2 2 2 2 f . 
        . . c b b c c f f b 2 2 2 f . . 
        . c c c c c f f f f f f f . . . 
        c c c c . . . . . . . . . . . . 
        `, img`
        . f f f . . . . . . . . f f f . 
        . c b b c f . . . . . . . c f f 
        . . c b b c f . . . . . . c c f 
        . . c c c b f . . . . . . . f c 
        . . c c b b f f . . . . . f f c 
        . . c b b c b f c c . c c f f f 
        . . c b c c b f c c c c c f f f 
        . . . c c c b c b 3 c c 3 c f . 
        . . . c c c c b b 3 c b 3 b c . 
        . . . . c c b b b b b b b b c c 
        . . . c f b b b 1 1 b b b 1 1 c 
        . . c c f b b b b b b b b b b f 
        . . . . f b b b b c b b b c b f 
        . . . . f c b b b 1 f f f 1 f . 
        . . . . . f c b b b b b b f . . 
        . . . . . . f f f f f f f . . . 
        `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            S2,
            [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c 1 b b b 1 b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b 1 f f 1 c b b b b f . . . . 
        f f 1 f f 1 f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . c c . c c . . . . . . . . 
        . . f 3 c c 3 c c c . . . . . . 
        . f c 3 b c 3 b c c c . . . . . 
        f c b b b b b b b b f f . . . . 
        c c 1 b b b 1 b b b f f . . . . 
        c b b b b b b b b c f f f . . . 
        c b 1 f f 1 c b b f f f f . . . 
        f f 1 f f 1 f b c c b b b . . . 
        f f f f f f f b f c c c c . . . 
        f f 2 2 2 2 f b f b b c c c . . 
        . f 2 2 2 2 2 b c c b b c . . . 
        . . f 2 2 2 b f f c c b b c . . 
        . . . f f f f f f f c c c c c . 
        . . . . . . . . . . . . c c c c 
        `, img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c 1 1 b b b 1 1 b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        statusbar3 = statusbars.create(12, 4, StatusBarKind.EnemyHealth)
        statusbar3.attachToSprite(S2)
        S2.follow(Hero, 60)
        S4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . c c c c 2 2 2 2 c . . . 
        . f f c 1 1 2 2 2 2 2 2 c c . . 
        f f f 2 1 1 1 2 2 2 2 2 2 c . . 
        f c 2 2 2 2 2 2 2 2 2 1 1 c . . 
        f c c f f f f c 2 2 2 1 1 f . . 
        f c f f f 7 7 7 c c 2 2 2 f f . 
        f c f c 7 b 7 7 7 7 c c 2 2 c f 
        . f c b b b 7 b 7 b 7 c f 2 2 f 
        . f b f f b b b 7 b b f f f 2 f 
        . f b b b b b f f b b f f f c f 
        . f b c c c b b b b b f f f c f 
        . . f b 7 7 b b c f f f c c f f 
        . . f c b 7 b c c b b f f f f . 
        . . f f f f f c b b b f . . . . 
        `, SpriteKind.Enemy)
        characterAnimations.loopFrames(
            S4,
            [img`
        . . . . c c c c . . . . . . . . 
        . . . c 2 2 2 2 c c c c . . . . 
        . . c c 2 2 2 2 2 1 1 c c f f . 
        . . c 1 1 2 2 2 2 2 1 1 2 c f f 
        . . c 1 1 2 2 2 2 2 2 2 2 2 c f 
        . . f 2 2 2 2 2 c f f f f c c f 
        . f 2 2 2 2 c c 7 7 7 f f f c f 
        f c 2 2 c c 7 7 7 7 7 7 c f c f 
        f 2 2 f c b 7 b 7 b 7 f b c f . 
        f 2 f f f b b f 7 b b f b b f . 
        f c f f f b b b f b b b b b f . 
        f c f f f f f c b b c c c b f . 
        f f c c f c b b c b 7 7 b f . . 
        . f f f f b b c c b 7 b f . . . 
        . . . . c c c c f c c f f . . . 
        . . . . . . . f f c c c f . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c 2 2 2 2 c c c c . . . . 
        . . c c 2 2 2 2 2 1 1 c c f f . 
        . . c 1 1 2 2 2 2 1 1 1 2 f f f 
        . . c 1 1 2 2 2 2 2 2 2 2 2 c f 
        . . f 1 1 2 2 c c f f f f c c f 
        . f f 2 2 c c 7 7 7 7 c f f c f 
        f c 2 2 c c 7 7 7 b 7 b 7 f c f 
        f 2 2 c c b b b 7 b b f b b f . 
        f 2 2 f c b b f b b b f b b f . 
        f c f f f b b b f b b b b b f . 
        f c f f f b b f f f c c c b f . 
        f f c c f f f f b b f 7 b f . . 
        . f f f f f f b b f f b f . . . 
        . . . . . . f f f f f f . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . . c 2 2 2 2 c c c c . . . . 
        . . c c 2 2 2 2 2 2 1 1 c f f . 
        . . c 2 2 2 2 2 2 1 1 1 2 f f f 
        . . c 1 1 2 2 2 2 2 2 2 2 2 c f 
        . . f 1 1 2 2 2 c f f f f c c f 
        . f f 2 2 2 c c 7 7 7 f f f c f 
        f c 2 2 c c 7 7 7 7 b 7 c f c f 
        f 2 2 f c b 7 7 7 7 b 7 b c f . 
        f 2 f f f b b 7 b 7 b f f b f . 
        f c f f f b b f f 7 b b b b f . 
        f c f f f b b b b b c c c b f . 
        f f c c f f f c b b 7 7 b f . . 
        . f f f f b b c c b 7 b c f . . 
        . . . . f b b b c f f f f f . . 
        `, img`
        . . . . c c c c . . . . . . . . 
        . . . c 2 2 2 2 c c c c . . . . 
        . . c c 2 2 2 2 2 1 1 c c f f . 
        . . c 1 1 2 2 2 2 2 1 1 2 2 f f 
        . . c 1 1 2 2 2 2 2 2 2 2 2 c f 
        . . c 2 2 2 2 2 2 2 f f f c c f 
        . c 2 2 2 2 2 c c c c f f f c f 
        f 2 2 2 2 c c 7 7 7 7 7 f f c f 
        f 2 2 f c b 7 7 7 b 7 f b f f . 
        f 2 f f f b b f 7 b b f b c f . 
        f c f f f b b b f b b b b b f . 
        f c f f f b b b b b c c c b f . 
        f f c c f c b b b b 7 7 b f . . 
        . f f f f c f f b b 7 b f f . . 
        . . f c b b c f f f f c c f f . 
        . . f b b b c . . f f c c c f . 
        `],
            100,
            characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
            S4,
            [img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c 2 2 2 2 c . . . 
        . f f c c 1 1 2 2 2 2 2 c c . . 
        f f c 2 1 1 2 2 2 2 2 1 1 c . . 
        f c 2 2 2 2 2 2 2 2 2 1 1 c . . 
        f c c f f f f c 2 2 2 2 2 f . . 
        f c f f f 7 7 7 c c 2 2 2 2 f . 
        f c f c 7 7 b 7 7 7 c c 2 2 c f 
        . f c b f 7 b 7 b 7 7 c f 2 2 f 
        . f b b f 7 b b f 7 b f f f 2 f 
        . f b b b b b f b b b f f f c f 
        . f b c c c b b f f f f f f c f 
        . . f b 7 7 b f b b f f c c f f 
        . . . f b 7 b f f b b f f f f . 
        . . . f f c c f f f f f . . . . 
        . . . f c c c f f . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . c c c c 2 2 2 2 c . . . 
        . f f c c 1 1 2 2 2 2 2 c c . . 
        f f f 2 1 1 1 2 2 2 2 1 1 c . . 
        f c 2 2 2 2 2 2 2 2 2 1 1 c . . 
        f c c f f f f c c 2 2 1 1 f . . 
        f c f f c 7 7 7 7 c c 2 2 f f . 
        f c f b 7 7 b 7 7 7 c c 2 2 c f 
        . f b b f b b 7 b 7 7 c c 2 2 f 
        . f b b f b b b f b 7 c f 2 2 f 
        . f b b b b b f b b b f f f c f 
        . f b c c c f f f b b f f f c f 
        . . f b 7 f b b f f f f c c f f 
        . . . f b f f b b f f f f f f . 
        . . . . f f f f f f . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . c c c c 2 2 2 2 c . . . 
        . f f c 1 1 2 2 2 2 2 2 c c . . 
        f f f 2 1 1 1 2 2 2 2 2 2 c . . 
        f c 2 2 2 2 2 2 2 2 2 1 1 c . . 
        f c c f f f f c 2 2 2 1 1 f . . 
        f c f f f 7 7 7 c c 2 2 2 f f . 
        f c f c 7 7 b 7 7 7 c c 2 2 c f 
        . f c b 7 b b 7 b 7 7 c f 2 2 f 
        . f b f f b b b b 7 b f f f 2 f 
        . f b b b b b f f b b f f f c f 
        . f b c c c b b b b b f f f c f 
        . . c b 7 7 b b f f f f c c f f 
        . . f c b 7 b f f b b f f f f . 
        . . f f f f f f b b b f . . . . 
        `, img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c 2 2 2 2 c . . . 
        . f f c c 1 1 2 2 2 2 2 c c . . 
        f f 2 2 1 1 2 2 2 2 2 1 1 c . . 
        f c 2 2 2 2 2 2 2 2 2 1 1 c . . 
        f c c f f f 2 2 2 2 2 2 2 f . . 
        f c f f f c c c c 2 2 2 2 2 f . 
        f c f f 7 7 7 7 7 c c 2 2 2 2 f 
        . f f b f 7 b 7 b 7 7 c f 2 2 f 
        . f c b f b b 7 f 7 7 f f f 2 f 
        . f b b b b b f b 7 b f f f c f 
        . f b c c c b b b b b f f f c f 
        . . c b 7 7 b b b b f f c c f f 
        . . f f b 7 b b f f f f f f f . 
        . f f b b f f f f f b b f f . . 
        . f b b b f f . . f b b b f . . 
        `],
            100,
            characterAnimations.rule(Predicate.MovingLeft)
        )
        S4.follow(Hero, 60)
        statusbar2 = statusbars.create(12, 4, StatusBarKind.EnemyHealth)
        statusbar2.attachToSprite(S4)
    }
    
   
}
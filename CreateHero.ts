function CreateHero() {
    if (!(Hero)) {
        Hero = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f f c c f f f . . 
            . f c c c c c c f c f . 
            f c f f f f f f c f f f 
            c f f f f f f f f c f c 
            f f f e e e f f f f f c 
            f e e d f 4 e f f f f f 
            f 4 4 1 f 4 4 f 1 f 4 f 
            f e 4 4 4 4 4 4 4 4 e f 
            . f e 4 4 b b 4 e e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 9 4 4 9 b f 4 e 
            4 d f 9 9 9 9 9 6 f d 4 
            4 4 f 8 8 6 6 6 6 f 4 4 
            . . f 8 8 8 8 8 8 f . . 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            . . . . . . . . . . . . 
            `, SpriteKind.Player);
        info.setLife(6);
        Hero.ay = 300;
        controller.moveSprite(Hero, 100, 0);
        scene.cameraFollowSprite(Hero);
        characterAnimations.loopFrames(
            Hero,
            [img`
            . . . . . . . . . . . . . 
            . . . f c c f f f . . . . 
            . f c c c f f f f f . . . 
            . f c f f f f f f f f . . 
            f f f f c c c c c f f f . 
            f f f c c f f f f f f f f 
            f c c f f f f e f c c f f 
            c c f f f f f e e f c f . 
            f f e e f b f e e f c f . 
            f f e 4 e 1 f 4 4 c f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 9 9 9 9 f . . . 
            . f e e f 8 8 6 6 f f . . 
            . f f f 8 8 8 8 8 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . f c c c f f . . . . 
            . f c c c c f f f f . . . 
            . f c f f f f f f f f . . 
            f f f f f c c c c c c f . 
            f f f c c c f f f f f f f 
            f c c c f f f e f c c f f 
            f c f f f f f e e f c f . 
            f f e e f b f e e c c . . 
            . f e 4 e 1 f 4 4 c f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e 9 9 f . . . 
            . f f f e e f 6 6 f f . . 
            . f f f f f 8 8 8 f f . . 
            . . f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . f c c f f . . . . . 
            . f c c c f f f f f . . . 
            . c f f f f f f f f f . . 
            f f f c c c c c c c c . . 
            f f c c f f f f f f f f f 
            f c c f f f f e f c c f f 
            c c f f f f f e e f c f . 
            f f e e f b f e e c f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 9 9 9 f . . . 
            . . e 4 4 e 9 6 6 f . . . 
            . . f e e f 8 8 8 f . . . 
            . . f f f f f f f f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . f c c f f f . . . . 
            . f c c c f f f f f . . . 
            . f c f f f f f f f f . . 
            f f f f c c c c c f f f . 
            f f f c c f f f f f f f f 
            f c c f f f f e f c c f f 
            c c f f f f f e e f c f . 
            f f e e f b f e e f c f . 
            f f e 4 e 1 f 4 4 c f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e 9 9 9 9 f . . . 
            . f e e f 8 8 6 6 f f . . 
            . f f f 8 8 8 8 8 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . f c c c f f . . . . 
            . f c c c c f f f f . . . 
            . f c f f f f f f f f . . 
            f f f f f c c c c c c f . 
            f f f c c c f f f f f f f 
            f c c c f f f e f c c f f 
            f c f f f f f e e f c f . 
            f f e e f b f e e c c . . 
            . f e 4 e 1 f 4 4 c f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e 9 9 f . . . 
            . f f f e e f 6 6 f f . . 
            . f f f f f 8 8 8 f f . . 
            . . f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . f c c f f . . . . . 
            . f c c c f f f f f . . . 
            . c f f f f f f f f f . . 
            f f f c c c c c c c c . . 
            f f c c f f f f f f f f f 
            f c c f f f f e f c c f f 
            c c f f f f f e e f c f . 
            f f e e f b f e e c f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e 9 9 9 f . . . 
            . . e 4 4 e 9 6 6 f . . . 
            . . f e e f 8 8 8 f . . . 
            . . f f f f f f f f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `],
            150,
            characterAnimations.rule(Predicate.MovingRight)
        );
        characterAnimations.loopFrames(
            Hero,
            [img`
            . . . . . f f f c c . . . 
            . . . f f f f f f c c f . 
            . . f f f c c c c f f f . 
            . f f f f f f f f c c f f 
            . f c c f f f f f f c f f 
            . f c f f e f f f f f c f 
            . f c c e e f f f f f f c 
            . . f c e 4 f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 9 9 6 e 4 4 e . . 
            . . . f 6 6 6 e 4 4 e . . 
            . . . f 8 8 8 f e e f . . 
            . . . f f f f f f f . . . 
            . . . . f f f f f . . . . 
            . . . . . . f f f . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . . . f f f c c . . . 
            . . . f f f f f f f c c . 
            . . f f c c c c f f f c . 
            . f f f f f f f c c c f f 
            . f f f f f f f f f c c f 
            . f c c f e f f f f f c c 
            . f c f e e f f f f f f f 
            . . c c e 4 f b f e e f f 
            . . f c 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 9 9 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f 8 8 8 f f f f f . 
            . . f f f f f . f f f f . 
            . . . f f f . . . f f . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . . . f f f c c c . . 
            . . . f f f f f f f c c . 
            . . f f f f c c c f f f . 
            . f f c c c f f c c c f f 
            . f f f f f f f f f c c f 
            . f c c f e f f f f f c f 
            . f c f e e f f f f f c f 
            . f c c e 4 f b f e e f f 
            . . f c 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 9 9 6 8 e 4 4 e . 
            . . f f 6 6 6 8 f e e f . 
            . . f f 8 8 8 f f f f f . 
            . . f f f f f . f f f f . 
            . . . f f f . . . f f . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . f f f c c . . . 
            . . . f f f f f f c c f . 
            . . f f f c c c c f f f . 
            . f f f f f f f f c c f f 
            . f c c f f f f f f c f f 
            . f c f f e f f f f f c f 
            . f c c e e f f f f f f c 
            . . f c e 4 f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f 9 9 6 e 4 4 e . . 
            . . . f 6 6 6 e 4 4 e . . 
            . . . f 8 8 8 f e e f . . 
            . . . f f f f f f f . . . 
            . . . . f f f f f . . . . 
            . . . . . . f f f . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . . . f f f c c c . . 
            . . . f f f f f f f c c . 
            . . f f f f c c c f f f . 
            . f f c c c f f c c c f f 
            . f f f f f f f f f c c f 
            . f c c f e f f f f f c f 
            . f c f e e f f f f f c f 
            . f c c e 4 f b f e e f f 
            . . f c 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f 9 9 6 8 e 4 4 e . 
            . . f f 6 6 6 8 f e e f . 
            . . f f 8 8 8 f f f f f . 
            . . f f f f f . f f f f . 
            . . . f f f . . . f f . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . 
            . . . . . f f f c c . . . 
            . . . f f f f f f f c c . 
            . . f f c c c c f f f c . 
            . f f f f f f f c c c f f 
            . f f f f f f f f f c c f 
            . f c c f e f f f f f c c 
            . f c f e e f f f f f f f 
            . . c c e 4 f b f e e f f 
            . . f c 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f 9 9 e 4 4 e f . . 
            . . f f 6 6 f e e f f f . 
            . . f f 8 8 8 f f f f f . 
            . . f f f f f . f f f f . 
            . . . f f f . . . f f . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 
            `],
            150,
            characterAnimations.rule(Predicate.MovingLeft)
        );
    }
    Hero.x = 11;
    Hero.y = 200;
}

let Hero: Sprite = null
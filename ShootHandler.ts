let ShootDirection: string = null;

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    ShootDirection = "left"
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    ShootDirection = "right"
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Stage == "Game") {
        if (ShootDirection == "left") {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 5 . . . . . . . 
                . . . . . . . . . . . 5 . . . . 
                . . . . . . . . d d 2 . . . . . 
                . . . . . . . d d 5 . . 5 . . . 
                . . . . . . . d . . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f c f f f f f f f f . . . 
                . . . f c c f f f f f f f . . . 
                . . . f c c c f f f f f f . . . 
                . . . f f c c f f c c c f . . . 
                . . . . f f c c c c f f . . . . 
                . . . . . f f f f f f . . . . . 
                `, Hero, -100, 50);
            pause(300);
        } else if (ShootDirection == "right") {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . . . . . . . . 
                . . . . 5 . . . . . . . . . . . 
                . . . . . 2 d d . . . . . . . . 
                . . . 5 . . 5 d d . . . . . . . 
                . . . . . . . . d . . . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f c f . . . 
                . . . f f f f f f f c c f . . . 
                . . . f f f f f f c c c f . . . 
                . . . f c c c f f c c f f . . . 
                . . . . f f c c c c f f . . . . 
                . . . . . f f f f f f . . . . . 
                `, Hero, 100, 50);
            pause(300);
        }
    }
});

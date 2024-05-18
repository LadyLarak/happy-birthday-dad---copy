let ShootDirection = 0

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Stage == "Game") {
        if (ShootDirection == 1) {
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
                `, Hero, 100, 50);
            pause(300);
        } else if (ShootDirection == 2) {
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
                `, Hero, -100, 50);
            pause(300);
        }
    }
});

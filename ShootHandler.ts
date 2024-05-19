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
            projectile = sprites.createProjectileFromSprite(bombLeftIMG, Hero, -100, 50);
            pause(300);
        } else if (ShootDirection == "right") {
            projectile2 = sprites.createProjectileFromSprite(bombRightIMG, Hero, 100, 50);
            pause(300);
        }
    }
});

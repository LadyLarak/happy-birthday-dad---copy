type btnState = 'up' | 'down';
type StatefulButton = {
    sprite: Sprite,
    sprite2: Sprite,
    state: btnState
};


function createBtn(img: Image, defaultState: btnState): StatefulButton {
    return {
        sprite: sprites.create(img, SpriteKind.redColouredButton),
        sprite2: sprites.create(img, SpriteKind.yellowColouredButton),
        state: defaultState    

    }
      
}
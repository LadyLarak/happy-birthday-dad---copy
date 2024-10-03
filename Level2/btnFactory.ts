type btnState = 'up' | 'down';
type StatefulButton = {
    sprite: Sprite,
    state: btnState
};


function createBtn(img: Image, defaultState: btnState): StatefulButton {
    return {
        sprite: sprites.create(img, SpriteKind.redColouredButton),
        state: defaultState    
    }
      
}
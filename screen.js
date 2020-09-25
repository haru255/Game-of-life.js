const screen = new PIXI.Application({
    width: 512,
    height: 512,
    backgroundColor: 0x000000,
});
let scale = screen.view.width / width;
screen.stage.scale.x = scale;
screen.stage.scale.y = scale;
let el = document.getElementById('screen');
el.appendChild(screen.view);


let cells = [];
for (let i=0; i<width; i++) {
    cells[i] = [];
    for (let j=0; j<height; j++) {
        cells[i][j] = new PIXI.Graphics()
        .beginFill(0xffffff)
        .drawRect(0,0,1,1)
        .endFill();
        cells[i][j].x = j;
        cells[i][j].y = i;
        cells[i][j].tint = 0x000000;
        screen.stage.addChild(cells[i][j]);
    }
}

screen.ticker.add(function () {
    for (let i=0; i<width; i++) {
        for (let j=0; j<height; j++) {
            if (board[i][j] == true) {
                cells[i][j].tint = 0xffffff;
            }
            else cells[i][j].tint = 0x000000;
        }
    }
    next();
})

document.getElementById("random").onclick = randomReset;
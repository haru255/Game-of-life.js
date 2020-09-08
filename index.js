const app = new PIXI.Application({
    width: 512,
    height: 512,
    backgroundColor: 0x000000,
});
let scale = app.view.width / width;
app.stage.scale.x = scale;
app.stage.scale.y = scale;
let el = document.getElementById('app');
el.appendChild(app.view);


let cells = [];
for (let i=0; i<width; i++) {
    cells[i] = [];
    for (let j=0; j<height; j++) {
        cells[i][j] = new PIXI.Graphics()
        .beginFill(0xffffff)
        .drawRect(0,0,1,1)
        .endFill();
        cells[i][j].x = 1*j;
        cells[i][j].y = 1*i;
        cells[i][j].tint = 0x000000;
        app.stage.addChild(cells[i][j]);
    }
}
let cnt = 0;
app.ticker.add(function () {
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
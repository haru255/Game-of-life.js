var width =  128;
var height = 128;
var board = [];
for (let i=0; i<height; i++) {
    board[i] = [];
    for (let j=0; j<width; j++) {
        board[i][j] = false;
        if (Math.random() > 0.8) board[i][j] = true;
    }
}
// board[31][31] = true;
// board[30][30] = true;
// board[29][30] = true;
// board[29][31] = true;
// board[29][32] = true;

function randomReset() {
    for (let i=0; i<height; i++) {
        board[i] = [];
        for (let j=0; j<width; j++) {
            if (Math.random() > 0.5) board[i][j] = true;
            else board[i][j] = false;
        }
    }
}

function isExist(y,x) {
    return board[y][x];
}

function neighborhood(y,x) {
    let cnt = 0;
    for (let i=y-1; i<=y+1; i++) {
        for (let j=x-1; j<=x+1; j++) {
            let ty = i % height;
            let tx = j % width;
            if (ty < 0) ty += height;
            if (tx < 0) tx += width;
            if (isExist(ty,tx)) cnt ++;
        }
    }
    cnt -= isExist(y,x);

    return cnt;
}
function nextExist(y,x) {
    let cnt = neighborhood(y,x);
    if (!isExist(y,x) && cnt==3) return true;
    if (isExist(y,x) && (cnt==2 || cnt==3)) return true;
    return false;
}



function next() {
    let nextBoard = [];
    for (let i=0; i<height; i++) {
        nextBoard[i] = [];
        for (let j=0; j<width; j++) {
            nextBoard[i][j] = nextExist(i,j);
        }
    }
    board = nextBoard;
}
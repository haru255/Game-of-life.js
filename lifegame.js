// 盤面のサイズ
const width =  128;
const height = 128;

// 盤面をランダムに初期化する
function randomReset() {
    for (let i=0; i<height; i++) {
        board[i] = [];
        for (let j=0; j<width; j++) {
            if (Math.random() > 0.5) board[i][j] = true;
            else board[i][j] = false;
        }
    }
}

// セルの状態を返す
function isExist(y,x) {
    return board[y][x];
}

// セルの周りの生きているセルの数を返す
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
// セルの次の状態を返す
function nextExist(y,x) {
    let cnt = neighborhood(y,x);
    if (!isExist(y,x) && cnt==3) return true;
    if (isExist(y,x) && (cnt==2 || cnt==3)) return true;
    return false;
}

// すべてのセルを更新する
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



// 盤面を初期化
var board = [];
randomReset();
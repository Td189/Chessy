let view_p = document.getElementById('view_one');
let hide_p = document.getElementById('hide_one');
let view_o = document.getElementById('view_two');
let hide_o = document.getElementById('hide_two');
let pieceContainer = document.getElementById('piece-container')
count = 0;
countII = 0;
var pawn = document.getElementById('pawn');
var bishop = document.getElementById('bishop');
var rook = document.getElementById('rook');
var knight = document.getElementById('knight');
var king = document.getElementById('king');
var queen = document.getElementsByClassName('Queen');

var openingContainer = document.getElementById('opening-container');
let opening = document.getElementsByClassName('Opening');
var italian = document.getElementsByClassName('Opening')[0];
var london = document.getElementsByClassName('Opening')[1];
var english = document.getElementsByClassName('Opening')[2];
var scicilian = document.getElementsByClassName('Opening')[3];
var dutch = document.getElementsByClassName('Opening')[4];
var modern = document.getElementsByClassName('Opening')[5];

const increase_o = () => {
    countII += 1;
    if (countII >= 1) { hide_o.style.display = 'inline-block' } else { hide_p.style.display = 'none' };
    if (countII >= 1) { openingContainer.style.display = 'flex' } else { openingContainer.style.display = 'none' };
    if (countII >= 1) { opening[0].style.display = 'block' } else { italian.style.display = 'none' };
    if (countII >= 2) { opening[1].style.display = 'block' } else { london.style.display = 'none' };
    if (countII >= 3) { opening[2].style.display = 'block' } else { english.style.display = 'none' };
    if (countII >= 4) { opening[3].style.display = 'block' } else { scicilian.style.display = 'none' };
    if (countII >= 5) { opening[4].style.display = 'block' } else { dutch.style.display = 'none' };
    if (countII >= 6) { opening[5].style.display = 'block' } else { modern.style.display = 'none' };
}

const decrease_o = () => {
    countII -= 1;
    if (countII < 1) { hide_o.style.display = 'none' };
    if (countII >= 1) { hide_o.style.display = 'inline-block' } else { hide_p.style.display = 'none' };
    if (countII >= 1) { openingContainer.style.display = 'flex' } else { openingContainer.style.display = 'none' };
    if (countII >= 1) { opening[0].style.display = 'block' } else { italian.style.display = 'none' };
    if (countII >= 2) { opening[1].style.display = 'block' } else { london.style.display = 'none' };
    if (countII >= 3) { opening[2].style.display = 'block' } else { english.style.display = 'none' };
    if (countII >= 4) { opening[3].style.display = 'block' } else { scicilian.style.display = 'none' };
    if (countII >= 5) { opening[4].style.display = 'block' } else { dutch.style.display = 'none' };
    if (countII >= 6) { opening[5].style.display = 'block' } else { modern.style.display = 'none' };
};

const increase_p = () => {
    count += 1;
    if (count >= 1) { pawn.style.display = 'block' } else { pawn.style.display = 'none' };
    if (count >= 1) { pieceContainer.style.display = 'flex' } else { pieceContainer.style.display = 'none' };
    if (count >= 1) { hide_p.style.display = 'inline-block' } else { hide_p.style.display = 'none' };
    if (count >= 2) { bishop.style.display = 'block' } else { bishop.style.display = 'none' };
    if (count >= 3) { rook.style.display = 'block' } else { rook.style.display = 'none' };
    if (count >= 4) { knight.style.display = 'block' } else { knight.style.display = 'none' };
    if (count >= 5) { king.style.display = 'block' } else { king.style.display = 'none' };
    if (count >= 6) { queen.style.display = 'block' } else { queen.style.display = 'none' };
};

const decrease_p = () => {
    count -= 1;
    if (count < 1) { hide_p.style.display = 'none' };
    if (count >= 1) { pawn.style.display = 'block' } else { pawn.style.display = 'none' };
    if (count >= 1) { pieceContainer.style.display = 'flex' } else { pieceContainer.style.display = 'none' };
    if (count >= 2) { bishop.style.display = 'block' } else { bishop.style.display = 'none' };
    if (count >= 3) { rook.style.display = 'block' } else { rook.style.display = 'none' };
    if (count >= 4) { knight.style.display = 'block' } else { knight.style.display = 'none' };
    if (count >= 5) { king.style.display = 'block' } else { king.style.display = 'none' };
    if (count >= 6) { queen.style.display = 'block' } else {
        queen.style.display = 'none'
    };
}

view_p.addEventListener('click', increase_p);
hide_p.addEventListener('click', decrease_p);
view_o.addEventListener('click', increase_o);
hide_o.addEventListener('click', decrease_o);
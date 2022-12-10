import React , { useState} from 'react';
import Chessboard from 'chessboardjsx';
import {Chess} from 'chess.js';
import "./Chess.css"

function ChessGame1() {

const [fen,setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
const [game, setGame] = useState(new Chess())


function dropPiece ({sourceSquare,targetSquare,pieces})
{
const promotions = game.moves({verbose:true}).filter((m) =>m.promotion);
let promotionTo = undefined;
if (promotions.some((p)=>`${p.from}:${p.to}` === `${sourceSquare}:${targetSquare}`))
{
  promotionTo = prompt("Promote your pawn to: r(rook), b(bishop), q(queen), or n(knight).");
  if(!(promotionTo === "r" || promotionTo === "b" || promotionTo === "q" || promotionTo === "n")) 
  {
alert("you did not enter a valid promotion, your pawn will be automatically promoted to a queen.");
promotionTo = "q" ;  
  }
}
let validMove = game.move({
  from: sourceSquare,
  to: targetSquare,
  promotion: promotionTo,
});
if(validMove){
  setFen(game.fen())
}
console.log(sourceSquare, targetSquare,pieces)


}
  return (
    <div className='chess_board'>
     
      <Chessboard
      position={fen} 
      onDrop={dropPiece}/>
    </div>
  );
}

export default ChessGame1

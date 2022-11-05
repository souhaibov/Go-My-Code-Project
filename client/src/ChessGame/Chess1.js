import React , {useEffect, useState} from 'react';
import Chessboard from 'chessboardjsx';
import {Chess} from 'chess.js';
import "./Chess.css"

function ChessGame1() {

const [fen,setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
const [game, setGame] = useState(new Chess())
// const [gameOver, setGameOver] = useState();

// useEffect(() => {

//   if(game.in_check())
//   {
// alert("you are currently in check")
//   } 
// if(game.in_checkmate())
// {
//   setGameOver({
//     info1: "checkmate - ",
//     info2: `${game.turn() === "w" ? "white" : "black"} loses `
//   })
// }
// if(game.in_draw())
// {
//   setGameOver({
//     info1: "Draw - ",
//     info2: `tie`
//   })
// }
// if(game.in_stalemate())
// {
//   setGameOver({
//     info1: "stalemate - ",
//     info2: `tie`
//   })
// }
// if(game.in_threefold_repetition())
// {
//   setGameOver({
//     info1: "threefold repetition - ",
//     info2: `tie`
//   })
// }
//   if(game.isInsufficientMaterial()){
//     setGameOver({
//       info1: "InsufficientMaterial - ",
//       info2: `tie`
//     })
// }

// }, [fen])



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
      {/* {gameOver ? <p>{gameOver.info1} {gameOver.info2}</p>: <></>} */}
      <Chessboard
      position={fen} 
      onDrop={dropPiece}/>
    </div>
  );
}

export default ChessGame1

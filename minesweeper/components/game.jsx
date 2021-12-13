import React from "react";
import { Board } from "../minesweeper";

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = { board =  new Board(8, 10)}
        this.updateGame = this.updateGame.bind(this)
        
    }

    updateGame(){  
    }

    render(){
        return (
            <Board 
            board={this.state.board}
            game={this.updateGame}
           ></Board>
        )
    }
}
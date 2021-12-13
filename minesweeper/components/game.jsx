import React from "react";
import * as Minesweeper from "../minesweeper.js"
import Board from "./board"

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { board: new Minesweeper.Board(8, 10) };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){  
    }

    render(){
        return (
            <Board
            board={this.state.board}
            game={this.updateGame}
            >
            </Board>
        )
    }
}


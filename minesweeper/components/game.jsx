import React from "react";
import * as Minesweeper from "../minesweeper.js"
import Board from "./board"

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = { board: new Minesweeper.Board(8, 10) };
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagging){  
        if (flagging){ 
            tile.toggleFlag() 
        } else {
            tile.explore()
        }
        this.setState({ board: this.state.board })

        const container = document.getElementById('modal')
        const content = container.children[0].children[2]
        // debugger
        if (this.state.board.won()) {
            content.innerText = "Congratulations, you've won!"
            container.style.visibility = 'visible';
        } else if ( this.state.board.lost()) {
            content.innerText = "Sorry, you're dead! 💀"
            container.style.visibility = 'visible';
        }
    }

    restartGame(){
        this.setState({ board: new Minesweeper.Board(8, 10) });
    }

    render(){
        return (
            <Board
            board={this.state.board}
            updateGame={this.updateGame}
            >
            </Board>
        )
    }
}


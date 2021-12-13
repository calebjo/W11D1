import React from "react";
import Tile from "./tile";

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {grid: props.board.grid};
    }

    render(){
        const grid = this.props.board.grid.map((row, rowIdx) => {
            const rowMap = row.map((tile, tileIdx) => {
                // debugger
                return (
                        <Tile key={tileIdx} tileObj={tile} updateGame={this.props.updateGame}/>
                )
            })
            return (
                <div className="row" key={rowIdx}>{rowMap}</div>
            )
        });
        return (
           <div id="game-container">{grid}</div>
        )
    }
}
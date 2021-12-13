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
                    <div key={tileIdx}>
                        <Tile tileObj={tile} updateGame={this.props.updateGame}/>
                    </div>
                )
            })
            return (
                <div key={rowIdx}>{rowMap}</div>
            )
        });
        return (
           <div id="test">{grid}</div>
        )
    }
}
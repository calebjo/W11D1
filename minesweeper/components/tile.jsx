import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bombed: props.tileObj.bombed,
            explored: props.tileObj.explored,
            flagged: props.tileObj.flagged
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.updateGame(this.props.tileObj, e.altKey)
    }

    render() {
        const that = this;
        const className = function() {
            let _className = 'tile '
            if (that.props.tileObj.bombed){ _className += 'bombed '}
            if (that.props.tileObj.explored){ _className += 'explored '}
            if (that.props.tileObj.flagged){ _className += 'flagged '}
            return _className;
        }

        const tileSymbol = function() {
            let _tileSymbol = '';
            if (that.props.tileObj.flagged) _tileSymbol = '⚑'
            if (that.props.tileObj.explored && that.props.tileObj.bombed) _tileSymbol = '💣'
            return _tileSymbol;
        }

        return (
            <div className={className()} onClick={this.handleClick}>{tileSymbol()}</div>
        )
    }
}

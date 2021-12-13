import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bombed: props.tileObj.bombed,
            explored: props.tileObj.explored,
            flagged: props.tileObj.flagged
        }
    }

    render() {
        const className = function() {
            let _className = 'tile '
            if (this.props.tileObj.bombed){ _className += 'bombed '}
            if (this.props.tileObj.explored){ _className += 'explored '}
            if (this.props.tileObj.flagged){ _className += 'flagged '}
            return _className;
        }

        return (
           <div className={className()}>T</div>
        )
    }
}

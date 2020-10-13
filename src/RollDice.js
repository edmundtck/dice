import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
        this.roll = this.roll.bind(this);
    }
    randomFace() {
        return Math.floor(Math.random() * this.props.sides.length);
    }
    roll() {
        // pick 2 new rolls
        const newDie1 = this.props.sides[this.randomFace()];
        const newDie2 = this.props.sides[this.randomFace()];
        // set state with new rolls
        this.setState({
            die1: newDie1,
            die2: newDie2,
            isRolling: true
        })

        // wait one second, then set rolling to false
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 1000);
    }

    render() {
        const {die1, die2, isRolling} = this.state;
        return (
            <div className="RollDice">
                <div>
                    <Die face={die1} shake={isRolling}/>
                    <Die face={die2} shake={isRolling}/>
                </div>
                <button onClick={this.roll} className="RollDice-button" disabled={isRolling}>
                    {isRolling ? 'Rolling...' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;
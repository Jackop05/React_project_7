import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Hero() {
    const [dices, setDices] = React.useState( setFirstDices() )



    function setFirstDices() {
        let dicesArray = []
        for (let i = 0; i < 10; i++) {
            dicesArray.push(
                {
                    'toRoll': true,
                    'number': getRandom(),
                }
            )
        }
        
        return dicesArray
    }

    function getRandom() {
        const random = ( Math.floor(Math.random() * 6) + 1 )
        return random
    }

    function getNewRandom() {
        const array = dices.map((element) => {
            const random = getRandom()
            if (element.toRoll) {
                return (
                    {
                        'toRoll': true,
                        'number': random,
                    }
                )
            } else {
                return (
                    {
                        'toRoll': false,
                        'number': element.number,
                    }
                )
            }
        })

        return array
    }

    function handleBtnClick() {
        setDices(getNewRandom())
    }

    function handleDiceClick(index) {
        setDices((prev) => {
            const array = prev.map((element, i) => {
                if (index == i) {
                    return (
                        {
                            'toRoll': !element.toRoll,
                            'number': element.number,
                        }
                    )
                } else {
                    return element
                }
            })
            return array
        })
    }

    function renderDices() {
        const array = dices.map((element, index) => {
            if (element.toRoll) {
                return <div className="dice" onClick={() => {handleDiceClick(index)}}>{element.number}</div>
            } else {
                return <div className="dice green" onClick={() => {handleDiceClick(index)}}>{element.number}</div>
            }
        })
        array.join("")
        console.log(array)
        return array
    }



    return (
        <div className="hero">
            <div className="dices">
                {renderDices()}
            </div>
            <div className="roll-btn btn" onClick={handleBtnClick}>Roll</div>
        </div>
    )
}
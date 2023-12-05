import React from 'react'

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#59E391" : "transparent"
    }

    return (
        <div
            className='box'
            style={styles}
            onClick={() => {props.toggle(props.id)}}
        >{props.num}        
        </div>
    )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Card(props) {
  return (
    <div className="cardteam">
      <img src={`/images/${props.img}`} alt={`${props.img}`} />
      <div className="infoteam">
        <h4>{props.title}</h4>
        <p>{props.role}</p>
      </div>
    </div>
  )
}

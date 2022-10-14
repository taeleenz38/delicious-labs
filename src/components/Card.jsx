/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <a href="#" target="_blank" rel="noreferrer">
        <img src={`/images/${props.img}`} alt={`${props.img}`} />
      </a>
      <div className="info">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

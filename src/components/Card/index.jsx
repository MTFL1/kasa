import React from 'react';
import styles from '../Card/card.scss'

function Card(props) {
	return (
		<div className={`${styles.card} p-5`}>
		  <img className={`${styles.image} border-radius-10 mb-20`} src={props.cover} alt="" />
		  <span className={`${styles.title} text-white font-weight-600`}>{props.title}</span>
		</div>
	);
  }
export default Card

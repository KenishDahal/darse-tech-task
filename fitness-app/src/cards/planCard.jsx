import React from 'react'
import { GiCheckMark } from "react-icons/gi";

const PlanCard = ({heading,price,first,second,third,fourth,fifth}) => {
  return (
    <div className='planCard'>
        <div className='planCard__heading caption'>{heading}</div>
        <div className='price'>{price}<span className='body'> / Per Month</span></div>
        <div className='planCard__list'>
            <div className='eyebrow'><GiCheckMark className='check'/> {first}</div>
            <div className='eyebrow'><GiCheckMark className='check'/> {second}</div>
            <div className='eyebrow'><GiCheckMark className='check'/> {third}</div>
            <div className='eyebrow'><GiCheckMark className='check'/> {fourth}</div>
            <div className='eyebrow'><GiCheckMark className='check'/> {fifth}</div>
        </div>
        <div className='button'>Choose Plan</div>
    </div>
  )
}

export default PlanCard
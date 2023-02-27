"use client"

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import FeedbackMessage from '@/Components/FeedbackMessage/FeedbackMessage'
import { use, useEffect, useState } from 'react'
import dataset from '@/public/dataset'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [modalStatus, setModalStatus] = useState(false)
  const [endStatus, setEndStatus] = useState(false)
  const [randomizedArray, setRandomizedArray] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const router = useRouter()
  
  useEffect(() => {
    setRandomizedArray(randomizeData(dataset))
  }, [])

  useEffect(() => {
    if (currentQuestion === randomizedArray.length-1) {
      setTimeout(() => router.push(`/Results/${score}`), 500)
    }
  }, [currentQuestion])


  const handleClick = (event) => {
    if(event.target.value === randomizedArray[currentQuestion].answer){
      setScore(prevState => prevState +1)
    }

    setModalStatus(true)
    setTimeout(() => { setModalStatus(false) }, 500)
    setTimeout(() => { setCurrentQuestion(prevState => prevState + 1) }, 500)
  }

  function randomizeData(array) {
    const arrayCopy = array.slice()
    const randomArray = []
    while (arrayCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length)
      const object = arrayCopy.splice(randomIndex, 1)
      randomArray.push(object[0])
    }
    return randomArray
  }

  if(randomizedArray.length && currentQuestion <= 15){
    return (
      <>
        {modalStatus && <FeedbackMessage />}
        <h1>Blueberry or Chihuahua?</h1>
        <h2>Score: {score}/16</h2>
        <Image src={randomizedArray[currentQuestion].source} width="400" height="400" alt="looks like a blueberry muffin or chihuahua" />
        <div className={styles.buttonContainer}>
          <button value="blueberry muffin" onClick={(event) => handleClick(event)}>Blueberry Muffin</button>
          <button value="chihuahua" onClick={(event) => handleClick(event)}>Chihuahua</button>
        </div>
      </>
    )
  }
}

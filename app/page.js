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
  const [currentQuestion, setCurrentQuestion] = useState()
  const randomizedArray = dataset.slice()
  const router = useRouter()

  useEffect(() => {
    if (endStatus) {
      setTimeout(() => router.push("/Results"), 3000)
    }
  }, [endStatus])

  useEffect(() => {
    setCurrentQuestion(randomizeData())
    setEndStatus(false)
  }, [])

  const handleClick = () => {
    setCurrentQuestion(randomizeData())
    setModalStatus(true)
    setTimeout(() => { setModalStatus(false) }, 3000)
  }

  function randomizeData() {
    const randomIndex = Math.floor(Math.random() * randomizedArray.length)
    const object = randomizedArray.splice(randomIndex, 1)
    if (randomizedArray.length === 0) {
      setEndStatus(true)
    }
    return object
  }
  
  if (currentQuestion) {
    return (
      <>
        {console.log("HERE: ", randomizeData())}
        {modalStatus && <FeedbackMessage />}
        <h1>Blueberry or Chihuahua?</h1>
        <Image src={currentQuestion.source} width="300" height="300" />
        <div className={styles.buttonContainer}>
          <button onClick={handleClick}>Blueberry</button>
          <button onClick={handleClick}>Chihuahua</button>
          <button onClick={() => setEndStatus(true)}>Test</button>
        </div>
      </>
    )
  }
}

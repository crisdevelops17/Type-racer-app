import {useState, useRef, useEffect} from "react"

function useWordGame (startingTime = 30) {
    const [text,setText] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [pb, setPb] = useState(wordCount)
  const textBoxRef = useRef(null)

  function handleChange(event) {
    const {value} = event.target
    setText(value)
  }
  function calculateWordCount(text) {
    let myArr = text.split(" ")
    return myArr.filter(item => item !== "").length
  }
  function startGame() {
    setIsTimeRunning(true)
    setText("")
    setTimeRemaining(startingTime)
    setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }
  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
    if(wordCount > pb){
    setPb(wordCount)
    }
  
  }
    
  useEffect(() => {
    if(timeRemaining > 0 && isTimeRunning){
    setTimeout(() => {
      setTimeRemaining(item => item -1)
    }, 1000)
  }
    else if (timeRemaining === 0) {
      endGame()
    }
  },[timeRemaining, isTimeRunning])



  return {text,useRef,handleChange,isTimeRunning,startGame,textBoxRef,timeRemaining,wordCount,pb}
}
export default useWordGame
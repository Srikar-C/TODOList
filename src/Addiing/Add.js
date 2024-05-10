import { useEffect, useState } from 'react'
import './add.css'
import Item from './Item'

function Add() {
  function getDate() {
    const today = new Date()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()
    return `${year}-${month}-${date}`
  }

  const [date, setDate] = useState(getDate())

  function handleDate(event) {
    setDate(event.target.value)
  }
  const [text, setText] = useState('')
  function handleText(event) {
    setText(event.target.value)
  }
  const [data, setData] = useState([])
  function handleData(event) {
    event.preventDefault()
    setData((prevData) => {
      if (text === '') {
        return [...prevData, date + ' => Nothing to do.']
      } else {
        return [...prevData, date + ' => ' + text]
      }
    })
    setDate(getDate())
    setText('')

    console.log(text, date)

    fetch('http://localhost:3005/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text, date: date }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) =>
        console.error('There was a problem with the fetch operation:', error)
      )
  }
  function onDelete(id) {
    console.log(id)
    setData((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id
      })
    })
  }

  useEffect(() => {
    fetch('http://localhost:3005/lists', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data1) => {
        console.log(data1)
        data1.forEach((item) => {
          setData((prevData) => {
            return [...prevData, '' + item.date + ' => ' + item.itemName]
          })
        })
      })
      .catch((error) =>
        console.error('There was a problem with the fetch operation:', error)
      )
  }, [])

  console.log('data ', data)
  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <form className="form">
        <input type="date" onChange={handleDate} value={date} />
        <input
          type="text"
          onChange={handleText}
          value={text}
          placeholder="Enter text"
          style={{ color: 'white' }}
        />
        <button onClick={handleData}>Add</button>
      </form>
      <div className="list">
        {data.length > 0 &&
          data.map((item, index) => {
            console.log('item ', item)
            return (
              <Item key={index} id={index} val={item} onChecked={onDelete} />
            )
          })}
      </div>
    </div>
  )
}
export default Add

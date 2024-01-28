import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css'
import arrow from '../../assets/icon/arrow.svg'
function Footer(props) {
  const [text_date,settext_date]=useState({
    text:"",
    date:"",
    time:""
  })
  useEffect(()=>{
    console.log("new_group")
    settext_date({
      ...text_date,
      text:""
    })
  },[props.name])
  const update_text=(event)=>{
    event.preventDefault();
    settext_date({
      ...text_date,
      [event.target.name]:event.target.value,
    })
  }
  const submit=()=>{
    let today=  new Date();
    const month=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
    const ap=today.getHours()>12? "PM":"AM"
    const dates=today.getDate()+" "+month[today.getMonth()]+" "+today.getFullYear()
    const times=today.getHours()+":"+today.getMinutes()+" "+ap
    const news_date_time={}
    news_date_time.date=dates
    news_date_time.time=times
    news_date_time.text=text_date.text
    if(text_date.text.length){
      console.log("this")
      console.log(text_date)
      console.log(props.text)
      props.settext([...props.text,news_date_time])
    }
    settext_date({
      ...text_date,
      text:"",
      date:dates,
      time:times
    })
  }
  return (
    <div className={styles.footer}>
        <div className={styles.text}>
          <textarea rows="3" name='text' value={text_date.text} onChange={(event)=>update_text(event)} className={styles.your_text} placeholder='Here’s the sample text for sample work'/>
          <input type='image' onClick={submit} className={styles.arrow} src={arrow}/>
        </div>
    </div>
  )
}

export default Footer
import React,{useEffect, useState} from 'react'
import styles from './Note.module.css'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import View_notes from '../View_note/View_notes'
import arrow from '../../assets/icon/arrow_to_home.svg'
import { useNavigate } from 'react-router-dom'
function Note() {
    const navigate=useNavigate()
    const file_detail=(useSelector((state) => state.File_save.filename))
    const color=(useSelector((state) => state.File_save.colour))
    const [name,setName]=useState(JSON.parse(localStorage.getItem("your_choice")))
    const file_info=JSON.parse(localStorage.getItem(name[0])) || []
    const [update_text,setupdate_text]=useState(file_info)
    useEffect(()=>{
        if(file_detail!==name[0]){
            setupdate_text(JSON.parse(localStorage.getItem(file_detail)))
        }
        setName([file_detail,color])
        setupdate_text(JSON.parse(localStorage.getItem(file_detail)))
    },[file_detail,color])
    useEffect(()=>{
        if(update_text?.length!==0){
            localStorage.setItem(name[0],JSON.stringify(update_text))
        }
    },[update_text])
    const short_form=()=>{
        const filename=name[0]?.split(" ")
        const firstname=filename[0]?.charAt(0).toUpperCase();
        const lastname=filename.length > 1? filename[1].charAt(0).toUpperCase():"";
        return firstname+lastname
    }
  return (
    <div className={styles.body}>
        <header className={styles.header}>
            <img src={arrow} className={styles.arrow} onClick={()=>navigate("/")}/>
            <div className={styles.circle} style={{background:name[1]}}>{short_form()}</div>
            <p className={styles.file_name}>{name[0]}</p>
        </header>
        <div className={styles.note_body} >
        <View_notes name={update_text} file_name={name[0]}/>
    </div>
        <footer>
            <Footer text={update_text} settext={setupdate_text}  name={name[0]}/>
        </footer>
    </div>
  )
}

export default Note
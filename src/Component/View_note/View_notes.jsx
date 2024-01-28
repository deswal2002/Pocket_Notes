import React from 'react'
import styles from './View_notes.module.css'
import dot from '../../assets/icon/dot.svg'
function View_notes(props) {
    const note=props.name || JSON.parse(localStorage.getItem(props.file_name))
    console.log("veiw")
    console.log(note)
    console.log("show")
  return (
    <div className={styles.body} >
        {note?.map((obj)=>(
            <div className={styles.box}>
                <p className={styles.tex}>{obj.text}</p>
                <div className={styles.time_date}>
                    <div className={styles.date}>{obj.date}</div>
                    <img src={dot} className={styles.date}/>
                    <div className={styles.date}>{obj.time}</div>
                </div>
            </div>
        ))}
    </div>
    
  )
}

export default View_notes
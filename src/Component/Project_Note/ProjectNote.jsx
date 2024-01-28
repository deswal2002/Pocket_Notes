import React,{useState,useEffect} from 'react'
import styles from './ProjectNote.module.css'
import create from "../../assets/icon/Ellipse 24.svg"
import CreateNote from '../Create_Note/CreateNote'
import Group_List from '../Group_List/Group_List'
function ProjectNote() {
  
  const allnew=JSON.parse(localStorage.getItem('new_add_group')) || []
  const [create_file,setcreate_file] = useState(false)
  const [add_group,setadd_group] = useState(allnew) 
  useEffect(()=>{
    localStorage.setItem('new_add_group',JSON.stringify(add_group))
    console.log(add_group)
  },[add_group])
  
  return (
    <>
    <div className={styles.body}>
        <div >
            <p className={styles.pocket}>Pocket Notes</p>
        </div>
        <span onClick={()=>setcreate_file(true)}>
            <img src={create} className={styles.create}/>
            <p className={styles.plus}>+</p>
        </span>
        {add_group.length ? <Group_List list={add_group}/> : <></>}
    </div>
    {create_file ? <CreateNote create_new_group={setcreate_file} add_new_group={add_group} setadd_new_group={setadd_group} />:<></>}
    
    </>
  )
}

export default ProjectNote
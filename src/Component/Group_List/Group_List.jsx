import React, { useEffect } from 'react'
import styles from './Group_List.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { update } from '../../FileSlice'
function Group_List(props) {
    const dispatch = useDispatch()
    const file_detail=(useSelector((state) => state.File_save.filename))
    const navigate=useNavigate()
    let filename_detail
    let show_group=props.list
    useEffect(()=>{
        dispatch(update())
    },[])
    const firstlast =(name)=>{
        const nameParts = name.split(" ");
        const firstName = nameParts[0].charAt(0).toUpperCase () ;
        const lastName = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase ()  : "";
        return firstName+lastName
    }
    const note=(filename,color)=>{
        localStorage.setItem('yourKey', 'new value');
        navigate("/notes")
        filename_detail=[filename,color]
        localStorage.setItem("your_choice",JSON.stringify(filename_detail))
        dispatch(update())
    }
  return (
    <div className={styles.show_list}>
        {show_group.map((obj)=>(
            <div className={styles.show_box} onClick={()=>note(obj.FileName,obj.colour)} style={{background:file_detail===obj.FileName?"rgba(47, 47, 47, 0.17)":""}}>
                <div className={styles.circle} style={{background:obj.colour}}>{firstlast(obj.FileName)}</div>
                <p className={styles.name} >{obj.FileName}</p>
            </div>
        ))}
    </div>
  )
}

export default Group_List
import React,{useState,useEffect,useRef} from 'react'
import styles from "./CreateNote.module.css"
import blue from "../../assets/icon/blue.svg"
import darkblue from "../../assets/icon/darkblue.svg"
import orange from "../../assets/icon/orange.svg"
import pink from "../../assets/icon/pink.svg"
import ligth_blue from "../../assets/icon/light_blue.svg"
import purple from "../../assets/icon/purple.svg"
function CreateNote(props) {
    const [file_name,setfile_name]=useState({
        FileName:'',
        colour:''
    })
    const [error,seterror] = useState({})
    const save_file=(event)=>{
        event.preventDefault();
        setfile_name({
            ...file_name,
            [event.target.name]:event.target.value
        }) 
    }
    const popRef = useRef(null);

    useEffect(() => {
        const close = (event) => {
            if (popRef.current && !popRef.current.contains(event.target)) {
                props.create_new_group(false) 
            }
        };
        document.addEventListener('mousedown', close);
        return () => {
            document.removeEventListener('mousedown', close);
        };
    }, []); 
    const submit = ()=>{
        event.preventDefault();
        const errors={}
        props.add_new_group?.map((obj)=>{
            if(obj.FileName===file_name.FileName){
                errors.same="Group Name is already exists"
            }
        })
       if(!file_name.FileName.trim().length){
           errors.FileName="Group Name is Requires"
       }
       if(!file_name.colour.trim().length){
           errors.colour="Colour is Requires"
       }
       seterror(errors)
        if(!Object.keys(errors).length){
            props.setadd_new_group([...props.add_new_group,file_name])
            props.create_new_group(false)  
            localStorage.setItem(file_name.FileName,JSON.stringify([]))
       }
    } 
  return (
    <div className={styles.create_body} >
        <div >
        {error.same?<p className={styles.error2}>{error.same}</p>:<></>}
        {error.FileName?<p className={styles.error}>{error.FileName}</p>:<></>}
        {error.colour?<p className={styles.error1}>{error.colour}</p>:<></>}
    </div>
        <div className={styles.create_box} ref={popRef}>
            <p>Create New group</p>
            
            <form className={styles.form}>
                <label>Group Name</label>
                <input name='FileName' type='text' placeholder='Enter group name' className={styles.text} onChange={(event)=>save_file(event)}/>
                <br />
                <label  >Choose colour</label>
                <input name="colour" value={"#B38BFA"} type="image" src={purple} className={styles.choose} onClick={(event)=>save_file(event)} />
                <input name="colour" value={"#FF79F2"} type='image' src={pink} className={styles.choose} onClick={(event)=>save_file(event)} />
                <input name="colour" value={"#43E6FC"} type='image' src={ligth_blue} className={styles.choose} onClick={(event)=>save_file(event)} />
                <input name="colour" value={"#F19576"} type='image' src={orange} className={styles.choose} onClick={(event)=>save_file(event)} />
                <input name="colour" value={"#0047FF"} type='image' src={darkblue} className={styles.choose} onClick={(event)=>save_file(event)} />
                <input name="colour" value={"#6691FF"} type='image' src={blue} className={styles.choose} onClick={(event)=>save_file(event)} />
                <br />
                <button onClick={submit} >Create</button>
            </form>
            
        </div>
    </div>
  )
}

export default CreateNote
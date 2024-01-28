import React from 'react'
import style from './Start.module.css'
import image from '../../assets/image/image-removebg-preview 1.png'
import lock from "../../assets/icon/lock.svg"
function Start() {
  return (
    <div className={style.body}>
        <div>
            <img src={image} className={style.image} />
            <p style={{
                color:"#000",
                fontfamily: "Roboto",
                fontSize: "50px",
                fontWeight: "700",
                marginLeft:"9rem"
            }}>Pocket Notes</p>
            <p style={{
                color: "#292929",
                fontfamily: "Roboto",
                fontSize: "22px",
                fontWeight: "500",
                width:"37rem"
            }}>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div style={{display:"flex",marginTop:"16%",gap:"0.5rem",marginLeft:"29%"}}>
                <img src={lock}/>
                <p style={{
                    color: "#292929",
                    fontfamily: 'Roboto',
                    fontSize: "22px",
                    fontWeight: "500",
                }}>end-to-end encrypted</p>
            </div>
        </div>
    </div>
  )
}

export default Start
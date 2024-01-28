import React, { useEffect } from 'react'
import ProjectNote from '../../Component/Project_Note/ProjectNote'
import Start from '../../Component/Start/Start'
import { useDispatch } from 'react-redux'
import { close_updates } from '../../FileSlice'
function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(close_updates())
  },[])
  return (
    <div style={{
        display:"flex"
    }}>
      <div style={{width:"24vw"}}>
      <ProjectNote/>
      </div> 
    <Start/>
    </div>
  )
}

export default Home
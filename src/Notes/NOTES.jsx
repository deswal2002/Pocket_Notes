import React from 'react'
import ProjectNote from '../Component/Project_Note/ProjectNote'
import Note from '../Component/Note/Note'
function NOTES() {
  return (
    <div style={{
        display:"flex"
    }}>
        <ProjectNote/>
        <Note />
    </div>
  )
}

export default NOTES
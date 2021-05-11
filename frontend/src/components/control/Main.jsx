import React, { useState, useEffect } from 'react'
import BugLog from './BugLog/BugLog'
import Editor from './BugEditor/Editor'
import { getLogs } from '../../adapters'

export default function Main () {
  const [buglog, setBuglog] = useState([])
  const [selectedBug, setSelectedBug] = useState('')

  const displayLog = async () => {
    try {
      const newBuglog = await getLogs()
      setBuglog(newBuglog.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    displayLog()
  }, [])

  const selectBug = (entry) => {
    console.log(`the bug is ${entry._id}`)
    setSelectedBug(entry)
  }

  return (
    <>
      <BugLog buglog={buglog} displayLog={displayLog} selectBug={selectBug} />
      <Editor displayLog={displayLog} selectedBug={selectedBug} />
    </>
  )
}

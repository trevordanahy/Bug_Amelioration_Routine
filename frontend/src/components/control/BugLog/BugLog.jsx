import React, { useState, useEffect } from 'react'
import Bug from './Bug'
import { getLogs } from '../../../adapters'
import { LogContainer, SectionTitle, Log } from '../../style/BugLog/BugLogStyles'

export default function BugLog () {
  const [buglog, setBuglog] = useState([])

  useEffect(() => {
    displayLog()
  }, [])

  const displayLog = async () => {
    const buglog = await getLogs()
    setBuglog(buglog.data)
  }

  return (
    <>
      <LogContainer>
        <SectionTitle>Logs</SectionTitle>
        <Log>
          {buglog.map((entry) => {
            return (<Bug key={entry._id} entry={entry} displayLog={displayLog} />)
          })}
        </Log>
      </LogContainer>
    </>

  )
}

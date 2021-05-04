import React, { useState, useEffect } from 'react'
import Bug from './Bug'
import { LogContainer, SectionTitle, Log } from '../../style/BugLog/BugLogStyles'

const axios = require('axios')

export default function BugLog () {
  const bugLogUrl = 'http://localhost:8000/log/buglog'
  const [logs, setLogs] = useState([])

  useEffect(() => {
    getLogs()
  }, [])

  const getLogs = async () => {
    axios.get(bugLogUrl, { withCredentials: true })
      .then((res) => {
        const newLogs = res.data
        console.log(newLogs)
        setLogs(newLogs)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <LogContainer>
        <SectionTitle>Logs</SectionTitle>
        <Log>
          {logs.map((entry) => {
            return (<Bug key={entry._id} entry={entry} />)
          })}
        </Log>
      </LogContainer>
    </>

  )
}

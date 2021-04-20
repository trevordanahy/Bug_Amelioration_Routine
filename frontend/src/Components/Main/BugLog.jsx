import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bug from './Bug'

const axios = require('axios')

const LogContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`
const SectionTitle = styled.h1`
  align-self: center;
`

const LoggerContainer = styled.div`
  margin: 10px;
  display: flex;
`
const Log = styled.div`
  border: solid 2px black;
  border-radius: 2%;
  flex-grow: 1;
`

export default function BugLog () {
  const bugLogUrl = 'http://localhost:8000/log/buglog'
  const [logs, setLogs] = useState([])

  useEffect(() => {
    getLogs()
  }, [])

  const getLogs = async () => {
    axios.get(bugLogUrl, { withCredentials: true })
      .then((res) => {
        const new_logs = res.data
        setLogs(new_logs)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      <LogContainer>
        <SectionTitle>Logs</SectionTitle>
        <Log>
          {logs.map((entry) => {
            return (
              <Bug key={entry._id} entry={entry} />
            )
          }
          )}
        </Log>
      </LogContainer>
      <LoggerContainer />
    </>

  )
}

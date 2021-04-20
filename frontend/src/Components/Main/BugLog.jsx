import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Bug from './Bug'

const axios = require('axios')

const LogContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.h1`
  align-self: center;
  margin: 10px;
`

const LoggerContainer = styled.div`
  margin: 10px;
  display: flex;
`

const Log = styled.div`
  margin: 10px;
  background: #DCD7CB;
  border: solid 2px black;
  box-shadow: -3px -3px 5px #1e1f1f;
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
        const newLogs = res.data
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

import React from 'react'
import Bug from './Bug'
import { LogContainer, SectionTitle, Log } from '../../style/BugLog/BugLogStyles'

export default function BugLog ({ buglog, displayLog, selectBug }) {
  return (
    <>
      <LogContainer>
        <SectionTitle>Logs</SectionTitle>
        <Log>
          {buglog.map((entry) => {
            return (
              <Bug
                key={entry._id}
                entry={entry}
                displayLog={displayLog}
                selectBug={selectBug}
              />
            )
          })}
        </Log>
      </LogContainer>
    </>

  )
}

import React, { useState } from 'react'
import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import {
  Container, BugBar, Indicator, BugTitle,
  RightDiv, BugDelete, DateCreated
} from '../../style/BugLog/BugStyles'
import { deleteBug } from '../../../adapters'
import BugCode from './BugCode'

dayjs.extend(utc)

export default function Bug ({ entry, displayLog, selectBug }) {
  const [showCode, setShowCode] = useState(false)

  function formatDate (datetime) {
    const utcDatetime = dayjs(datetime)
    const offset = utcDatetime.utcOffset()
    const userTZTime = utcDatetime.add(offset, 'm')
    const newDateTime = userTZTime.format('MM/DD/YYYY HH:mm')
    return newDateTime
  }

  const createdDate = formatDate(entry.created_date)

  const bugDelete = async () => {
    const res = await deleteBug(entry._id)
    console.log(res.data.detail)
    displayLog()
  }

  const displayCode = () => {
    setShowCode(!showCode)
  }

  return (
    <Container showCode={showCode} status={entry.is_fixed}>
      <BugBar tabIndex={0} onClick={displayCode}>
        <Indicator status={entry.is_fixed} />
        <BugTitle>{`${entry.app} | ${entry.error_type} (${entry.language})`}</BugTitle>
        <RightDiv>
          <DateCreated>{createdDate}</DateCreated>
          <BugDelete onClick={bugDelete}><b>X</b></BugDelete>
        </RightDiv>
      </BugBar>
      <BugCode entry={entry} showCode={showCode} selectBug={selectBug} />
    </Container>
  )
}

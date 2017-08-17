import combineRoutes from './combineRoutes'
import { _router as Account } from '../Account'
import { _router as AccountCollection } from '../AccountCollection'
import { _router as AccountMeeting } from '../AccountMeeting'
import { _router as AccountMessage } from '../AccountMessage'
import { _router as HistoryMeeting } from '../HistoryMeeting'
import { _router as LatestMeeting } from '../LatestMeeting'
import { _router as MeetingNews } from '../MeetingNews'
import { _router as PageNotFound } from '../PageNotFound'

export const routes = [
  Account,
  AccountCollection,
  AccountMeeting,
  AccountMessage,
  HistoryMeeting,
  LatestMeeting,
  MeetingNews,
  PageNotFound
]

export default combineRoutes(routes)

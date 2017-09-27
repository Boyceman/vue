import combineRoutes from './combineRoutes'
import { _router as Account } from '../Account'
import { _router as AccountCollection } from '../AccountCollection'
import { _router as AccountMeeting } from '../AccountMeeting'
import { _router as AccountMessage } from '../AccountMessage'
import { _router as HistoryMeeting } from '../HistoryMeeting'
import { _router as LatestMeeting } from '../LatestMeeting'
import { _router as LaunchMeeting } from '../LaunchMeeting'
import { _router as MeetingDetail } from '../MeetingDetail'
import { _router as MeetingNews } from '../MeetingNews'
import { _router as PageNotFound } from '../PageNotFound'
import { _router as demo } from '../demo'

export const routes = [
  Account,
  AccountCollection,
  AccountMeeting,
  AccountMessage,
  HistoryMeeting,
  LatestMeeting,
  LaunchMeeting,
  MeetingDetail,
  MeetingNews,
  PageNotFound,
  demo
]

export default combineRoutes(routes)

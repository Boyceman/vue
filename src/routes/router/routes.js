import combineRoutes from './combineRoutes'
import { _router as PageNotFound } from '../PageNotFound'
import { _router as LatestMeeting } from '../LatestMeeting'
import { _router as HistoryMeeting } from '../HistoryMeeting'

const routes = [
  PageNotFound,
  LatestMeeting,
  HistoryMeeting
]

export default combineRoutes(routes)

import combineRoutes from './combineRoutes'
import { _router as HistoryMeeting } from '../HistoryMeeting'
import { _router as LatestMeeting } from '../LatestMeeting'
import { _router as PageNotFound } from '../PageNotFound'

export const routes = [
  HistoryMeeting,
  LatestMeeting,
  PageNotFound
]

export default combineRoutes(routes)

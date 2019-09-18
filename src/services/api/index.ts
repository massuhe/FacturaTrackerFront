import api from './api'
import mockApi from '../../mock/api'

const useMock = true

const apiToExport = useMock ? mockApi : api

export default apiToExport

import { API, PATCH, GET, POST } from '../../../api'
import { ListBundleIdQuery, BundleIdsResponse } from './types'

export function listBundleIds(
    api: API,
    query: ListBundleIdQuery
): Promise<BundleIdsResponse> {
    return GET(api, '/bundleIds', { query })
}

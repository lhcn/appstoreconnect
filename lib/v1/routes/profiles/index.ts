import { API, DELETE, GET, POST } from '../../../api'
import {
    ListProfileQuery,
    ProfilesResponse,
    ProfileResponse,
    ProfileCreateRequest,
} from './types'

export function listProfiles(
    api: API,
    query: ListProfileQuery
): Promise<ProfilesResponse> {
    return GET(api, '/profiles', { query })
}

export function createProfile(
    api: API,
    body: ProfileCreateRequest
): Promise<ProfileResponse> {
    return POST(api, `/profiles`, { body })
}

export function deleteProfile(api: API, id: string): Promise<void> {
    return DELETE(api, `/profiles/${id}`)
}

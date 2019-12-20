import { API, PATCH, GET, POST } from '../../../api'
import {
    ListDeviceQuery,
    DevicesResponse,
    DeviceResponse,
    DeviceCreateRequest,
    DeviceUpdateRequest,
} from './types'

export function listDevices(
    api: API,
    query: ListDeviceQuery
): Promise<DevicesResponse> {
    return GET(api, '/devices', { query })
}

export function registerDevice(
    api: API,
    body: DeviceCreateRequest
): Promise<DeviceResponse> {
    return POST(api, `/devices`, { body })
}

export function updateDevice(
    api: API,
    id: string,
    body: DeviceUpdateRequest
): Promise<DeviceResponse> {
    return PATCH(api, `/devices/${id}`, { body })
}

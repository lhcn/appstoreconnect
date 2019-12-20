import { DocumentLinks, PagingInformation, ResourceLinks } from '../../paging'
import { DateTime } from 'luxon'
import { ResourceType } from '../../data'

type BundleIdPlatform = 'IOS' | 'MAC_OS'
type deviceClass =
    | 'APPLE_WATCH'
    | 'IPAD'
    | 'IPHONE'
    | 'IPOD'
    | 'APPLE_TV'
    | 'MAC'

type DeviceStatus = 'ENABLED' | 'DISABLED'
type ListDeviceQuerySortOptions =
    | 'id'
    | '-id'
    | 'name'
    | '-name'
    | 'platform'
    | '-platform'
    | 'status'
    | '-status'
    | 'udid'
    | '-udid'

type DeviceReturnFields =
    | 'addedDate'
    | 'deviceClass'
    | 'model'
    | 'name'
    | 'platform'
    | 'status'
    | 'udid'

export interface ListDeviceQuery {
    fields?: {
        devices: DeviceReturnFields[]
    }
    filter?: {
        id: string[]
        name: string[]
        platform: BundleIdPlatform[]
        status: DeviceStatus[]
        uuid: string[]
    }

    limit: number
    sort: ListDeviceQuerySortOptions[]
}

export interface DeviceAttributes {
    deviceClass: deviceClass
    model: string
    name: string
    platform: BundleIdPlatform
    status: DeviceStatus
    udid: string
    addedDate: DateTime
}

export interface Device {
    attributes: DeviceAttributes
    id: string
    type: string
    link: ResourceLinks
}

export interface DevicesResponse {
    data: Device[]
    links: DocumentLinks
    meta?: PagingInformation
}

export interface DeviceResponse {
    data: Device
    links: DocumentLinks
}

export interface DeviceCreateRequest {
    data: {
        attributes: {
            name: string
            platform: BundleIdPlatform
            udid: string
        }
        type: ResourceType<'devices'>
    }
}

export interface DeviceUpdateRequest {
    data: {
        attributes: {
            name: string
            platform: BundleIdPlatform
        }
        id: string
        type: ResourceType<'devices'>
    }
}

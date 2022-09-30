import { DocumentLinks, ResourceLinks } from '../../paging'
import { DateTime } from 'luxon'
import { ResourceType, Data } from '../../data'

type BundleIdPlatform = 'IOS' | 'MAC_OS'

type ProfileState = 'ACTIVATE' | 'INVALID'
type ListProfileQuerySortOptions =
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

type ProfileReturnFields =
    | 'addedDate'
    | 'deviceClass'
    | 'model'
    | 'name'
    | 'platform'
    | 'status'
    | 'udid'

type ProfileType =
    | 'IOS_APP_DEVELOPMENT'
    | 'IOS_APP_STORE'
    | 'IOS_APP_ADHOC'
    | 'IOS_APP_INHOUSE'
    | 'MAC_APP_DEVELOPMENT'
    | 'MAC_APP_STORE'
    | 'MAC_APP_DIRECT'
    | 'TVOS_APP_DEVELOPMENT'
    | 'TVOS_APP_STORE'
    | 'TVOS_APP_ADHOC'
    | 'TVOS_APP_INHOUSE'

export interface ListProfileQuery {
    fields?: {
        certifications: string[] // Possible values: certificateContent, certificateType, csrContent, displayName, expirationDate, name, platform, serialNumber
        devices: string[] // Possible values: addedDate, deviceClass, model, name, platform, status, udid
        profiles: string[] // Possible values: bundleId, certificates, createdDate, devices, expirationDate, name, platform, profileContent, profileState, profileType, uuid
        bundleIds: string[] // Possible values: bundleIdCapabilities, identifier, name, platform, profiles, seedId
    }
    filter?: {
        id?: string[]
        name: string[]
        profileState?: string[] // Possible values: ACTIVE, INVALID
    }
    include: string[] // Possible values: bundleId, certificates, devices

    limit: number | { certificates: number; devices: number }
    sort: string[]
}

export interface ProfileAttributes {
    name: string
    platform: BundleIdPlatform
    profileContent: string
    uuid: string
    createedDate: DateTime
    profileState: ProfileState
    profileType: ProfileType
    expirationDate: DateTime
}

export interface Profile {
    attributes: ProfileAttributes
    id: string
    relationships: ProfileRelationships
    type: ResourceType<'profiles'>
    link: ResourceLinks
}

export interface ProfilesResponse {
    data: Profile[]
    links: DocumentLinks
    included: any //@TODO
}

export interface DeviceItem {
    id: string
    type: ResourceType<'devices'>
}

export interface ProfileRelationships {
    bundleId: {
        data: Data<'bundleIds'>
    }
    certificates: {
        data: Data<'certificates'>[]
    }
    devices?: {
        data: Data<'devices'>[]
    }
}

export interface ProfileCreateRequest {
    data: {
        attributes: {
            name: string
            profileType: ProfileType
        }
        relationships: ProfileRelationships
        type: ResourceType<'profiles'>
    }
}

export interface ProfileResponse {
    data: Profile
    links: DocumentLinks
    included: any
}

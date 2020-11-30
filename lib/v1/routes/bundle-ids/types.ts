import {
    DocumentLinks,
    PagedDocumentLinks,
    PagingInformation,
    ResourceLinks,
} from '../../paging'
import { DateTime } from 'luxon'
import { ResourceType } from '../../data'

type BundleIdPlatform = 'IOS' | 'MAC_OS'

export interface ListBundleIdQuery {
    // https://developer.apple.com/documentation/appstoreconnectapi/list_bundle_ids
}

export interface BundleIdAttributes {
    identifier: string
    name: string
    platform: BundleIdPlatform
    seedId: string
}

export interface BundleId {
    attributes: BundleIdAttributes
    id: string
    relationships: any // https://developer.apple.com/documentation/appstoreconnectapi/bundleid/relationships
    type: string
    link: ResourceLinks
}

export interface BundleIdsResponse {
    data: BundleId
    links: PagedDocumentLinks
    meta: PagingInformation
    included: any
}

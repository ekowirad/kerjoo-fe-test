import { locationType } from "./location.type";

export const storeProvince = (data) => ({
    type: locationType.STORE_PROVICE,
    payload: data
})

export const storeRegency = (data) => ({
    type: locationType.STORE_REGENCY,
    payload: data
})


export const storeDistrict = (data) => ({
    type: locationType.STORE_DISTRICT,
    payload: data
})


export const storeVillage = (data) => ({
    type: locationType.STORE_VILLAGE,
    payload: data
})
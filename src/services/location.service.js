import { base_url } from "./config"

export const getProvincesService = (id = null) => {
    return fetch(`${base_url}/reference/provinces`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const getRegenciesService = (id) => {
    return fetch(`${base_url}/reference/regencies_of/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const getDistrictsService = (id) => {
    return fetch(`${base_url}/reference/districts_of/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const getVillagesService = (id) => {
    return fetch(`${base_url}/reference/villages_of/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}
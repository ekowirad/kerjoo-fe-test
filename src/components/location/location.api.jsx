import { getDistrictsService, getProvincesService, getRegenciesService, getVillagesService } from "../../services/location.service";

export const getProvincesApi= async () => {
    try {
        const ress = await getProvincesService()
        const data = await ress.json()
        return data

    } catch (error) {
        console.log(error);
    }
}
export const getRegenciesApi = async (id) => {
    try {
        const ress = await getRegenciesService(id)
        const data = await ress.json()
        return data

    } catch (error) {
        console.log(error);
    }
}
export const getVillagesApi = async (id) => {
    try {
        const ress = await getVillagesService(id)
        const data = await ress.json()
        return data

    } catch (error) {
        console.log(error);
    }
}
export const getDistrictsApi = async (id) => {
    try {
        const ress = await getDistrictsService(id)
        const data = await ress.json()
        return data

    } catch (error) {
        console.log(error);
    }
}
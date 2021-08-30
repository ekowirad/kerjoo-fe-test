import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeDistrict, storeProvince, storeRegency, storeVillage } from '../../redux/location/location.action'
import { locationSelector } from '../../redux/location/location.selector'
import { getDistrictsApi, getProvincesApi, getRegenciesApi, getVillagesApi } from './location.api'
import './location.style.scss'

export default function LocationComponent() {
    const dispatch = useDispatch()
    const locationState = useSelector(locationSelector)
    const [location, setlocation] = useState({
        provinces: [],
        regencies: [],
        districts: [],
        villages: [],
    })

    useEffect(() => {
        getProvinces()
    }, [])

    const getProvinces = async () => {
        const data = await getProvincesApi()
        setlocation({ ...location, provinces: data })
    }

    const getRegencies = async (id) => {
        const data = await getRegenciesApi(id)
        setlocation({ ...location, regencies: data })
    }

    const getDistricts = async (id) => {
        const data = await getDistrictsApi(id)
        setlocation({ ...location, districts: data })
    }

    const getVillages = async (id) => {
        const data = await getVillagesApi(id)
        setlocation({ ...location, villages: data })
    }


    const handleInput = (e) => {
        switch (e.target.name) {
            case 'province':
                dispatch(storeProvince(e.target.value))
                getRegencies(e.target.value)
                break;
            case 'regency':
                dispatch(storeRegency(e.target.value))
                getDistricts(e.target.value)
                break;
            case 'district':
                dispatch(storeDistrict(e.target.value))
                getVillages(e.target.value)
                break;
            case 'village':
                dispatch(storeVillage(e.target.value))
                break;

            default:
                return null;
        }
    }





    return (
        <div className="container-location">
            <div className="inner">

                <form className="row">
                    <div className="col-md-12"><h3 >Form Lokasi</h3></div>
                    <div class="form-group col-md-12">
                        <label>Provinsi</label>
                        <select onChange={handleInput} class="form-control" name="province">
                            <option selected disabled value="">Pilih Provinsi</option>
                            {
                                location.provinces.map((item, i) => {
                                    return <option value={item.id} key={item.id}>{item.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div class="form-group col-md-12">
                        <label>Kabupaten</label>
                        <select onChange={handleInput} class="form-control" name="regency">
                            <option selected disabled value="">Pilih Kabupaten</option>
                            {
                                location.regencies.map((item, i) => {
                                    return <option value={item.id} key={item.id}>{item.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div class="form-group col-md-12">
                        <label>Kecamatan</label>
                        <select onChange={handleInput} class="form-control" name="district">
                            <option selected disabled value="">Pilih Kecamatan</option>
                            {
                                location.districts.map((item, i) => {
                                    return <option value={item.id} key={item.id}>{item.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div class="form-group col-md-12">
                        <label>Desa</label>
                        <select onChange={handleInput} class="form-control" name="village">
                            <option selected disabled value="">Pilih Desa</option>
                            {
                                location.villages.map((item, i) => {
                                    return <option value={item.id} key={item.id}>{item.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div class="form-group col-md-12">
                        <p>Province: <b>{locationState.province}</b>, Regency: <b>{locationState.regency},</b> District: <b>{locationState.district}</b>, Village: <b>{locationState.village}</b></p>
                    </div>


                </form>
            </div>
        </div>
    )
}

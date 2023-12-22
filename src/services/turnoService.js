import axios from "axios"

const URL_BASE_API_TURNOS = "https://turnoxpress-api-v3.onrender.com/api/v3/appointment"

export class TurnosServices {
    
    getAllTurnos() {
        return axios.get(URL_BASE_API_TURNOS)
    }

}


import axios from "axios"

const URL_BASE_API_TURNOS = "http://localhost:8080/Home/turnos"

export class TurnosServices {
    
    getAllTurnos() {
        return axios.get(URL_BASE_API_TURNOS)
    }

}


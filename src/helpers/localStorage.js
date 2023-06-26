
export const getLocal = () => {

    return JSON.parse(localStorage.getItem("answers")) || [];
}


export const setLocal = (data) => {
    return localStorage.setItem("answers", JSON.stringify(data));
}

export const getVisitedLocal = () => {

    return JSON.parse(localStorage.getItem("visited")) || {
        sequiaMeteorologica: false,
        sequiaAgricola: false,
        sequiaSocioeconomica: false,
        sequiaHidrologica: false,
        planHidroNacional: false,
        planCuencaHidro: false,
        directivoMarca: false,
        programaReutilizacion: false,
        reutilizacion: false,
        embalses: false,
        suministro: false,
        score: 0
    };

}



export const setVisitedLocal = (data) => {
    return localStorage.setItem("visited", JSON.stringify(data));
}



export const getScoreLocal = () => {

    return JSON.parse(localStorage.getItem("score")) || {}
}


export const setScoreLocal = (data) => {
    return localStorage.setItem("score", JSON.stringify(data));
}

export const setUserLocal = (id, ) => {
    localStorage.setItem("id", JSON.stringify(id));

}
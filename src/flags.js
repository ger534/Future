const prodConfig = {
    api: "https://gabo534-api.herokuapp.com"
}

const devConfig = {
    api: "https://gabo534-api.herokuapp.com"
}

const localConfig = {
    api: "http://localhost:3001"
}

export const flags = () => {

    const isDev = /gabo534/
    const location = window.location.href
    const host = window.location.host

    if (isDev.exec(location)) {
        return devConfig
    } else if (host === 'localhost:3000') {
        return localConfig
    } else {
        return prodConfig
    }
}
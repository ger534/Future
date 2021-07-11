const prodConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview"
}

const preProdConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview"
}

const qaConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview"
}

const devConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview"
}

const localConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview"
}

export const flags = () => {

    const isQA = /qa/
    const isDev = /dev/
    const isPreProd = /preprod/
    const location = window.location.href
    const host = window.location.host

    if (isPreProd.exec(location)) {
        return preProdConfig
    } else if (isDev.exec(location)) {
        return devConfig
    } else if (isQA.exec(location)) {
        return qaConfig
    } else if (host === 'localhost:3000') {
        return localConfig
    } else {
        return prodConfig
    }
}
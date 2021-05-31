const prodConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview",
    moreAboutFuture: "https://www.cliniserve.de/en/ueber-uns/",
    moreAboutFuture: "https://github.com/Future/EngineeringTest"
}

const preProdConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview",
    moreAboutFuture: "https://www.cliniserve.de/en/ueber-uns/",
    moreAboutFuture: "https://github.com/Future/EngineeringTest"
}

const qaConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview",
    moreAboutFuture: "https://www.cliniserve.de/en/ueber-uns/",
    moreAboutFuture: "https://github.com/Future/EngineeringTest"
}

const devConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview",
    moreAboutFuture: "https://www.cliniserve.de/en/ueber-uns/",
    moreAboutFuture: "https://github.com/Future/EngineeringTest"
}

const localConfig = {
    api: "https://api.corona-zahlen.org",
    days: "90",
    ags: "09162",
    api_doc: "https://api.corona-zahlen.org/docs/",
    moreAboutCovid: "https://www.deutschland.de/en/corona-virus-germany-overview",
    moreAboutFuture: "https://www.cliniserve.de/en/ueber-uns/",
    moreAboutFuture: "https://github.com/Future/EngineeringTest"
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
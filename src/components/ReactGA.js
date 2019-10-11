import ReactGA from "react-ga"
const isProd = process.env.NODE_ENV === "production"
ReactGA.initialize("UA-45888094-1", { debug: false, testMode: !isProd })

export default ReactGA

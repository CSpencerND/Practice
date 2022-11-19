import "./App.css"
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import Rank from "./components/Rank/Rank"
import ParticleBG from "./components/Particles/Particles"
import SignIn from "./components/SignIn/SignIn"
import Registration from "./components/Registration/Registration"
import { useState } from "react"
// import Clarifai from "clarifai"

const App = () => {
    const [input, setInput] = useState("")
    const [imgURL, setImgURL] = useState("")
    const [box, setBox] = useState({})
    const [route, setRoute] = useState("signIn")
    const [isSignedIn, setIsSignedIn] = useState(false)

    /**
     * Clarifai Functions
     *
     * const app = new Clarifai.App({
     *     apiKey: "5e7a1bec799a4b1a8905c42d19f6a77e",
     * })
     *
     * const faceDetect = () => {
     *     return app.models
     *         .predict(Clarifai.FACE_DETECT_MODEL, input)
     *         .then((res) => calculateFaceBox(res))
     *         .catch((err) => console.log(err))
     * }
     *
     * const calculateFaceBox = (data) => {
     *     const box = data.outputs[0].data.regions[0].region_info.bounding_box
     *     const { left_col, top_row, right_col, bottom_row } = box
     *
     *     const image = document.getElementById("inputImage")
     *     const { width, height } = Number(image)
     *
     *     const faceBox = {
     *         leftCol: left_col * width,
     *         topRow: top_row * height,
     *         rightCol: width - right_col * width,
     *         bottomRow: height - bottom_row * height,
     *     }
     *
     *     setBox(faceBox)
     * }
     */

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const onSubmit = () => {
        setImgURL(input)
    }

    const onRouteChange = (route) => {
        if (route === "signOut") {
            setIsSignedIn(false)
        } else if (route === "home") {
            setIsSignedIn(true)
        }
        setRoute(route)
    }

    return (
        <div className="App">
            <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
            {route === "home" ? (
                <>
                    <Logo />
                    <Rank />
                    <ImageLinkForm
                        onInputChange={handleInputChange}
                        onSubmit={onSubmit}
                    />
                    <FaceRecognition imgURL={imgURL} box={box} />
                </>
            ) : route === "signIn" ? (
                <SignIn onRouteChange={onRouteChange} />
            ) : (
                <Registration onRouteChange={onRouteChange} />
            )}
            {/* <ParticleBG /> */}
        </div>
    )
}

export default App

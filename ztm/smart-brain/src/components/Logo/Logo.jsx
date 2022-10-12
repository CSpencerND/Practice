import Tilt from "react-parallax-tilt"
import "./Logo.css"

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt
                className="Tilt br2 shadow-2"
                style={{
                    height: 150,
                    width: 150,
                    /* backgroundColor: "darkgreen", */
                }}
            >
                <div className="Tilt-inner">
                    <h1>React Parallax Tilt 👀</h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo

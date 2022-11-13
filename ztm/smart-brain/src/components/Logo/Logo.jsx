import Tilt from "react-parallax-tilt"
import "./Logo.css"
import brain from "./icons8-brain-96.png"

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
                tiltMaxAngleX={30}
                tiltMaxAngleY={30}
            >
                <div className="Tilt-inner pa3">
                    <img
                        src={brain}
                        alt="brain logo"
                        style={{ paddingTop: "0.75rem" }}
                    ></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo

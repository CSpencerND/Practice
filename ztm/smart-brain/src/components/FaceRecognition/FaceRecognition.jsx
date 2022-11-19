import "./FaceRecognition.css"

const FaceRecognition = ({ imgURL, box }) => {
    const boxInset = {
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol
    }

    return (
        <div className="center ma">
            <div className="absolute mt3 mb3 br3">
                <img
                    src={imgURL}
                    id="inputImage"
                    alt=""
                    width="500px"
                    height="auto"
                />
                <div className="bounding-box" style={boxInset}></div>
            </div>
        </div>
    )
}

export default FaceRecognition

import qr from "../public/images/image-qr-code.png"
const QRScanner = () => {
    return ( 
        <>
            <div className="main-cont">
                <div className="qr-cont">
                    <img src={qr} alt="QR code" />
                </div>
                <div className="desc">
                    <h1>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </>
     );
}
 
export default QRScanner;
import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // DD >> HOUR, MINUTES, SECONDS , MS
        httpOnly:true, // Prevent XSS attack (Cross-Site Scripting Attacks)
        sameSite:"strict", // CSFR attacks Cross-Site Request Forgery Attacks
        secure:procces.env.NODE_ENV !== "devellopment",
    })
}

export default generateTokenAndSetCookie;
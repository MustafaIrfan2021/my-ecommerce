import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const { token } = req.headers;

    // Agar token nahi hai, toh error mat do, next() kar do taake guest checkout chale
    if (!token || token === 'null' || token === 'undefined') {
        return next(); 
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("Auth Error:", error.message);
        // Agar token kharab bhi hai, tab bhi guest samajh kar aage bhej do
        next(); 
    }
};

export default authUser;
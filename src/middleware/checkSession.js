const checkSession = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};

export default checkSession;
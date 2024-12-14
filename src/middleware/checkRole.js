const checkRole = (roles) => {
    return (req, res, next) => {
        if (!req.session || !req.session.user || !req.session.user.role) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const userRole = req.session.user.role;
        const allowedRoles = Array.isArray(roles) ? roles : [roles];

        if (!allowedRoles.includes(userRole)) {
            console.log(`Access denied for user with role: ${userRole}. UserID: ${req.session.user._id}`);
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    }
}

export default checkRole;
const rotateIdSession = (req, res, next) => {
    if (req.session) {
        req.session.regenerate((err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}

export default rotateIdSession;
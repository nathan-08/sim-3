module.exports = {
    getAllUsers: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.getAllUsers()
        .then((users) => res.status(200).send(users))
    },
    getFriends: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.getAllFriends()
        .then((friends) => res.status(200).send(friends))
    }
}
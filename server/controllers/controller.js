module.exports = {
    readHouses: (req, res) => {
        let db = req.app.get('db')

        db.get_houses().then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },

    addHouse: (req, res) => {
        let db = req.app.get('db')
        
        db.add_house(req.body).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },

    deleteHouse: (req, res) => {
        let db = req.app.get('db')
        let { id } = req.params

        db.delete_house(id).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    }
}
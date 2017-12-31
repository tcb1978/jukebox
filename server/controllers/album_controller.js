module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.create_album()
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params } = req
        dbInstance.read_album([ params.id ])
            .then(album => res.status(200).send(album))
            .catch(() => res.status(500).send())
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_albums()
            .then(albums => res.status(200).send(albums))
            .catch(() => res.status(500).send())
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req
        dbInstance.update_album([params.id, query.desc])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params } = req
        dbInstance.delete_album([ params.id ])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    }
}
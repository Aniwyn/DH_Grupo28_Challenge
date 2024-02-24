let db = require('../../database/models')

const controller = {
    applicant: async (req, res) => {
        const id = req.params.id
        const applicant = await db.Aspirante.findByPk(
            id,
            {
                include: [
                        {association: 'profesiones'}
                    ]
                }
                
                )
        return res.status(200).json({
            meta: {
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200,
            },
            data: applicant,
        })
    },
    applicants: async (req, res) => {
        const applicants = await db.Aspirante.findAll({
            include: [
                // {association: 'genders'},
                {association: 'profesiones'}
            ]
        })
        return res.status(200).json({
            meta: {
                total: applicants.length,
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200
            },
            data: applicants
        })
    },
    profession: async (req, res) => {
        const id = req.params.id
        const profession = await db.Profesiones.findByPk(
            id,
            {
                include: [
                    // {association: 'genders'},
                    {association: 'aspirantes'}
                ]
            }
        )
        return res.status(200).json({
            meta: {
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200
            },
            data: profession
        })
    },
    professions: async (req, res) => {
        const professions = await db.Profesiones.findAll(
            {
                include: [
                    // {association: 'genders'},
                    {association: 'aspirantes'}
                ]
            }
        )
        return res.status(200).json({
            meta: {
                total: professions.length,
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200
            },
            data: professions
        })
    }
}

module.exports = controller
let db = require('../../database/models')

const controller = {
    applicant: async (req, res) => {
        const id = req.params.id
        const applicant = await db.Applicant.findByPk(
            id,
            {
                include: [
                    {association: 'genders'},
                    {association: 'professiones'}
                ]
            }
            
        )
        return res.status(200).json({
            meta: {
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200
            },
            data: applicant
        })
    },
    applicants: async (req, res) => {
        const applicants = await db.Applicant.findAll({
            include: [
                {association: 'genders'},
                {association: 'professiones'}
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
    }
}

module.exports = controller
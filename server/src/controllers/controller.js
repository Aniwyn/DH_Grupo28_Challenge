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
    addApplicant: async (req, res) => {
        const datosFormulario = req.body
        console.log("DATOS SON",datosFormulario)
        const AspiranteNuevo = await db.Aspirante.create({
            dni:datosFormulario.dni,
            nombre: datosFormulario.nombre,
            apellido: datosFormulario.apellido,
            genero: datosFormulario.genero,
            fechaNacimiento: datosFormulario.fechaNacimiento,
            email: datosFormulario.email,
            telefono: datosFormulario.telefono,
            urlLinkedin: datosFormulario.urlLinkedin,
            imagen: "owo",
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: new Date(),
          });

          return res.status(200).json({
            meta: {
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200,
            },
            data: AspiranteNuevo,
        })
      },
      updateApplicant: async (req, res) => {
        // const resultValidation = validationResult(req);
        const resultValidation = {
            errors:0,
        };
        console.log("PARAMETROS DE PARAMS",req.params.id);

        if (resultValidation.errors.length > 0) {
            const id = req.params.id;
            db.Aspirante.findByPk(id, { raw: true })
                .then((result) => {
                    const mergedData = {
                        ...result,
                        ...req.body,
                    };
                    console.log("ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRR*************************")
                    res.render(path.join(__dirname, "../views/admin/editProduct.ejs"), {
                        errors: resultValidation.mapped(),
                        oldData: req.body,
                        productToEdit: mergedData,

                    });
                })
        } else {
            const aspirantId = req.params.id;
            // const productImage = req.file ? req.file.filename : "producto.png"; 
            const gettedAspirant = await db.Aspirante.findByPk(aspirantId);
            console.log("PARAMETROS DE EDIT",req.body);
            let productImage;
            if (req.file) {
                productImage = req.file.filename;
            } else {
                productImage = aspirantId.image;
            }
            const datosFormulario = req.body
            try {
                 await gettedAspirant.update({
                    dni:datosFormulario.dni,
                    nombre: datosFormulario.nombre,
                    apellido: datosFormulario.apellido,
                    genero: datosFormulario.genero,
                    fechaNacimiento: datosFormulario.fechaNacimiento,
                    email: datosFormulario.email,
                    telefono: datosFormulario.telefono,
                    urlLinkedin: datosFormulario.urlLinkedin,
                    imagen: "owo",
                    updatedAt: new Date(),
                }, {
                    where: {
                        id: aspirantId,
                    },
                });

                return res.status(200).json({
                    meta: {
                        url: req.protocol + '://' + req.get('host') + req.url,
                        status: 200,
                    },
                    data: gettedAspirant,
                })
            } catch (error) {
                return res.status(403).json({
                    meta: {
                        url: req.protocol + '://' + req.get('host') + req.url,
                        status: 403,
                    }
                })
            }
        }
    },
    removeApplicant: async (req, res) => {
        try {
            db.Aspirante.destroy({
                where: {
                    id: req.params.id,
                },
            });           
           return res.status(200).json({
               meta: {
                   url: req.protocol + '://' + req.get('host') + req.url,
                   status: 200,
               },
               data: "Aspirante removido exitosamente.",
           })
       } catch (error) {
           return res.status(403).json({
               meta: {
                   url: req.protocol + '://' + req.get('host') + req.url,
                   status: 403,
               }
           })
       }
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
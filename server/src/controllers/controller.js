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
            const professionId = req.params.id;
            // const productImage = req.file ? req.file.filename : "producto.png"; 
            const gettedProfession = await db.Aspirante.findByPk(professionId);
            console.log("PARAMETROS DE EDIT",req.body);
            let productImage;
            if (req.file) {
                productImage = req.file.filename;
            } else {
                productImage = professionId.image;
            }
            const datosFormulario = req.body
            try {
                 await gettedProfession.update({
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
                        id: professionId,
                    },
                });

                return res.status(200).json({
                    meta: {
                        url: req.protocol + '://' + req.get('host') + req.url,
                        status: 200,
                    },
                    data: gettedProfession,
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
    addProfession: async (req, res) => {
        const datosFormulario = req.body
        console.log("DATOS SON",datosFormulario)
        const ProfesionNueva = await db.Profesiones.create({
            nombre: datosFormulario.nombre,
            createdAt:  new Date(),
            updatedAt: new Date(),
          });

          return res.status(200).json({
            meta: {
                url: req.protocol + '://' + req.get('host') + req.url,
                status: 200,
            },
            data: ProfesionNueva,
        })
      },
      updateProfession: async (req, res) => {
        // const resultValidation = validationResult(req);
        const resultValidation = {
            errors:0,
        };
        console.log("PARAMETROS DE PARAMS",req.params.id);

        if (resultValidation.errors.length > 0) {
            const id = req.params.id;
            db.Profesiones.findByPk(id, { raw: true })
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
            const professionId = req.params.id;
            // const productImage = req.file ? req.file.filename : "producto.png"; 
            const gettedProfession = await db.Profesiones.findByPk(professionId);
            console.log("PARAMETROS DE EDIT",req.body);
            const datosFormulario = req.body
            try {
                 await gettedProfession.update({
                    nombre: datosFormulario.nombre,
                    updatedAt: new Date(),
                }, {
                    where: {
                        id: professionId,
                    },
                });

                return res.status(200).json({
                    meta: {
                        url: req.protocol + '://' + req.get('host') + req.url,
                        status: 200,
                    },
                    data: gettedProfession,
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
    removeProfession: async (req, res) => {
        try {
            db.Profesiones.destroy({
                where: {
                    id: req.params.id,
                },
            });           
           return res.status(200).json({
               meta: {
                   url: req.protocol + '://' + req.get('host') + req.url,
                   status: 200,
               },
               data: "Profesión removida exitosamente.",
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
let db = require('../../database/models')

const controller = {
    applicant: async (req, res) => {
        const id = req.params.id
        const applicant = await db.Applicants.findByPk(
            id,
            {
                include: [
                    {association: 'genders'},
                    {association: 'professions'}
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
    addApplicantA: async (req, res) => {
        
        let transaction;
        try {
            // Iniciar una transacción
            transaction = await db.sequelize.transaction();
            
            let productImage;
            if (req.file) {
                productImage = req.file.filename;
            } else {
                productImage = "producto.jpg";
            }
            const datosFormulario = req.body;
            console.log("DATOS SON", datosFormulario, req.file);
            
            const AspiranteNuevo = await db.Aspirante.create({
                dni: datosFormulario.dni,
                nombre: datosFormulario.nombre,
                apellido: datosFormulario.apellido,
                genero: datosFormulario.genero,
                fechaNacimiento: datosFormulario.fechaNacimiento,
                email: datosFormulario.email,
                telefono: datosFormulario.telefono,
                urlLinkedin: datosFormulario.urlLinkedin,
                imagen: productImage,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, { transaction });
    
            const selectedProfessions = Array.isArray(req.body.Professions)
                ? req.body.Professions
                : [req.body.Professions];
    
                for (const professionId of selectedProfessions) {
                    // Verificar si professionId es un número válido
                    if (!isNaN(professionId)) {
                        const id = parseInt(professionId);
                        const profesion = await db.Profesiones.findByPk(id, { transaction });
                
                        if (profesion) {
                            // Asociar las profesiones al aspirante nuevo
                            await AspiranteNuevo.addProfesiones(profesion, { transaction });
                            console.log(`Profesion ${profesion.nombre} asociada al aspirante nuevo.`);
                        } else {
                            console.log(`No se encontró la profesión con ID ${id}.`);
                        }
                    } else {
                        console.log(`ID de profesión inválido: ${professionId}`);
                    }
                }
                
    
            // Commit (confirmar) la transacción si todas las operaciones se completaron con éxito
            await transaction.commit();
    
            return res.status(200).json({
                meta: {
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 200,
                },
                data: AspiranteNuevo,
            });
        } catch (error) {
            // Si se produce un error, revertir (rollback) la transacción
            if (transaction) await transaction.rollback();
    
            console.log(error);
            return res.status(403).json({
                meta: {
                    url: req.protocol + '://' + req.get('host') + req.url,
                    status: 403,
                    error: error,
                }
            });
        }
    }, 
    addApplicant: async (req, res) => {
        const datosFormulario = req.body
        console.log("DATOS SON",datosFormulario)
        let productImage;
            if (req.file) {
                productImage = req.file.filename;
            } else {
                productImage = "producto.jpg";
            }
        const AspiranteNuevo = await db.Applicants.create({
            dni:parseInt(datosFormulario.dni),
            name: datosFormulario.name,
            last_name: datosFormulario.last_name,
            gender: datosFormulario.gender,
            birth_date: datosFormulario.birth_date,
            email: datosFormulario.email,
            phone: datosFormulario.phone,
            url_linkedin: datosFormulario.url_linkedin,
            gender_id: datosFormulario.gender_id,
            image: productImage,
          });

          const selectedProfessions = Array.isArray(req.body.Professions)
                    ? req.body.Professions
                    : [req.body.Professions];

                for (const professionId of selectedProfessions) {
                    const profesion = await db.Professions.findByPk(parseInt(professionId));

                    if (profesion) {
                        // Asociar las categorías al producto creado
                        await AspiranteNuevo.addProfessions(profesion);
                        console.log(`Profesion ${profesion.name} asociada al aspirante nuevo.`);
                    } else {
                        console.log(`No se encontró la profesión con ID ${professionId}.`);
                    }
                }

        return res.redirect(req.get('referer')+"applicants");
      },
      updateApplicant: async (req, res) => {
        // const resultValidation = validationResult(req);
        const resultValidation = {
            errors:0,
        };
        console.log("PARAMETROS DE PARAMS",req.params.id);

        if (resultValidation.errors.length > 0) {
            const id = req.params.id;
            const result = await db.Aspirante.findByPk(id, { raw: true })
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
        } else {
            const professionId = req.params.id;
            // const productImage = req.file ? req.file.filename : "producto.png"; 
            const gettedApplicant = await db.Applicants.findByPk(professionId,
                {
                    include: [
                        {association: 'genders'},
                        {association: 'professions'}
                    ]
                });
            console.log("---------------------------------------------------");
            console.log("PARAMETROS DE EDIT",req.body);
            console.log("USER",gettedApplicant);
            let productImage;
            if (req.file) {
                productImage = req.file.filename;
            } else {
                productImage = professionId.image;
            }
            const datosFormulario = req.body
            try {
                // await gettedApplicant.update({
                //     dni: datosFormulario.dni,
                //     nombre: datosFormulario.name,
                //     apellido: datosFormulario.last_name,
                //     genero: datosFormulario.gender,
                //     fechaNacimiento: datosFormulario.birth_date,
                //     email: datosFormulario.email,
                //     telefono: datosFormulario.phone,
                //     urlLinkedin: datosFormulario.url_linkedin,
                //     gender_id: datosFormulario.gender_id,
                //     imagen: "owo",
                // });
                await gettedApplicant.update({
                    ...datosFormulario
                });
                
                const selectedProfessions = Array.isArray(req.body.Professions)
                    ? req.body.Professions
                    : [req.body.Professions];
                
                // Obtener las profesiones asociadas actualmente al aspirante
                const currentProfessions = await gettedApplicant.getProfessions();
                console.log(currentProfessions)
                
                // Eliminar las profesiones que no vienen en la solicitud de actualización
                for (const profession of currentProfessions) {
                    console.log("ESTA EN LAS PROFESIONES?:",!selectedProfessions.includes(profession.id.toString()))
                    if (!selectedProfessions.includes(profession.id.toString())) {
                        await gettedApplicant.removeProfessions(profession);
                        console.log(`Profesion ${profession.nombre} eliminada del aspirante actualizado.`);
                    }
                }
                console.log("TRAS ELIMINAR QUEDA",currentProfessions)
                
                // Asociar las nuevas profesiones enviadas en la solicitud
                for (const professionId of selectedProfessions) {
                    const profesion = await db.Professions.findByPk(parseInt(professionId));
                
                    if (profesion) {
                        // Asociar las categorías al producto actualizado
                        await gettedApplicant.addProfessions(profesion);
                        console.log(`Profesion ${profesion.name} asociada al aspirante actualizado.`);
                    } else {
                        console.log(`No se encontró la profesión con ID ${professionId}.`);
                    }
                }
                
                const updatedApplicant = await db.Applicants.findByPk(professionId,
                    {
                        include: [
                            {association: 'genders'},
                            {association: 'professions'}
                        ]
                    });

                return res.status(200).json({
                    meta: {
                        url: req.protocol + '://' + req.get('host') + req.url,
                        status: 200,
                    },
                    data: updatedApplicant,
                });
                
            } catch (error) {
                console.log(error)
                return res.status(403).json({
                    meta: {
                        url: req.protocol + '://' + req.get('host') + req.url,
                        status: 403,
                        error:error,
                    }
                })
            }
        }
    },
    removeApplicant: async (req, res) => {
        try {
            db.Applicants.destroy({
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
        const applicants = await db.Applicants.findAll({
            include: [
                {association: 'genders'},
                {association: 'professions'}
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
        const profession = await db.Professions.findByPk(
            id,
            {
                include: [
                    // {association: 'genders'},
                    {association: 'applicants'}
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
        const ProfesionNueva = await db.Professions.create({
            name: datosFormulario.name
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
            const result = await db.Profesiones.findByPk(id, { raw: true })
            const mergedData = {
                ...result,
                ...req.body,
            };
            res.render(path.join(__dirname, "../views/admin/editProduct.ejs"), {
                errors: resultValidation.mapped(),
                oldData: req.body,
                productToEdit: mergedData,

            });
        } else {
            const professionId = req.params.id;
            const gettedProfession = await db.Professions.findByPk(professionId);
            console.log("PARAMETROS DE EDIT",req.body);
            const datosFormulario = req.body
            try {
                 await gettedProfession.update({
                    ...datosFormulario
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
            db.Professions.destroy({
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
        const professions = await db.Professions.findAll(
            {
                include: [
                    {association: 'applicants'}
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
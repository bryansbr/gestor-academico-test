-- -----------------------------------------------------
-- TABLA PERSONA
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Persona`
              (`id_persona`, `nombre`, `apellido`, `fech_nac`, `genero`, `correo`, `direccion`, 
              `celular`, `nacionalidad`, `nom_usuario`, `contrasena`, `creado_en`)
VALUES (1234567, 'Oscar', 'Bedoya', '1980-08-07', 'M', 'oscar.bedoya@ucalle.edu.co', 
       'Calle 100 # 10-05', 3152679201, 'Colombiano', 'oscarfbl', SHA('oscarbed123'), '2015-07-17');

INSERT INTO `u_calle`.`Persona`
              (`id_persona`, `nombre`, `apellido`, `fech_nac`, `genero`, `correo`, `direccion`, 
              `celular`, `nacionalidad`, `nom_usuario`, `contrasena`, `creado_en`)
VALUES (7654321, 'Bryan', 'Biojo', '1997-08-19', 'M', 'bryan.biojo@ucalle.edu.co', 
       'Cra 25 # 5C-17', 3156649362, 'Colombiano', 'bryansbr', SHA('profbryan18'), '2018-02-05');

INSERT INTO `u_calle`.`Persona`
              (`id_persona`, `nombre`, `apellido`, `fech_nac`, `genero`, `correo`, `direccion`, 
              `celular`, `nacionalidad`, `nom_usuario`, `contrasena`, `creado_en`)
VALUES (3423726, 'Guillermo', 'Hernandez', '1983-12-27', 'M', 'guillermo.hernandez@ucalle.edu.co', 
       'Cra 86 # 80-10', 3173483240, 'Colombiano', 'guillermohnz', SHA('profguillermo18'), '2018-02-05');

INSERT INTO `u_calle`.`Persona`
              (`id_persona`, `nombre`, `apellido`, `fech_nac`, `genero`, `correo`, `direccion`, 
              `celular`, `nacionalidad`, `nom_usuario`, `contrasena`, `creado_en`)
VALUES (5842219, 'Monica', 'Moreno', '1988-06-02', 'F', 'monica.moreno@ucalle.edu.co', 
       'Calle 27 # 35-07', 3167987542, 'Colombiano', 'mariammg', SHA('profmonica13'), '2013-04-27');

INSERT INTO `u_calle`.`Persona`
              (`id_persona`, `nombre`, `apellido`, `fech_nac`, `genero`, `correo`, `direccion`, 
              `celular`, `nacionalidad`, `nom_usuario`, `contrasena`, `creado_en`)
VALUES (2345437, 'Lina', 'Ruiz', '1993-05-13', 'F', 'lina.ruiz@ucalle.edu.co', 
       'Av 2N # 02-23', 3203915382, 'Colombiano', 'linavrm', SHA('proflina15'), '2015-05-20');

-- -----------------------------------------------------
-- TABLA ADMINISTRADOR
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Administrador` (`id_adm`, `id_persona`) VALUES (1, 1234567);

-- -----------------------------------------------------
-- TABLA PROFESOR
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Profesor`
              (`id_profesor`, `profesion`, `id_persona`, `id_adm`)
VALUES (707, 'Ingeniero de Sistemas', 7654321, 1);

INSERT INTO `u_calle`.`Profesor`
              (`id_profesor`, `profesion`, `id_persona`, `id_adm`)
VALUES (523, 'Ingeniero de Sistemas', 3423726, 1);

INSERT INTO `u_calle`.`Profesor`
              (`id_profesor`, `profesion`, `id_persona`, `id_adm`)
VALUES (351, 'Ingeniera Industrial', 2345437, 1);
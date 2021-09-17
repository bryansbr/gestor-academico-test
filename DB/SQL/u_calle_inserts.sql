-- -----------------------------------------------------
-- TABLA PERSONA
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Persona`
       (`id_persona`, `nombre`, `apellido`, `fech_nac`, `genero`, `correo`, `direccion`, 
       `celular`, `nacionalidad`, `nom_usuario`, `contrasena`, `creado_en`)

VALUES 
       (2403112, 'Gregorio', 'Soteldo', '1990-01-17', 'M', 'gregorio.soteldo@ucalle.edu.co', 
              'Cll 13 # 80-12', 3184357389, 'VEN', 'gregoriosd', SHA('profsoteldo19'), '2019-03-21'),

       (5755754, 'Luis', 'Caicedo', '2002-06-29', 'M', 'luis.caicedo@ucalle.edu.co', 
              'Cra 100 A oeste 1c-41', 3184335890, 'COL', 'luispc', SHA('1007560Luis'), '2015-05-20'),
              
       (2626266, 'Darwin', 'Alvarez', '2003-03-15', 'M', 'darwin.alvarez@ucalle.edu.co', 
              'Av 6 oeste 41-49', 3127231185, 'COL', 'darwinav', SHA('Nomeimporta.com'), '2021-09-10'),

       (1234567, 'Oscar', 'Bedoya', '1980-08-07', 'M', 'oscar.bedoya@ucalle.edu.co', 
              'Cll 100 # 10-05', 3152679201, 'COL', 'oscarbl', SHA('oscarbed123'), '2015-07-17'),

       (7654312, 'Cristiano', 'Ronaldo', '1985-02-05', 'M', 'cristiano.ronaldo@ucalle.edu.co', 
              'Cll 100 # 80-110', 3134576534, 'POR', 'cronaldo', SHA('elbichocr7'), '2009-07-07'),

       (7654321, 'Bryan', 'Biojo', '1997-08-19', 'M', 'bryan.biojo@ucalle.edu.co', 
              'Cra 25 # 5C-17', 3156649362, 'COL', 'bryanbr', SHA('profbryan18'), '2018-02-05'),

       (3423726, 'Guillermo', 'Hernandez', '1983-12-27', 'M', 'guillermo.hernandez@ucalle.edu.co', 
              'Cra 86 # 80-10', 3173483240, 'COL', 'guillermohz', SHA('profguillermo18'), '2018-02-05'),

       (5842219, 'Monica', 'Moreno', '1988-06-02', 'F', 'monica.moreno@ucalle.edu.co', 
              'Cll 27 # 35-07', 3167987542, 'COL', 'monicamg', SHA('profmonica13'), '2013-04-27'),

       (2345437, 'Lina', 'Ruiz', '1993-05-13', 'F', 'lina.ruiz@ucalle.edu.co', 
              'Av 2N # 02-23', 3203915382, 'COL', 'linavr', SHA('proflina15'), '2015-05-20'),

       (1264457, 'Antonia', 'Rodriguez', '1985-06-13', 'F', 'antonia.rodriguez@ucalle.edu.co', 
              'Cll 110 # 20-37', 3224514381, 'ESP', 'antoniarp', SHA('profantonia11'), '2011-01-02'),

       (1304560, 'Carla', 'Venegas', '1994-09-16', 'F', 'carla.venegas@ucalle.edu.co', 
              'Trv 103 # 44-17', 3111234567, 'CHL', 'carlavs', SHA('profcarla20'), '2020-08-12'),

       (2305030, 'Richard', 'Aguirre', '1970-06-20', 'M', 'richard.aguirre@ucalle.edu.co', 
              'Cll 86 # 57-13', 3002304571, 'COL', 'richardac', SHA('profrichard07'), '2021-05-24'),

       -- EST
       (3921028, 'Mariana', 'Rosario', '1999-02-19', 'F', 'mariana.rosario@ucalle.edu.co', 
              'Cra 1 # 10-16', 3024832013, 'VEN', 'marianarb', SHA('semeolvido2021'), '2021-05-24'),

       (8674843, 'Nicolas', 'Quintero', '2001-05-03', 'M', 'nicolas.quintero@ucalle.edu.co', 
              'Dig 25 # 12-09', 3046859271, 'COL', 'nicolasqp', SHA('nicolasq21'), '2021-05-24'),

       (3230911, 'Aurimar', 'Suarez', '1997-10-27', 'F', 'aurimar.suarez@ucalle.edu.co', 
              'Cll 30 # 30-02', 3103493121, 'VEN', 'aurimarst', SHA('aurimars21'), '2021-05-24'),

       (5388785, 'Kevin', 'Perdomo', '2000-12-08', 'M', 'kevin.perdomo@ucalle.edu.co', 
              'Cra 56 # 12-21', 3156936353, 'COL', 'kevinjp', SHA('kevinp21'), '2021-05-24'),

       (4346337, 'Valeria', 'Padilla', '2002-07-21', 'F', 'valeria.padilla@ucalle.edu.co', 
              'Cra 56 # 12-22', 3158727567, 'COL', 'valeriapp', SHA(' valeriap21'), '2021-05-24'),

       (4781242, 'Snaider', 'Pardo', '1998-08-31', 'M', 'snaider.pardo@ucalle.edu.co', 
              'Cra 30 # 33-33', 3226153354, 'COL', 'snaiderpq', SHA('snaiderp21'), '2021-05-24'),

       (6563465, 'Monica', 'Materano', '1997-08-20', 'F', 'monica.materano@ucalle.edu.co', 
              'Cra 80 # 70-16', 3123979419, 'VEN', 'monicamc', SHA('monicam21'), '2021-05-24'),

       (1976918, 'Tatiana', 'Caracas', '1997-11-15', 'F', 'tatiana.caracas@ucalle.edu.co', 
              'Cra 80 # 60-20', 3122795666, 'COL', 'tatianacv', SHA('tatianac21'), '2021-05-24'),

       (3983655, 'Andres', 'Flores', '2003-12-21', 'M', 'andres.flores@ucalle.edu.co', 
              'Calle 98 # 14-11', 3004562378, 'PER', 'andresfg', SHA('andresf20'), '2020-02-05'),

       (2858144, 'Sophia', 'Walker', '2004-08-10', 'F', 'sophia.walker@ucalle.edu.co', 
              'Calle 117 # 30-20', 3156648790, 'USA', 'sophiaw', SHA('sophiaw19'), '2019-05-24');

-- -----------------------------------------------------
-- TABLA ADMINISTRADOR
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Administrador` (`id_adm`, `id_persona`)
VALUES 
       (1, 1234567),
       (2, 7654312);

-- -----------------------------------------------------
-- TABLA PROFESOR
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Profesor`
       (`id_profesor`, `profesion`, `id_persona`, `id_adm`)
VALUES 
       (502, 'HIST', 2403112, 1),
       (707, 'ING. SIS', 7654321, 1),
       (523, 'ING. SIS', 3423726, 1),
       (351, 'ING. IND', 2345437, 1),
       (176, 'MATM', 1264457, 1),
       (897, 'MEDI', 1304560, 1),
       (095, 'FIS', 2305030, 1);

-- -----------------------------------------------------
-- TABLA PROGRAMA ACADÉMICO
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Programa_Academico` 
       (`id_progr`, `nom_progr`, `abrv_progr`, `jornada`)
VALUES
       (3743, 'Ingenieria de Sistemas', 'SIS', 'DIU'),
       (3751, 'Ingenieria Industrial', 'IND', 'DIU'),
       (2635, 'Tecnologia en Atencion Prehospitalaria', 'TAP', 'NOC'),
       (3660, 'Medicina', 'MED', 'DIU'),
       (3146, 'Fisica', 'FIS', 'DIU');

-- -----------------------------------------------------
-- TABLA ESTUDIANTE
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Estudiante` 
       (`id_estudiante`, `id_persona`, `id_progr`)
VALUES
       (2124087, 3921028, 3743),
       (2110010, 8674843, 3751),
       (2135580, 3230911, 3743),
       (2143027, 5388785, 2635),
       (2170013, 4346337, 3751),
       (2112345, 4781242, 2635),
       (2123044, 6563465, 2635),
       (2150587, 1976918, 3660),
       (2037890, 3983655, 3146),
       (1929368, 2858144, 3146);

-- -----------------------------------------------------
-- TABLA ASIGNATURA
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Asignatura` 
       (`id_asign`, `nom_asign`, `id_profesor`, `id_persona`, `id_progr`)
VALUES
       (10, 'Introduccion a la Ingenieria Industrial', 351, 2345437, 3751),
       (17, 'Fundamentos de Programacion', 707, 7654321, 3743),
       (12, 'Fundamentos de Fisica Mecanica', 095, 2305030, 3743);

-- -----------------------------------------------------
-- TABLA NOTA
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Nota` 
       (`id_nota`, `calificacion`)
VALUES
       (121, 5.00);

-- -----------------------------------------------------
-- TABLA COLOCA
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Coloca` 
       (`id_nota`, `id_profesor`)
VALUES
       (121, 095);

-- -----------------------------------------------------
-- TABLA CURSA
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Cursa` 
       (`id_estudiante`, `id_asign`)
VALUES
       (1929368, 12);

-- -----------------------------------------------------
-- TABLA TIENE
-- -----------------------------------------------------

INSERT INTO `u_calle`.`Tiene` 
       (`id_asign`, `id_nota`, `id_estudiante`)
VALUES
       (12, 121, 1929368);
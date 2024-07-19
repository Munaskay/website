import express from 'express';
import fs from 'fs';
import db from '../../db.json';


const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

router.post('/login', (req, res) => {
  let database = db as any;
  
  if (database[req.body.userEmail]) {
    res.json({
      error: false,
      data: database[req.body.userEmail],
    });
  } else {
    res.json({
      error: true,
      message: 'El correo o contraseña es invalido',
    });
  }

});


router.post('/register', (req, res) => {
  
  let database = db as any;

  if (database[req.body.userEmail]) {
    res.json({
      error: true,
      message: 'ya existe es correo',
    });
  } else {
    database[req.body.userEmail] = {
      password: req.body.userPassword,
      verify: false,
    };
  }

  console.log(db);
  

  fs.writeFileSync('./db.json', JSON.stringify(database, null, 2));
  res.json({
    error: false,
    message: 'Registrado correctamente',
  });

});

export default router;

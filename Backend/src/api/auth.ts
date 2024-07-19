import express from 'express';
import { db } from '../db';


const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

router.post('/login', async (req, res) => {
  
  // SELECT * from user where email = 'sosari@asd.com';
  const user = await db.user.findFirst({
    where: {
      email: req.body.userEmail,
    },
  });

  if (user) {
    res.json({
      error: false,
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } else {
    res.json({
      error: true,
      message: 'correo o contraseña invalida',
    });
  }

});


router.post('/register', async (req, res) => {
  
  const user = await db.user.create({
    data: {
      email: req.body.userEmail,
      name: req.body.userEmail.split('@')[0],
      password: req.body.userEmail,
    },
  });

  // INSERT INTO users(email, password, name) values('sasori@asdas.com', 'asdasdas', 'sasori');
  

  res.json({
    error: false,
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });

});

export default router;

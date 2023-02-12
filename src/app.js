const express = require('express');
const config = require('./config');
const cors = require('cors')

// const authRouter = require('./auth/authRoutes').router;
const userRouter = require('./users/usersRoutes').router;
const cityRouter = require('./cities/cityRoutes').router;

const app = express();

app.use(cors())
app.use(express.json())

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

//? Administrador rutas de usuarios
app.use('/api/v1', userRouter)

//? Administrar rutas de ciudades
app.use('/api/v1', cityRouter)

// app.use('/api/v1/auth', authRouter)

module.exports = {
    app,
};

const express = require('express');
const router = express.Router();

const mysqlConnection = require('../basedatos');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err,rows, fields) => {
        if (!err) {
            res.json(rows);
        }
        else {
            console.log(err);
        }
    })
})

router.post('/registro', (req, res) => {
    const { nombre, contraseña } = req.body;

    const sql = 'INSERT INTO usuario (nombre, contraseña) VALUES (?, ?)';
    
    mysqlConnection.query(sql, [nombre, contraseña], (err, result) => {
        if (!err) {
            res.json({ status: 'nuevo usuario agregado' });
        } else {
            console.log(err);
            res.status(500).json({ message: 'Error al agregar nuevo usuario' });
        }
    });
});

router.post('/usuariosR', (req, res) => {
    const { nombre, contraseña } = req.body;
    
    // Verificar si el cliente existe en la base de datos
    const verificarCliente = 'SELECT * FROM usuario WHERE nombre = ? AND contraseña = ?';

    mysqlConnection.query(verificarCliente, [nombre, contraseña], (err, rows, fields) => {
        if (!err) {
            if (rows.length > 0) {
                res.status(200).json({ message: "Bienvenido" });
            } else {
                res.status(404).json({ message: "Error, no estás registrado" });
            }
        } else {
            console.error(err);
            res.status(500).json({ message: "Error en la verificación del cliente" });
        }
    });
});

module.exports = router;
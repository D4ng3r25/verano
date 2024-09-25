import express from 'express';
/*
 aqui importaremos el script que tenga todas las funciones necesarias para el funciuonemiento de la pagina web
 */
const router1 = express.Router();

router1.get('/',(req,res)=>{ /*el req y el res son los parámetros*/ 
    /*esto representa una funcion definida dentro del los parámetros del get */
    res.render('main'); /*solo ponemos el nombre de la pagina porque en el app se ha indicado en cuales carpetas se ha de buscar*/ 
    /*cosa que aqui solo ponemos el nombre y ya */
})

router1.get('/carta',(req,res)=>{ /*Esto será la resonsable de generar el html carta cuando se le haga clic a un 'a' que mande esa solicitud*/ 
    res.render('carta');
})

router1.get('/main',(req,res)=>{
    res.render('main');
})

router1.get('/reserva',(req,res)=>{
    res.render('reserva');
})

export default router1;
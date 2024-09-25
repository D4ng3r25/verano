import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import router1 from'./router1.js'; /*con esto estamos importando la constante del script router1,js que hace de router*/ 
const app = express();

app.set('views', __dirname + '/../paginas');/*esto buscará las páinas de acuerdo en donde se lo indiques, en este caso hemos puesto que lo busque en pagina / Configuramos la ruta de vistas para incluir tanto la carpeta views como paginas. Esto permite que Express busque plantillas HTML en ambas carpetas.*/ 
app.set('view engine', 'html');
app.engine('html', mustacheExpress(), "html");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../estaticos'));


app.use('/', router1);/*Las solicitudes con'/' serán procesadas con el router1*/ 

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

import * as express from 'express';
import { urlencoded, json } from 'body-parser';
import { createUser, addToLine, findPosition, showLine, filterLine, popLine } from './user.service';
import * as swaggerUi from 'swagger-ui-express';
let swaggerDocument = require('./swagger.json');

let app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function (req, res) {
  res.status(200).send('API running...');
});

app.post('/createUser', function (req: express.Request, res: express.Response) {
  try {
    const funcResponse = createUser(req.body.name, req.body.email, req.body.gender);    
    res.status(200).send(funcResponse);
  } catch (error) {
    if (error.message === 'param-not-found') {
      res.status(422).send({error: 'Name, email and gender are mandatory parameters.'});
    } else if (error.message === 'user-exists') {
      res.status(409).send({error: 'A user with the same email already exists.'});
    } else {
      res.status(500).send({error: 'Internal server error.'});
    }
  }
  
});

app.post('/addToLine', function (req: express.Request, res: express.Response) {
  try {
    const funcResponse = addToLine(req.body.id);
    res.status(200).send({linePos: funcResponse});    
  } catch (error) {
    if (error.message === 'user-exists') {
      res.status(409).send({error: 'A user with the same id already exists.'});
    }
  }
});

app.get('/findPosition', function (req: express.Request, res: express.Response) {
  const funcResponse = findPosition(req.query.email);
  res.status(200).send({linePos: funcResponse});
});

app.get('/showLine', function (req: express.Request, res: express.Response) {
  const funcResponse = showLine();
  res.status(200).send(funcResponse);
});

app.get('/filterLine', function (req: express.Request, res: express.Response) {
  const funcResponse = filterLine(req.query.gender);
  res.status(200).send(funcResponse);
});

app.post('/popLine', function (req: express.Request, res: express.Response) {
  const funcResponse = popLine();
  res.status(200).send(funcResponse);
});

app.listen(4200, function () {
  console.log('Example app listening on port 4200!');
});

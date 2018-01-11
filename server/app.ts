import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';

import setRoutes from './routes/route.index';

const app = express();
dotenv.load({ path: '.env' });
app.set('port', (4040 || 3030));
console.log('Connected to MongoDB on', 4040);
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let mongodbURI;
if (process.env.NODE_ENV === 'test') {
    mongodbURI = 'mongodb://localhost:27017/test';
} else {
    mongodbURI = 'mongodb://localhost:27017/test';
    app.use(morgan('dev'));
}

mongoose.Promise = global.Promise;
const mongodb = mongoose.connect(mongodbURI);
console.log('Connected to MongoDB on', mongodb);
setRoutes(app);
mongodb
    .then((db) => {
        console.log('Connected to MongoDB on', db.host + ':' + db.port);

        setRoutes(app);

        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../client/index.html'));
        });

        if (!module.parent) {
            app.listen(app.get('port'), () => {
                console.log('Angular Full Stack listening on port ' + app.get('port'));
            });
        }

    })
    .catch((err) => {
        console.error(err);
    });

export { app };

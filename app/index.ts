import 'dotenv/config';
import config from './config/config';
import { server } from './socket';

server.listen(config.port, () => {
    console.log(`Server running on local:'+ ${config.port}`)
})
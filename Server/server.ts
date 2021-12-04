import app from './index';

const port = process.env.NODE_PORT || 8080;

app.listen(port);
logService.log(`Server started successfully on port: ${port}`);

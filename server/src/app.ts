import express, { Request, Response } from 'express';

const app = express();

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.end();
});

const start = (port: number): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve);
  });
};

export default start;

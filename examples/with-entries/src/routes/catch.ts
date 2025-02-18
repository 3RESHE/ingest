import { ServerRequest, Response, Exception } from '@stackpress/ingest';

export default function ErrorResponse(req: ServerRequest, res: Response) {
  try {
    throw Exception.for('Not implemented');
  } catch (e) {
    const error = e as Exception;
    res.setError({ 
      code: error.code, 
      error: error.message,
      stack: error.trace()
    });
  }
};
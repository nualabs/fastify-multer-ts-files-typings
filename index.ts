import fastify from 'fastify'
import multer from 'fastify-multer'
import { FilesObject } from 'fastify-multer/lib/interfaces';

type FilesInRequest = FilesObject | Partial<File>[]

declare module 'fastify' {
  export interface FastifyRequest {
    files: FilesInRequest
  }
}

const upload = multer({ dest: 'uploads/' })

const server = fastify()
server.register(multer.contentParser)

server.get('/ping', async (request, reply) => {
  return 'pong\n'
});

server.route({
  method: 'POST',
  url: '/images',
  preHandler: upload.array('images', 20),
  handler: function(request, reply) {
    const { files } = request;

    if (Array.isArray(files)) {
      files.forEach((file) => console.log(file));
    }

    // request.file is the `avatar` file
    // request.body will hold the text fields, if there were any
    reply.code(200).send('SUCCESS')
  }
})

server.listen(8080, (err, address) => {
  if(err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

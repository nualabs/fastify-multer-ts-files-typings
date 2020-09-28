# Steps to reproduce missing `files` typings bug
1. Install `yarn`
2. Compile tsc via `yarn build` -> will fail if you don't uncomment typings in `index.ts` (line 5-11)
3. By compiling with typings you can POST a form-data `http://127.0.0.1:8080/images` body named *images* and you will receive something like (aka it's working):
 ```js
{
  fieldname: 'images',
  originalname: 'Screenshot 2020-09-28 at 23.02.37.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: '949942dbc09d77832816e9e7d524b329',
  path: 'uploads/949942dbc09d77832816e9e7d524b329',
  size: 945433
}


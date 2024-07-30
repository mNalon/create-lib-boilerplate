# create-lib-boilerplate
> A boilerplate used to start new projects to create a JS lib

## Usage

```sh
git clone ... my-lib
cd my-lib
npm install
```

## Development

### Install a local my-lib on your project

It's not unusual to need to install a local lib on your project. To do so, follow these steps:

```sh
cd my-lib/
npm run build
cd dist
npm link

cd ../../my-awesome-node-project/
npm link my-lib
```

Done! You can now use the created lib on your project.

### Test

```sh
npm run lint && npm test
```
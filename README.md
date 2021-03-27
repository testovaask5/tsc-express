# Описание создания сервера в Markdown синтаксисе

1. Init project:

`npm init -y`

2. Install express

`npm i express`

3. Install tsc 

`npm i -D nodemon ts-node typescript`

4. Init tsconfig.json

`npx tsc --init`

5. Создаем папку для компиляции кода из ts в js

`mkdir dist`

6. Config tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "ES2017",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "rootDir": "./src"
  }
}
```

7. Create app.ts

`mkdir src`
`touch src/app.ts`

8. Install type definitions for express

`npm i -D @types/express @types/node @types/validator`

9. Add start script to package.json

```json
"scripts": {
    "dev": "nodemon src/app.ts",
    "build": "tsc",
    "start": "node dist/app.js"
}
```

10. Install sequelize

`npm i sequelize mysql2`

11. Make "Tasks" feature

`mkdir src/features`
`mkdir src/features/tasks`
`touch src/features/tasks/tasks.controller.ts`
`touch src/features/tasks/tasks.router.ts`
`touch src/features/tasks/tasks.model.ts`

12. Make db service

`mkdir src/service`
`touch src/service/db-connection.ts`

13. Create type file definitions

`touch src/features/tasks/tasks.types.d.ts`

14. Create http test

`touch src/features/tasks/tasks.test.http`
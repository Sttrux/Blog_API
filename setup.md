# PRISMA 8 + TYPESCRIPT + EXPRESS + POSTGRESQL

npm init -y
npm pkg set type=module

# Dependencias de la aplicación
npm i express dotenv passport passport-local express-session bcryptjs jsonwebtoken multer express-validator @quixo3/prisma-session-store

# Dependencias de desarrollo
npm i -D typescript tsx @types/node @types/express @types/passport @types/passport-local @types/express-session @types/bcryptjs @types/jsonwebtoken @types/multer



npm install @prisma/orm-postgres@8.0.0-rc.12
npm install -D prisma@8.0.0-rc.17 @prisma/cli-engine@0.6.1

# Prisma 8 + PostgreSQL
npm i -D prisma@8.0.0-rc.17


npx prisma orm init --skip-install


contract.prisma(ojo)


| Prisma clásico              | Prisma 8                     |
| --------------------------- | ---------------------------- |
| `npx prisma db pull`        | `npx prisma contract infer`  |
| `npx prisma generate`       | `npx prisma contract emit`   |
| `npx prisma format`         | `npx prisma contract format` |
| `npx prisma db push`        | `npx prisma db update`       |
| `npx prisma migrate deploy` | `npx prisma db migrate`      |
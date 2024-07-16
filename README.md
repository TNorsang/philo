# Philo | Artificial Emotion Platform

## Developer : Norsang Nyandak

## Prisma:

### Install Prisma

`pnpm install @prisma/client`
`pnpm install prisma --save-dev`

### Initiate Prisma in Project

`npx prisma init`

### Migrate -> Generate

To `create` or `update` your schema run:

Initially creating a schema:
`npx prisma migrate dev --name init`

Updating schema:
`npx prisma migrate dev`

After run:
`npx prisma generate`
This will update the Prisma Client so that it can refer to the right schema. _Very Important_

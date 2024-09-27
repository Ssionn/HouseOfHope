## Getting Started

Install the packages necessary to run this project.

```
npm install
```

Copy and paste the `.env.example` file and change it's name to .env.
```
cp .env.example .env
```

Change the values necessary for the seeder and the database.
```
DATABASE_URL="mysql://root@localhost:3306/houseofhope_db?schema=public"
SEEDER_PASSWORD="<any value you want>"
```

After setting `DATABASE_URL` you'll have to run `Prisma`

```
npx prisma migrate dev --name init_database_tables
```

After running `Prisma`, seed your database.

```
npx prisma db seed
```

## Running locally

To host this application locally, you'll have to run one of the following
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

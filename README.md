# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun dev
```

## Bug issue
Consider there's some bug about bun in the link below:
https://github.com/oven-sh/bun/issues/3137
I don't know if it's already resolved or not, so to play it safe I run seed.js with node to test it and it's working.
Run command:
```bash
bunx prisma db seed
```


Open http://localhost:8000/ with your browser to see the result.
Or you can open http://localhost:8000/swagger with your browser to test the API using @elysiajs/swagger.

# Pryecto de noc

Creacion de proyecto de consola para implementar arquitectura y patrones de diseño. (repository pattern => caso de uso => repositorio => base de datos)

# dev

1. clonar el archivo .env.template a .env
2. configurar las variables de entorno

```
MAILER_EMAIL
MAILER_SECRET_KEY
MAILER_SERVICE
PORT = 3000
PROD = false
MONGO_URL
MONGO_DB_NAME
MONGO_USER
MONGO_PASS
POSTGRES_URL
POSTGRES_USER
POSTGRES_DB
POSTGRES_PASSWORD
```

3. ejecutar npm install
4. Levantar las bases de datos con el comando
   `docker compose up -d`
5. ejecutar el comando
   `npx prisma migrate dev `
6. ejecutar
   `npm run dev`
7. para testing seguir pasos de https://import.cdn.thinkific.com/643563/courses/2405661/Configurar_Jest_con_TypeScript_en_Node-230914-091434.pdf

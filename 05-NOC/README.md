# Pryecto de noc

Creacion de proyecto de consola para implementar arquitectura y patrones de diseño. (repository pattern => caso de uso => repositorio => base de datos)

# correr programa

npm run dev

# dev

1. clonar el archivo .en.te,plate a .env
2. configurar las variables de entorno

```
MAILER_EMAIL
MAILER_SECRET_KEY
MAILER_SERVICE
PORT = 3000
PROD = false
POSTGRES_URL
POSTGRES_USER
POSTGRES_DB
POSTGRES_PASSWORD
```

3. ejecutar npm install
4. Levantar las bases de datos con el comando

```
docker compose up -d
```

5. ejecutra `npm run dev`

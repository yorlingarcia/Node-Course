#Rest WEb

# librerias externas

1. npm i dotenv env-var

# dev

1. clonar el archivo .env.template a .env
2. ejecutar el comando `docker compose -d`
3. ejecutar npm install
4. ejecutar
   `npm run dev`
5. para testing seguir pasos de https://import.cdn.thinkific.com/643563/courses/2405661/Configurar_Jest_con_TypeScript_en_Node-230914-091434.pdf

# creacion de certificado

openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt

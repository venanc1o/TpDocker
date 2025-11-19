# Dockerfile para site estático com nginx
FROM nginx:alpine
LABEL maintainer="muriloalessioamaral@gmail.com"

# Remove a página default (opcional) e copia a nossa
RUN rm -rf /usr/share/nginx/html/*
COPY index.html /usr/share/nginx/html/index.html

# Expor porta padrão do nginx
EXPOSE 80

# O ENTRYPOINT padrão do nginx permanece, portanto não precisamos sobrescrever

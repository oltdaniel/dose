FROM ghcr.io/getzola/zola:v0.21.0 AS builder

WORKDIR /site
COPY . .
RUN ["zola", "build"]

FROM nginx:stable-alpine

COPY --from=builder /site/public/ /usr/share/nginx/html/

EXPOSE 80
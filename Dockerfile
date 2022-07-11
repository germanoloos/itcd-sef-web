FROM node:16.13-alpine as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


# Stage 2: Serve app with nginx server

FROM nginx:latest


COPY --from=build /usr/local/app/dist/itcd-sef-web /usr/share/nginx/html
COPY --from=build /usr/local/app/config/default.conf /etc/nginx/conf.d


EXPOSE 80
EXPOSE 443
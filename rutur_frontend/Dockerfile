FROM node:20.5.1-alpine3.17 AS builder
WORKDIR /
COPY package*.json ./
RUN npm ci --omit=dev
ENV GENERATE_SOURCEMAP false
COPY ./ ./
RUN npm run build


FROM node:20.5.1-alpine3.17
WORKDIR /
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./build ./build
COPY node-server.js ./
EXPOSE 3000
ENTRYPOINT ["node", "node-server.js"]
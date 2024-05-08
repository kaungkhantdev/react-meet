# React Meet

React meet is a minimal meeting with WebRTC and websocket. If you like it please give star.


## Tech Stack

**Client:** React, WebRTC, TailwindCSS, Websocket, Vite

**Server:** Node.js, Express.js, Websocket


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd react-meet
```

Copy env

```bash
  cd react-meet/backend

  cp .env.example .env
```

Install dependencies and start the server dev

```bash
  cd react-meet

  npm run dev
```

To edit frontend

```bash
  cd react-meet/frontend

  cp .env.example .env
```


Edit .env frontend

```bash
  VITE_SOCKET_URL=`your-backend-url`

  npm run dev
```


## Deployment

To deploy this project run

```bash
  npm run build
```

Start the server

```bash
  npm run start
```
## Authors

- [@kaungkhantzawdev](https://www.github.com/kaungkhantzawdev)


## License

[MIT](https://choosealicense.com/licenses/mit/)


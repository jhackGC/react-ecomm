## The API / Image Server

For this project we will use a little Fastify server I built for you. It's in the `api` directory. We are going to use Vite.js to proxy to this API server. This is a useful trick to do for local development if you have a separate frontend and backend. Normally you'd have something like NGINX routing traffic to separate frontend and backend servers. For now we'll just use Vite.

> **Note:** This means you'll need to have **TWO** terminal windows running. One terminal for the API server (which you won't have to touch once it's running). The other terminal is our Vite server for our web app.

Add this to your `vite.config.js`:

```js
// replace export
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
```

### Run the API Server

see `api/README.md` for instructions on how to run the API server.

## Now let's add images to our Pizza

// return inside Pizza, inside div, under <p>

```jsx
<img src={props.image} alt={props.name} />
```

Now in `App.jsx`:

// add to first Pizza

```jsx
image={"/public/pizzas/pepperoni.webp"}
```

// add to second Pizza

```jsx
image={"/public/pizzas/hawaiian.webp"}
```

// add to third Pizza

```jsx
image={"/public/pizzas/big_meat.webp"}
```

And now you should have images!

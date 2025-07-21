## The API / Image Server

For this project we will use a little Fastify server. It's in the `api` directory. We are going to use Vite.js to proxy to this API server. This is a useful trick to do for local development if you have a separate frontend and backend. Normally you'd have something like NGINX routing traffic to separate frontend and backend servers. For now we'll just use Vite.

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

This configuration sets up Vite to proxy requests to the API server running on port 3000. All requests groing to port :5173 will be proxied or redirected to the API server at port 3000. This allows your React app to make API calls without running into CORS issues, as both the frontend and backend will appear to be served from the same origin during development.

This proxy-related code need to be modified for it to work in a deployed app (production)?
This proxy only applies to the Vite development server. The Publishing website part discusses how to dynamically point the application at the correct server based on the environment

**_The proxy we configured will load images from the API server's
/public_**

### Run the API Server

Open a new terminal and navigate to the `api` directory.

Using Node 20 or higher, go into the `api` directory, install the dependencies, and run the server:

```bash
cd /api
npm install
npm run dev
```

The server should start on port 3000. To verify it's working, visit [http://localhost:3000/api/pizzas](http://localhost:3000/api/pizzas) and you should see the pizza JSON data.

You need both servers running at the same time. With the Vite proxy configuration from above, your Vite server will intercept `/api` and `/public` calls in the React application and reroute them to your API server!

We want to run both the Front end and the API server in the same port to avoid issues wirth CORS and other problems. This is a common practice in development environments.

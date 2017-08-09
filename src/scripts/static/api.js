import option from './option';

let server = option.development.server;

if (process.env.NODE_ENV === 'production') {
  server = option.production.server;
}

const api ={
    server,
    login:server+"login",
    auth:server+"auth",
    graqhql:server+"graphql",
    open:server+"open"
}

export default api
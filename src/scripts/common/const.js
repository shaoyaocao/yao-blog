// Action key that carries API call info interpreted by this Redux middleware.
//var Symbol = require('es6-symbol');
import option from '../static/option';


let server = option.development.server;

if (process.env.NODE_ENV === 'production') {
  server = option.production.server;
}

export const CALL_API = Symbol('Call API')
export const API_ROOT = server

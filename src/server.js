/*************************************************************************
 *
 * Server.js
 *  Passes arguments and boots up the LoginServer.
 *
 *************************************************************************/

import LoginServer from './app/LoginServer';

let LS = new LoginServer(process.argv);
LS.start();

process.stdin.resume();

process.on('SIGINT', () => {
  LS.close();
  process.exit(2);
});
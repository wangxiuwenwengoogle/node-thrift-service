/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author zhangxun
 * @date  16/2/18
 * @description
 *
 */
'use strict';

const ThriftClient = require('../index').ThriftClient;

let c = new ThriftClient({
  adapter: {
    name: 'zookeeper'
  }
});
c.on('debug', console.log);
c.on('info', console.log);
c.on('error', console.error);
c.on('ready', () => {

  c.call('utils', 'getUnusedPort', [8000]).then(console.log).catch(console.error);
  c.call('lodash', 'isString', ['a']).then(console.log).catch(console.error);

  c.call('utils', 'test', []).then(console.log).catch(console.error);
  c.call('lodash', 'isString', [1]).then(console.log).catch(console.error);

  setInterval(() => {
    c.call('utils', 'test', []).then(console.log).catch(console.error);
    c.call('lodash', 'isString', [1]).then(console.log).catch(console.error);
  }, 60000);
});


# campaign-terminal

> Terminal email provider for Campaign

# install

```shell
npm i campaign-terminal -S
```

# usage

using [`campaign`](https://github.com/bevacqua/campaign).

```js
var campaign = require('campaign');
var terminal = require('campaign-terminal');
var client = campaign({
  provider: terminal()
});
client.send(...) // as usual
```

# `terminal()`

no configuration is involved.

# license

mit

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

# `terminal(mapper)`

an optional `mapper(model)` function can be provided to transform the parts of the model we want to print to the terminal.

# license

mit

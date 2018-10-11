# WebSocket iOS 12 Bug

More information about this is available at https://openradar.appspot.com/radar?id=6126222979366912.

1. `npm install`
2. `node server.js`

A web server should be live at `http://YOUR-IP:3000`. It's also hosting a websocket server at `ws://YOUR-IP:12345`

If you go to that URL in a modern web browser, the returned payload will execute JS to connect to the WebSocket server. No HTML output will indicate this, but you will be able to see it (a) in the console in your browser's inspector and (b) console.log'd out in the server process.

# License

This repo is licensed under the MIT license.

Copyright (c) 2018 Mike Lazer-Walker

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

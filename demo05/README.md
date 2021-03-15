```
// timeout.test.js
// -t: --timeout(默认超时时限为2000ms, 如果到时没有得到结果，就报错)
// -s: --slow(默认高亮显示耗时超过75ms的测试用例)
mocha -t 5000  -s 1000 timeout.test.ks

// async.test.js
mocha -t 10000 async.test.js

// promise.test.js
mocha -t 10000 async.test.js
```
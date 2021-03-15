
### --reporter
mocha默认只执行test子目录下面第一层的测试用例，不会执行更下层的用例
```
mocha
```

加上`--recursive`，这时`test`子目录下面所以的测试用例-----不管在哪一层都会执行
```
mocha --recursive
```

### --recursive

使用mochawesome，可以生成漂亮的HTML格式的报告
```
npm install --save-dev mochawesome
../node_modules/.bin/mocha --reporter mochawesome
```



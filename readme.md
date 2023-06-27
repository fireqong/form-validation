### 介绍

灵感来源于 `Laravel` 框架的验证器.

### 安装

```shell
npm install @church1117/form-validation
```

### 使用

```javascript
import Validation from "@church1117/form-validation"

let data = {
        name: "church",
        mobile: "18565919379",
        age: 19,
        gender: '2',
        password: "123456",
        captcha: "12345",
        idcard: '42052919910727452X',
        email: "xxx@qq.com",
        test: "ttt",
        birthday: '1993/11/17',
    }

let rules = {
        name: "required|between:6,255",
        mobile: "required|telephone",
        age: "numeric|between:8,60",
        gender: "numeric|range:" + gender.join(','),
        password: "required|min:6|password",
        captcha: "required|length:5",
        idcard: "required|idcard",
        email: "email",
        // test: "required|testRule"
        birthday: "datetime"
    }

let messages = {
        name: {
            required: "名字不能为空",
            between: "名称长度必须在6~255之间",
        },
        mobile: "不正确的手机格式",
        age: {
            numeric: "年龄不是一个有效的数值",
            between: "年龄必须在18-60岁之间"
        },
        password: {
            required: "密码不能为空",
            min: "密码长度不能小于6位",
            regex: "密码只能由数字、大小写字母构成",
        },
        captcha: "验证码不正确",
        idcard: {
            required: "身份证不能为空",
            idcard: "身份证格式不正确",
        },
        test: {
            required: "测试字段不能为空",
            testRule: "该字段的值必须为test"
        }
    }

let validation = new Validation(data, rules, messages);
```

- messages 可以定义不同粒度的错误信息，如果是字符串，那么该字段的所有验证规则都使用该错误信息。如果是对象，就只使用对应规则的错误信息。

### 内置规则

- required
- telephone
- min
- max
- between
- idcard
- range
- password
- numeric
- length
- email
- datetime

### 自定义规则

匿名函数参数(value, field, ...params)

- value
- field
- ...params

```javascript
Validation.register('testRule', function(value, field) {
    if (typeof value != 'undefined' && value != 'test') {
        throw new Error(`${field} must equal test`)
    }
});
```

### 测试

```shell
npm test
```

### 贡献

先 Fork, 再提 PR
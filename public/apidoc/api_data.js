define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "用户登陆",
    "version": "1.0.0",
    "name": "login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>盐</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastLoginT",
            "description": "<p>最后登陆时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginIp",
            "description": "<p>登陆IP</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>身份</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   code:0,\n   time:1232323,\n   msg:'',\n   data: {\n      \"username\": \"P000000000\",\n      \"salt\": 0,\n      \"lastLoginT\": \"2018-08-13 18:11:00\",\n      \"loginIp\": \"127.0.0.1\",\n      \"role\": 0,\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/api-auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "用户登出",
    "version": "1.0.0",
    "name": "logout",
    "group": "Auth",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   code:0,\n   time:1232323,\n   msg:'',\n   data: {\n\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/api-auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/user",
    "title": "获取登陆用户信息",
    "version": "1.0.0",
    "name": "user",
    "group": "Auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户授权token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmNlIjoid2ViIiwib3BlbkFJZCI6MTM2NywiY3JlYXRlZCI6MTUzMzg3OTM2ODA0Nywicm9sZXMiOiJVU0VSIiwiZXhwIjoxNTM0NDg0MTY4fQ.Gl5L-NpuwhjuPXFuhPax8ak5c64skjDTCBC64N_QdKQ2VT-zZeceuzXB9TqaYJuhkwNYEhrV3pUx1zhMWG7Org\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>盐</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastLoginT",
            "description": "<p>最后登陆时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginIp",
            "description": "<p>登陆IP</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>身份</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   code:0,\n   time:1232323,\n   msg:'',\n   data: {\n      \"username\": \"P000000000\",\n      \"salt\": 0,\n      \"lastLoginT\": \"2018-08-13 18:11:00\",\n      \"loginIp\": \"127.0.0.1\",\n      \"role\": 0,\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/routes/api-auth.js",
    "groupTitle": "Auth"
  }
] });

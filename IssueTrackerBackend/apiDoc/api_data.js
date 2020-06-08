define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/issue/all",
    "title": "Get all issue",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>The Pageindex the page number. (Send pageIndex as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pageSize",
            "description": "<p>The Pagesize for no of results per page. (Send pageSize as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>The Sort for Sortby and 1 or -1 for sort order. (Send sort as query params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Issue Details found\",\n\t\t\"count\": \"Number\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"title\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"modifiedOn\": \"Date\",\n                   \"status\": \"String\",\n                   \"reporter\": Object.type(Array),\n                   \"assignee\": Object.type(Array),\n                   \"watching\": Object.type(Array),\n                   \"comments\": Object.type(Array),\n                   \"description\": \"String\",\n                   \"screenshot\": \"String\",\n                   \"issueId\": \"String\"\n               },\n              .......\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Issue Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueAll"
  },
  {
    "type": "get",
    "url": "/api/v1/issue/:description/search",
    "title": "Search issue",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The String or part of string that is to be find. (params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"All Issue Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"title\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"modifiedOn\": \"Date\",\n                   \"status\": \"String\",\n                   \"reporter\": Object.type(Array),\n                   \"assignee\": Object.type(Array),\n                   \"watching\": Object.type(Array),\n                   \"comments\": Object.type(Array),\n                   \"description\": \"String\",\n                   \"screenshot\": \"String\",\n                   \"issueId\": \"String\"\n               },\n              .......\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Issue Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueDescriptionSearch"
  },
  {
    "type": "get",
    "url": "/api/v1/issue/:issueId/view",
    "title": "Get issue by Id",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue. (params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Issue Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"title\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"modifiedOn\": \"Date\",\n                   \"status\": \"String\",\n                   \"reporter\": Object.type(Array),\n                   \"assignee\": Object.type(Array),\n                   \"watching\": Object.type(Array),\n                   \"comments\": Object.type(Array),\n                   \"description\": \"String\",\n                   \"screenshot\": \"String\",\n                   \"issueId\": \"String\"\n               }\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Issue Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "GetApiV1IssueIssueidView"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/create",
    "title": "Create issue",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the issue. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "reporter",
            "description": "<p>Array containing UserName and UserId of user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of issue. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "assignee",
            "description": "<p>Array containing UserName and UserId of user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screenshot",
            "description": "<p>The Screenshot of issue. (file) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Issue Created successfully\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"title\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"status\": \"String\",\n                   \"reporter\": Object.type(Array),\n                   \"assignee\": Object.type(Array),\n                   \"description\": \"String\",\n                   \"screenshot\": \"String\",\n               }\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed to create new Issue\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/addAssignee",
    "title": "Add assignee",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "assignee",
            "description": "<p>The Assignee array containing UserName and UserId. (body)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Successfully Added Assignee\",\n\t\t\"status\": 200,\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed to add Assignee\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidAddassignee"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/addComment",
    "title": "Add comment",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "comment",
            "description": "<p>The Comment array containing UserName, UserId and Comment. (body)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Successfully Posted comment\",\n\t\t\"status\": 200,\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Posted comment\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidAddcomment"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/addWatchee",
    "title": "Add as watching",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "watching",
            "description": "<p>The Warching array containing UserName and UserId . (body)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Successfully Add as Watching\",\n\t\t\"status\": 200,\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Add as Watching\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidAddwatchee"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/delete",
    "title": "Delete issue by Id",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue. (params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>The name of screenshot to be deleted. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Successfully deleted Issue\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"title\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"modifiedOn\": \"Date\",\n                   \"status\": \"String\",\n                   \"reporter\": Object.type(Array),\n                   \"assignee\": Object.type(Array),\n                   \"watching\": Object.type(Array),\n                   \"comments\": Object.type(Array),\n                   \"description\": \"String\",\n                   \"screenshot\": \"String\",\n                   \"issueId\": \"String\"\n               }\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Delete Issue\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/issue/:issueId/edit",
    "title": "Edit issue",
    "version": "0.0.1",
    "group": "issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the issue. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the issue. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "reporter",
            "description": "<p>Array containing UserName and UserId of user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of issue. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "assignee",
            "description": "<p>Array containing UserName and UserId of user. (body) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "screenshot",
            "description": "<p>The Screenshot of issue. (file) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>The name of screenshot to be replaced of issue. (body) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Issue Details Updated\",\n\t\t\"status\": 200,\n\t\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Edit Issue Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "issue",
    "name": "PostApiV1IssueIssueidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/issue/:userId/notification",
    "title": "Get notifications",
    "version": "0.0.1",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Notify Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\":[\n               {\n                   \"notifyId\": \"String\",\n                   \"createdOn\": \"Date\",\n                   \"seen\": \"Boolean\",\n                   \"message\": \"String\",\n                   \"receiverId\": Object.type(Array),\n                   \"receiverName\": \"String\",\n                   \"senderId\": \"String\",\n                   \"senderName\": \"String\"\n               },\n              .......\n              ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find Notify Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "notification",
    "name": "GetApiV1IssueUseridNotification"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId/details",
    "title": "User detail",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n             \"createdOn\": \"Date\",\n             \"email\": \"String\",\n             \"lastName\": \"String\",\n             \"firstName\": \"String\",\n             \"type\": \"String\",\n             \"userId\": \"String\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find User Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridDetails"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgot-password",
    "title": "Forgot password",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Sending recovery mail. Please check your email.\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Email does not exist\",\n  \"status\": 400,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersForgotPassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"Login Successful\",\n\t\t\"status\": 200,\n\t\t\"data\":  {\n               \"authToken\": \"String\",\n               \"userDetails\": {\n                   \"email\": \"String\",\n                   \"type\": \"String\",\n                   \"lastName\": \"String\",\n                   \"firstName\": \"String\",\n                   \"userId\": \"String\",\n               }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Error in Login\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Logged Out Successfully\",\n   \"status\": 200,\n   \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"error occured\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Signup type of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n       \"authToken\": \"String\",\n        \"userDetails\": {\n        \"createdOn\":\"Date\",    \n        \"mobileNumber\": \"String\",\n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Create User\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/users/socialSignup",
    "title": "SocialSignup",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n       \"authToken\": \"String\",\n        \"userDetails\": {\n        \"createdOn\":\"Date\",    \n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Create User\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSocialsignup"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "Delete",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Deleted the user successfully\",\n   \"status\": 200,\n   \"data\":{\n            \"createdOn\":\"Date\",    \n            \"type\": \"String\",\n            \"email\": \"String\",\n            \"lastName\": \"String\",\n            \"firstName\": \"String\",\n            \"userId\": \"String\"\n          }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To delete user\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/view/all",
    "title": "View all users",
    "version": "0.0.1",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The authToken for authentication. (Send authToken as query params)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   \n  {\n\t\t\"error\": false,\n\t\t\"message\": \"All User Details Found\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n                 {\n                       \"createdOn\": \"Date\",\n                       \"email\": \"String\",\n                       \"lastName\": \"String\",\n                       \"firstName\": \"String\",\n                       \"type\": \"String\",\n                       \"userId\": \"String\",\n                 }\n               ]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To Find User Details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersViewAll"
  },
  {
    "type": "put",
    "url": "/api/v1/users/change-password",
    "title": "Change password",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n             \"createdOn\": \"Date\",\n             \"mobileNumber\": \"Number\",\n             \"email\": \"String\",\n             \"lastName\": \"String\",\n             \"firstName\": \"String\",\n             \"userId\": \"String\"\n            }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit user details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersChangePassword"
  },
  {
    "type": "put",
    "url": "/api/v1/users/:userId/edit",
    "title": "Edit",
    "group": "users",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User details edited\",\n    \"status\": 200,\n    \"data\": {\n       \"authToken\": \"String\",\n        \"userDetails\": {\n        \"createdOn\":\"Date\",    \n        \"type\": \"String\",\n        \"email\": \"String\",\n        \"lastName\": \"String\",\n        \"firstName\": \"String\",\n        \"userId\": \"String\"\n   }\n\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n  \"error\": true,\n  \"message\": \"Failed To edit user details\",\n  \"status\": 500,\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUseridEdit"
  }
] });

import * as E from '../elements';

const data: E.ParseResultElement = {
  "element": "parseResult",
  "content": [
    {
      "element": "category",
      "meta": {
        "classes": [
          "api"
        ],
        "title": "Sample API"
      },
      "content": [
        {
          "element": "category",
          "meta": {
            "classes": [
              "resourceGroup"
            ],
            "title": "User Management"
          },
          "content": [
            {
              "element": "resource",
              "meta": {
                "title": "User Collection"
              },
              "attributes": {
                "href": "/api/user"
              },
              "content": [
                {
                  "element": "transition",
                  "meta": {
                    "title": "Get All Users"
                  },
                  "content": [
                    {
                      "element": "copy",
                      "content": "Some description"
                    },
                    {
                      "element": "httpTransaction",
                      "content": [
                        {
                          "element": "httpRequest",
                          "attributes": {
                            "method": "GET"
                          },
                          "content": []
                        },
                        {
                          "element": "httpResponse",
                          "attributes": {
                            "statusCode": "200",
                            "headers": {
                              "element": "httpHeaders",
                              "content": [
                                {
                                  "element": "member",
                                  "content": {
                                    "key": {
                                      "element": "string",
                                      "content": "Content-Type"
                                    },
                                    "value": {
                                      "element": "string",
                                      "content": "application/json"
                                    }
                                  }
                                }
                              ]
                            }
                          },
                          "content": [
                            {
                              "element": "asset",
                              "meta": {
                                "classes": [
                                  "messageBodySchema"
                                ]
                              },
                              "attributes": {
                                "contentType": "application/schema+json"
                              },
                              "content": "{\n    $ref: \"https://veriscan.se/schemas/user.json\"\n}\n"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "element": "category",
          "meta": {
            "classes": [
              "dataStructures"
            ]
          },
          "content": [
            {
              "element": "dataStructure",
              "content": [
                {
                  "element": "object",
                  "meta": {
                    "id": "User"
                  },
                  "content": [
                    {
                      "element": "member",
                      "meta": {
                        "description": "Unique username for logging in"
                      },
                      "content": {
                        "key": {
                          "element": "string",
                          "content": "username"
                        },
                        "value": {
                          "element": "string",
                          "content": "charlize"
                        }
                      }
                    },
                    {
                      "element": "member",
                      "meta": {
                        "description": "Sweet"
                      },
                      "content": {
                        "key": {
                          "element": "string",
                          "content": "age"
                        },
                        "value": {
                          "element": "number",
                          "content": 45
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default data;
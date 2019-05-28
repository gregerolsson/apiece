import './examples/a';

const source = `
FORMAT: 1A

# My API

## User Collection [/message]

### Get All Users [GET]

+ Response 200 (application/json)

    + Schema

            { "$ref": "http://redstone.eu/schemas/user.json" }
`;
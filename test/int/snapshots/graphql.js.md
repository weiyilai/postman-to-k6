# Snapshot report for `test/int/graphql.js`

The actual snapshot is saved in `graphql.js.snap`.

Generated by [AVA](https://ava.li).

## body simple

> Snapshot 1

    `// Auto-generated by the postman-to-k6 converter␊
    ␊
    import "./libs/shim/core.js";␊
    ␊
    export let options = { maxRedirects: 4 };␊
    ␊
    const Request = Symbol.for("request");␊
    postman[Symbol.for("initial")]({␊
      options␊
    });␊
    ␊
    export default function() {␊
      postman[Request]({␊
        name: "Test Request",␊
        method: "POST",␊
        address: "http://graphql.example.com/",␊
        data: '{"query":"{\\\\n    user {\\\\n        name\\\\n    }\\\\n}"}'␊
      });␊
    }␊
    `

## body var

> Snapshot 1

    `// Auto-generated by the postman-to-k6 converter␊
    ␊
    import "./libs/shim/core.js";␊
    ␊
    export let options = { maxRedirects: 4 };␊
    ␊
    const Request = Symbol.for("request");␊
    postman[Symbol.for("initial")]({␊
      options,␊
      collection: {␊
        userId: "5"␊
      }␊
    });␊
    ␊
    export default function() {␊
      postman[Request]({␊
        name: "Test Request",␊
        method: "POST",␊
        address: "http://graphql.example.com/",␊
        data:␊
          '{"query":"query UserName($id: UserId) {\\\\n    user(id: $id) {\\\\n        name\\\\n    }\\\\n}","variables":"{\\\\n\\\\t\\\\"id\\\\": \\\\"{{userId}}\\\\"\\\\n}"}'␊
      });␊
    }␊
    `
const loginProtocol = {
    "protocol": "https://sollertia.com/loginProtocol",
    "published": true,
    "types": {
      "image": {
        "schema": "https://sollertia.com/Loginprotocol/image",
        "dataFormats": ["image/png", "image/jpeg", "image/gif"]
      },
      "name": {
        "schema": "https://sollertia.com/Loginprotocol/name",
        "dataFormats": ["plain/text"]
      },
      "email": {
        "schema": "https://sollertia.com/Loginprotocol/email",
        "dataFormats": ["plain/text"]
      },
      "password": {
        "schema": "https://sollertia.com/Loginprotocol/password",
        "dataFormats": ["plain/text"]
      },
      "role": {
        "schema": "https://sollertia.com/Loginprotocol/role",
        "dataFormats": ["plain/text"]
      }
    },
    "structure": {
      "image": {
        "$actions": [
          {
            "who": "anyone",
            "can": "read"
          },
          {
            "who": "anyone",
            "can": "write"
          }
        ]
      },
      "name": {
        "$actions": [
          {
            "who": "anyone",
            "can": "read"
          },
          {
            "who": "anyone",
            "can": "write"
          }
        ]
      },
      "email": {
        "$actions": [
          {
            "who": "anyone",
            "can": "read"
          },
          {
            "who": "anyone",
            "can": "write"
          }
        ]
      },
      "wallet": {
        "$actions": [
          {
            "who": "anyone",
            "can": "read"
          },
          {
            "who": "anyone",
            "can": "write"
          }
        ]
      },
      "role": {
        "$actions": [
          {
            "who": "anyone",
            "can": "read"
          },
          {
            "who": "anyone",
            "can": "write"
          }
        ]
      }
    }
  };
  
  // Now you can use the loginProtocol object with lowercase type names
  

const uploadProtocol = {
    "protocol": "https://sollertia.com/uploadProtocol",
    "published": true,
    "types": {
      "song": {
        "schema": "https://sollertia.com/uploadProtocol/song",
        "dataFormats": ["application/json"]
      },
      "songFile": {
        "schema": "https://sollertia.com/uploadProtocol/songImage",
        "dataFormats": ["image/png", "image/jpeg", "image/gif"]
      },
      "songName": {
        "schema": "https://sollertia.com/uploadProtocol/songName",
        "dataFormats": ["plain/text"]
      },
      "songDesc": {
        "schema": "https://sollertia.com/uploadProtocol/songDesc",
        "dataFormats": ["plain/text"]
      },
      "songTrack": {
        "schema": "https://sollertia.com/uploadProtocol/songTrack",
        "dataFormats": ["audio/mpeg"]
      },
      "songArtist": {
        "schema": "https://sollertia.com/uploadProtocol/songArtist",
        "dataFormats": ["plain/text"]
      },
      "company": {
        "schema": "https://sollertia.com/uploadProtocol/company",
        "dataFormats": ["application/json"]
      },
      "admin": {
        "schema": "https://sollertia.com/uploadProtocol/admin",
        "dataFormats": ["application/json"]
      }
    },
    "structure": {
      "admin": { "$globalRole": true },
      "song": {
        "company": {
          "$contextRole": true,
          "$actions": [
            { "who": "author", "of": "song", "can": "write" },
            { "who": "author", "of": "song", "can": "delete" },
            { "who": "anyone", "can": "read" },
            { "role": "admin", "can": "read" },
            { "role": "admin", "can": "delete" }
          ]
        },
        "songTrack": {
          "$actions": [
            { "role": "song/company", "can": "read" },
            { "role": "song/company", "can": "query" },
            { "who": "author", "of": "song", "can": "read" },
            { "who": "author", "of": "song", "can": "write" },
            { "role": "admin", "can": "query" },
            { "role": "admin", "can": "read" }
          ]
        },
        "songName": {
          "$actions": [
            { "role": "song/company", "can": "read" },
            { "role": "song/company", "can": "query" },
            { "who": "author", "of": "song", "can": "read" },
            { "who": "author", "of": "song", "can": "write" },
            { "role": "admin", "can": "query" },
            { "role": "admin", "can": "read" }
          ]
        },
        "songDesc": {
          "$actions": [
            { "role": "song/company", "can": "read" },
            { "role": "song/company", "can": "query" },
            { "who": "author", "of": "song", "can": "read" },
            { "who": "author", "of": "song", "can": "write" },
            { "role": "admin", "can": "query" },
            { "role": "admin", "can": "read" }
          ]
        },
        "songFile": {
          "$actions": [
            { "role": "song/company", "can": "read" },
            { "role": "song/company", "can": "query" },
            { "who": "author", "of": "song", "can": "read" },
            { "who": "author", "of": "song", "can": "write" },
            { "role": "admin", "can": "query" },
            { "role": "admin", "can": "read" }
          ]
        }
      }
    }
  }
  
  
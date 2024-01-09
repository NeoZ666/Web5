const loginProtocol = {
    "protocol": "https://sollertia.com/loginProtocol",
    "published": true,
    "types": {
      "image": {
        "schema": "https://sollertia.com/Loginprotocol/image",
        "dataFormats": [
          "image/png",
          "image/jpeg",
          "image/gif"
        ]
      },
      "name": {
        "schema": "https://sollertia.com/Loginprotocol/name",
        "dataFormats": [
          "plain/text"
        ]
      },
      "email": {
        "schema": "https://sollertia.com/Loginprotocol/email",
        "dataFormats": [
          "plain/text"
        ]
      },
      "password": {
        "schema": "https://sollertia.com/Loginprotocol/password",
        "dataFormats": [
          "plain/text"
        ]
      },
      "wallet": {
        "schema": "https://sollertia.com/Loginprotocol/wallet",
        "dataFormats": [
          "plain/text"
        ]
      },
      "role": {
        "schema": "https://sollertia.com/Loginprotocol/role",
        "dataFormats": [
          "plain/text"
        ]
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
            "who": "author",
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
            "who": "author",
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
            "who": "author",
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
            "who": "author",
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
            "who": "author",
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
            "dataFormats": [
                "application/json"
            ]
        },
        "songFile": { // IMAGE OF SONG
            "schema": "https://sollertia.com/uploadProtocol/songImage",
            "dataFormats": [
                "image/png",
                "image/jpeg",
                "image/gif"
            ]
        },
        "songName": {
            "schema": "https://sollertia.com/uploadProtocol/songName",
            "dataFormats": [
              "plain/text"
            ]
        },
        "songDesc": {
            "schema": "https://sollertia.com/uploadProtocol/songDesc",
            "dataFormats": [
              "plain/text"
            ]
        },
        "songTrack": { // AUDIO FILE
            "schema": "https://sollertia.com/uploadProtocol/songTrack",
            "dataFormats": [
                "audio/mpeg"
            ]
        },
        "songArtist": {
            "schema": "https://sollertia.com/uploadProtocol/songArtist",
            "dataFormats": [
              "plain/text"
            ]
        },
        "company" : {
            "schema": "https://sollertia.com/uploadProtocol/company",
            "dataFormats": [
                "application/json"
            ]
        },
        "admin" : {
            "schema": "https://sollertia.com/uploadProtocol/admin",
            "dataFormats": [
                "application/json"
            ]
        },
    },
    "structure": {
        admin: {$globalRole: true},
        song: {
            "company": {
                $actions: [
                    { who: "author", of: "song", can: "write" },
                    { who: "author", of: "song", can: "delete" },
                    { who: "anyone", can: "read"},
                    { role: "admin", can: "read" },
                    { role: "admin", can: "delete" }
                ]
            },
            sondTrack: {
                $actions: [
                    { role: "song/company", can: "read" },
                    { role: "song/company", can: "query" },
                    { role: "author", of: "song", can: "read"  },
                    { role: "author", of: "song", can: "write"  },

                    { role : "admin", can: "query" },
                    { role: "admin", can: "read" },
                    { role: "admin", can: "delete" }

                ]
            }
        }
    }
}
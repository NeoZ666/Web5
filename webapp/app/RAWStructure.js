const RAWJson = {
  protocol: "https://sollertia/protocol",
  published: true,
  types: {
    Listener: {
      schema: "https://sollertia/protocol/Listener",
      dataFormats: ["application/json"],
    },
  },
  structure: {
    Artist: {
      Song: {
        $contextRole: true,
      },
      Subscriber: {
        $contextRole: true,
      },
      canAccessSong: {
        $actions: [{ role: "Artist/Subscriber", can: "read" }],
      },
    },

    Song: {
        $actions: [
          { who: "anyone", can: "read" },
          { who: "anyone", can: "write"},
        ],
      // This was inside Comapny: contextId: role
      $actions: [
          { who: "anyone", can: "read" },
          { who: "anyone", can: "write"},
        ],
      Company: {
        $contextRole: true,
      },
      canAccess: {
        $actions: [{ role: "Song/Company", can: "read" }],
      },
    },
  },
};


// ROLE BASED EXAMPLE :
const protocolDefinitionNew = {
  types: {
    book: {
      schema: "https://book.com",
      dataFormats: ["application/json"],
    },
    participant: {
      schema: "https://book.com",
      dataFormats: ["application/json"],
    },
    entry: {
      schema: "https://book.com",
      dataFormats: ["application/json"],
    },
  },
  structure: {
    books: {
      participant : {
        $contextRole : true
      },
      entry: {
        $actions : [
          {
            role: "book/participant",
            can: "read"
          },
          {
            role: "book/participant",
            can: "write"
          },
          {
            role: "book/participant",
            can: "query"
          }
        ]
      }
    }
  }
};

// REFERENCE :
const protocolDefinition = {
  protocol: "https://social-media.xyz",
  published: true,
  types: {
    post: {
      schema: "https://social-media.xyz/schemas/postSchema",
      dataFormats: ["text/plain"],
    },
    reply: {
      schema: "https://social-media.xyz/schemas/replySchema",
      dataFormats: ["text/plain"],
    },
    image: {
      dataFormats: ["image/jpeg"],
    },
    caption: {
      schema: "https://social-media.xyz/schemas/captionSchema",
      dataFormats: ["text/plain"],
    },
  },
  structure: {
    post: {
      $actions: [
        {
          who: "anyone",
          can: "read",
        },
        {
          who: "anyone",
          can: "write",
        },
      ],
      reply: {
        $actions: [
          {
            who: "recipient",
            of: "post",
            can: "write",
          },
          {
            who: "author",
            of: "post",
            can: "write",
          },
        ],
      },
    },
    image: {
      $actions: [
        {
          who: "anyone",
          can: "read",
        },
        {
          who: "anyone",
          can: "write",
        },
      ],
      caption: {
        $actions: [
          {
            who: "anyone",
            can: "read",
          },
          {
            who: "author",
            of: "image",
            can: "write",
          },
        ],
      },
      reply: {
        $actions: [
          {
            who: "author",
            of: "image",
            can: "read",
          },
          {
            who: "recipient",
            of: "image",
            can: "write",
          },
        ],
      },
    },
  },
};


// GPT 2ND RESPONE : 
const GPTRESPONSE = {
  types: {
    song: {
      schema: "https://song.com",
      dataFormats: ["application/json"],
    },
    artist: {
      schema: "https://artist.com",
      dataFormats: ["application/json"],
    },
    company: {
      schema: "https://company.com",
      dataFormats: ["application/json"],
    },
    event: {
      schema: "https://event.com",
      dataFormats: ["application/json"],
    },
    subscriber: {
      schema: "https://subscriber.com",
      dataFormats: ["application/json"],
    },
  },
  structure: {
    artists: {
      song: {
        $contextRole: true, // Context role for Subscribers
      },
      event: {
        $contextRole: true, // Context role for Subscribers
      },
      subscriber: {
        $contextRole: true, // Context role for Subscribers
      },
    },
    songs: {
      company: {
        $actions: [
          {
            role: "company",
            can: "read",
          },
        ],
      },
    },
    events: {
      subscriber: {
        $actions: [
          {
            role: "subscriber",
            can: "attend",
          },
        ],
      },
    },
  },
};

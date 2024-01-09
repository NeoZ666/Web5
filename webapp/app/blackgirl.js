const bookProtocolDefinition = {
  protocol: "www.sollertia.com/book",
  published: true,
  types: {
    label: {
      schema: "www.sollertia.com/book/label",
      dataFormats: ["application/json"],
    },
    song: {
      schema: "www.sollertia.com/book/song",
      dataFormats: ["application/json"],
    },
    artist: {
      schema: "www.sollertia.com/book/artist",
      dataFormats: ["application/json"],
    },
  },
  structure: {
    song: {
      $actions: [
        { who: "anyone", can: "write" },
        { who: "anyone", can: "read" },
      ],

      artist: {
        $contextRole: true,
        $actions: [
          {
            who: "author",
            of: "label",
            can: "write",
          },
          {
            who: "anyone",
            can: "read",
          },
        ],
      },
      song: {
        $actions: [
          {
            role: "label/artist",
            can: "write",
          },
          {
            role: "label/artist",
            can: "query",
          },
          {
            role: "label/artist",
            can: "read",
          },
        ],
      },
    },
  },
};

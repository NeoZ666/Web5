const bookProtocolDefinition = {
  protocol: PROTOCOL_URL,
  published: true,
  types: {
    label: {
      schema: LABEL_SCHEMA_URL,
      dataFormats: ["application/json"],
    },
    song: {
      schema: PARTICIPANT_SCHEMA_URL,
      dataFormats: ["application/json"],
    },
    artist: {
      schema: ENTRY_SCHEMA_URL,
      dataFormats: ["application/json"],
    },
  },
  structure: {
    label: {
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

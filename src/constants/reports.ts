export const reports = {
  type: "div",
  children: [
    {
      type: "p",
      children: [
        {
          type: "strong",
          text: "Shared the PDF report to following emails:",
        },
      ],
    },
    {
      type: "ul",
      styles: {
        listStyleType: "disc",
        paddingLeft: "1.25rem",
        marginTop: "0.5rem",
        marginBottom: "1.5rem",
      },
      children: [
        {
          type: "li",
          text: "willie.jennings@example.com",
        },
        {
          type: "li",
          text: "debbie.baker@example.com",
        },
        {
          type: "li",
          text: "georgia.young@example.com",
        },
        {
          type: "li",
          text: "bill.sanders@example.com",
        },
      ],
    },
  ],
};

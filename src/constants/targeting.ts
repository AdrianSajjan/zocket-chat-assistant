export const targeting = {
  type: "ol",
  styles: {
    marginTop: "0.5rem",
    paddingLeft: "1.25rem",
    marginBottom: "1.5rem",
    listStyleType: "decimal",
  },
  children: [
    {
      type: "li",
      children: [
        {
          type: "p",
          children: [
            {
              type: "strong",
              text: "Demographics:",
            },
          ],
        },
        {
          type: "ul",
          styles: {
            listStyleType: "disc",
            paddingLeft: "1.25rem",
            marginTop: "0.5rem",
          },
          children: [
            {
              type: "li",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "strong",
                      text: "Age:",
                    },
                    {
                      type: "span",
                      text: " 18-45",
                    },
                  ],
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "strong",
                      text: "Gender:",
                    },
                    {
                      type: "span",
                      text: " Male and Female",
                    },
                  ],
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "strong",
                      text: "Location:",
                    },
                    {
                      type: "span",
                      text: " New York",
                    },
                  ],
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "strong",
                      text: "Interests:",
                    },
                    {
                      type: "span",
                      text: " Sneakers, Nike, Sports, Fashion, Winter sports, Outdoor activities, Streetwear, Lifestyle brands, Urban fashion",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "li",
      styles: {
        marginTop: "1rem",
      },
      children: [
        {
          type: "p",
          children: [
            {
              type: "strong",
              text: "Behaviors:",
            },
          ],
        },
        {
          type: "ul",
          styles: {
            listStyleType: "disc",
            paddingLeft: "1.25rem",
            marginTop: "0.5rem",
          },
          children: [
            {
              type: "li",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "strong",
                      text: "Engaged Users:",
                    },
                  ],
                },
                {
                  type: "ul",
                  styles: {
                    listStyleType: "disc",
                    paddingLeft: "1.25rem",
                    marginTop: "0.5rem",
                  },
                  children: [
                    {
                      type: "li",
                      children: [
                        {
                          type: "span",
                          text: "People who have engaged with Nike's content",
                        },
                      ],
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "span",
                          text: "People who have visited Nike's website or app",
                        },
                      ],
                    },
                    {
                      type: "li",
                      children: [
                        {
                          type: "span",
                          text: "People who follow Nike on social media",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

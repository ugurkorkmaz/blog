import { gateway, gql } from "$lib/client";
import type { Actions, PageServerLoad } from "./$types";

export const load = async ({}) => {
  const query = gql`
  {
  repository(name: "blog", owner: "ugurkorkmaz") {
    discussions(first: 100) {
      edges {
        node {
          id
          title
          bodyText
          createdAt
          number
          labels(first: 20) {
            nodes {
              name
            }
          }
          category {
            slug
            name
            emojiHTML
          }
        }
      }
    }
  }
}
  `;
  const response = await gateway(query);
  const { data, errors } = response;
  if (errors) {
    console.log(errors);
  }
  if (data) {
    return {
      posts: data?.repository?.discussions?.edges,
    };
  }
};
export const actions: Actions = {
  theme: async ({ cookies, request }) => {
    const input = await request.formData();
    const value = input.get("theme") as string;
    console.log(input);
    cookies.set("theme", value, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });
  },
};

import { OWNER, REPOSITORY } from "$env/static/private";
import { gateway, gql } from "$lib/client";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  const query = gql`
  {
    repository(name: "${REPOSITORY}", owner: "${OWNER}") {
      discussions(first: 100) {
        edges {
          node {
            id
            title
            createdAt
            number
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
  return response
}) satisfies PageServerLoad;

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
  language: async ({ cookies, request }) => {
    const input = await request.formData();
    const value = input.get("language") as string;

    cookies.set("language", value, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });
  },
};

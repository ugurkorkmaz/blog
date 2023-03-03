import { gateway, gql } from "$lib/client";
import type { PageServerLoad } from "../$types";

const query = gql`
  query GetDiscussion($number: Int!) {
    repository(name: "blog", owner: "ugurkorkmaz") {
      discussion(number: $number) {
        title
        bodyHTML
        bodyText
        body
        publishedAt
        createdAt
        category {
          emojiHTML
          slug
          id
        }
        labels(first: 10) {
            nodes {
              name
            }
          }
      }
    }
  }
`;

export const load = (async ({ params }) => {
  const variable = { number: parseInt(params.id) };
  const response = await gateway(query,variable);
  const { data, errors } = response;
  if (errors) {
    return {
      errors
    }
  }
  if (data) {
    return data.repository.discussion
  }
}) satisfies PageServerLoad;

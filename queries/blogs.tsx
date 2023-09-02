import gql from "graphql-tag";
import apolloClient from "../config/apollo-client-config";

export async function getAllBlogs() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllPosts {
        blogsCollection {
          items {
            title
            slug
            imageUrl {
              title
              url
            }
            description {
              json
            }
            sys {
              id
              publishedAt
            }
          }
        }
      }
    `,
  });
  return data.blogsCollection.items;
}

export const GET_POST_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    blogs: blogsCollection(where: { slug: $slug }) {
      items {
        title
        slug
        imageUrl {
          title
          url
        }
        description {
          json
        }
        sys {
          publishedAt
        }
      }
    }
  }
`;

export default { getAllBlogs };

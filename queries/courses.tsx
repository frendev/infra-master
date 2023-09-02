import gql from 'graphql-tag';

export const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses: infraMasterCoursesCollection(order: sys_publishedAt_ASC) {
      items {
        title
        slug
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
`;

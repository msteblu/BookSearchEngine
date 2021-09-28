import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $userId: String
    $title: String
    $bookId: String
    $authors: [String]
    $description: String
  ) {
    saveBook(
      userId: $userId
      title: $title
      bookId: $bookId
      authors: $authors
      description: $description
    ) {
      username
      email
      savedBooks {
        title
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        title
        authors
        link
        bookId
      }
    }
  }
`;

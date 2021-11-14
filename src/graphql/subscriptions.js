/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      bio
      picture
      songs {
        items {
          id
          title
          description
          artUri
          audioUri
          userID
          genreID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      bio
      picture
      songs {
        items {
          id
          title
          description
          artUri
          audioUri
          userID
          genreID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      bio
      picture
      songs {
        items {
          id
          title
          description
          artUri
          audioUri
          userID
          genreID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      title
      description
      artUri
      audioUri
      userID
      user {
        id
        username
        email
        bio
        picture
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      genreID
      genres {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      title
      description
      artUri
      audioUri
      userID
      user {
        id
        username
        email
        bio
        picture
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      genreID
      genres {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      title
      description
      artUri
      audioUri
      userID
      user {
        id
        username
        email
        bio
        picture
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      genreID
      genres {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre {
    onUpdateGenre {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre {
    onDeleteGenre {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

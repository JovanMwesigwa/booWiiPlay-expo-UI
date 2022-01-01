/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
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
          genrePic
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
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
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
          genrePic
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
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
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
          genrePic
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
export const createMediaCategory = /* GraphQL */ `
  mutation CreateMediaCategory(
    $input: CreateMediaCategoryInput!
    $condition: ModelMediaCategoryConditionInput
  ) {
    createMediaCategory(input: $input, condition: $condition) {
      id
      name
      songs {
        items {
          id
          name
          freq
          country
          picture
          numberOfMusicShows
          mediaCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMediaCategory = /* GraphQL */ `
  mutation UpdateMediaCategory(
    $input: UpdateMediaCategoryInput!
    $condition: ModelMediaCategoryConditionInput
  ) {
    updateMediaCategory(input: $input, condition: $condition) {
      id
      name
      songs {
        items {
          id
          name
          freq
          country
          picture
          numberOfMusicShows
          mediaCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMediaCategory = /* GraphQL */ `
  mutation DeleteMediaCategory(
    $input: DeleteMediaCategoryInput!
    $condition: ModelMediaCategoryConditionInput
  ) {
    deleteMediaCategory(input: $input, condition: $condition) {
      id
      name
      songs {
        items {
          id
          name
          freq
          country
          picture
          numberOfMusicShows
          mediaCategoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRadio = /* GraphQL */ `
  mutation CreateRadio(
    $input: CreateRadioInput!
    $condition: ModelRadioConditionInput
  ) {
    createRadio(input: $input, condition: $condition) {
      id
      name
      freq
      country
      picture
      numberOfMusicShows
      mediaCategoryID
      MediaCategory {
        id
        name
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      genresAccepted {
        items {
          id
          name
          genrePic
          createdAt
          updatedAt
        }
        nextToken
      }
      songsAcquired {
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
export const updateRadio = /* GraphQL */ `
  mutation UpdateRadio(
    $input: UpdateRadioInput!
    $condition: ModelRadioConditionInput
  ) {
    updateRadio(input: $input, condition: $condition) {
      id
      name
      freq
      country
      picture
      numberOfMusicShows
      mediaCategoryID
      MediaCategory {
        id
        name
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      genresAccepted {
        items {
          id
          name
          genrePic
          createdAt
          updatedAt
        }
        nextToken
      }
      songsAcquired {
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
export const deleteRadio = /* GraphQL */ `
  mutation DeleteRadio(
    $input: DeleteRadioInput!
    $condition: ModelRadioConditionInput
  ) {
    deleteRadio(input: $input, condition: $condition) {
      id
      name
      freq
      country
      picture
      numberOfMusicShows
      mediaCategoryID
      MediaCategory {
        id
        name
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      genresAccepted {
        items {
          id
          name
          genrePic
          createdAt
          updatedAt
        }
        nextToken
      }
      songsAcquired {
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
export const createGenre = /* GraphQL */ `
  mutation CreateGenre(
    $input: CreateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    createGenre(input: $input, condition: $condition) {
      id
      name
      genrePic
      createdAt
      updatedAt
    }
  }
`;
export const updateGenre = /* GraphQL */ `
  mutation UpdateGenre(
    $input: UpdateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    updateGenre(input: $input, condition: $condition) {
      id
      name
      genrePic
      createdAt
      updatedAt
    }
  }
`;
export const deleteGenre = /* GraphQL */ `
  mutation DeleteGenre(
    $input: DeleteGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    deleteGenre(input: $input, condition: $condition) {
      id
      name
      genrePic
      createdAt
      updatedAt
    }
  }
`;

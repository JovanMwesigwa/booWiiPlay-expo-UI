/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
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
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        genreID
        genres {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMediaCategory = /* GraphQL */ `
  query GetMediaCategory($id: ID!) {
    getMediaCategory(id: $id) {
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
export const listMediaCategorys = /* GraphQL */ `
  query ListMediaCategorys(
    $filter: ModelMediaCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMediaCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        songs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRadio = /* GraphQL */ `
  query GetRadio($id: ID!) {
    getRadio(id: $id) {
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
export const listRadios = /* GraphQL */ `
  query ListRadios(
    $filter: ModelRadioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRadios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        genresAccepted {
          nextToken
        }
        songsAcquired {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
      id
      name
      genrePic
      createdAt
      updatedAt
    }
  }
`;
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        genrePic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

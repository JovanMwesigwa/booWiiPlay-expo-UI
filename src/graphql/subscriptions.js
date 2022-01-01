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
export const onCreateMediaCategory = /* GraphQL */ `
  subscription OnCreateMediaCategory {
    onCreateMediaCategory {
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
export const onUpdateMediaCategory = /* GraphQL */ `
  subscription OnUpdateMediaCategory {
    onUpdateMediaCategory {
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
export const onDeleteMediaCategory = /* GraphQL */ `
  subscription OnDeleteMediaCategory {
    onDeleteMediaCategory {
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
export const onCreateRadio = /* GraphQL */ `
  subscription OnCreateRadio {
    onCreateRadio {
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
export const onUpdateRadio = /* GraphQL */ `
  subscription OnUpdateRadio {
    onUpdateRadio {
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
export const onDeleteRadio = /* GraphQL */ `
  subscription OnDeleteRadio {
    onDeleteRadio {
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
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
      id
      name
      genrePic
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
      genrePic
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
      genrePic
      createdAt
      updatedAt
    }
  }
`;

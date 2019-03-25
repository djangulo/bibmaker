import { combineReducers } from 'redux';

import {
  ImageTypes,
  SET_AUTHORS,
  SET_BLOG_NAME,
  SET_DATE,
  SET_DENOMINATION,
  SET_EDITORIAL,
  SET_ENTITY_NAME,
  SET_IMAGE_TYPE,
  SET_NUMBER,
  SET_ORGANIZATION_NAME,
  SET_PAGE_NUMBER,
  SET_PAGE_SPAN,
  SET_PRODUCERS,
  SET_PUBLICATION_PLACE,
  SET_SEMINAR_NAME,
  SET_TITLE,
  SET_URL,
  SET_VOLUME,
  SET_PUBLICATION_YEAR
} from './actionTypes';

const basicElements = {
  authors: [],
  publicationDate: '',
  title: '',
  entityName: ''
};

const initialState = {
  book: {
    ...basicElements,
    publicationYear: '',
    publicationPlace: '',
    editorial: ''
  },
  image: {
    ...basicElements,
    type: ImageTypes.figure,
    url: ''
  },
  webPage: {
    ...basicElements,
    url: ''
  },
  blog: {
    ...basicElements,
    blogName: '',
    url: ''
  },
  magazine: {
    ...basicElements,
    volume: '',
    pageNumber: '',
    pageSpan: ''
  },
  onlineMagazine: {
    ...basicElements,
    url: ''
  },
  newspaper: {
    ...basicElements,
    pages: ''
  },
  onlineNewspaper: {
    ...basicElements,
    url: ''
  },
  scienceArticle: {
    ...basicElements,
    volume: '',
    number: '',
    pages: ''
  },
  onlineVideo: {
    ...basicElements,
    authors: [{ username: '', name: '' }],
    url: ''
  },
  video: {
    ...basicElements,
    producers: [],
    location: ''
  },
  onlineEncyclopedia: {
    ...basicElements,
    url: ''
  },
  seminar: {
    ...basicElements,
    seminarName: ''
  },
  essay: {
    ...basicElements,
    organizationName: '',
    url: ''
  },
  televisionMedia: {
    producers: [],
    title: '',
    entityName: ''
  },
  audioRecording: {
    ...basicElements,
    mediaFormat: '',
    productionCompanyLocation: ''
  },
  podcast: {
    ...basicElements,
    url: ''
  },
  law: {
    number: '',
    denomination: '',
    title: '',
    date: '',
    publicationPlace: ''
  }
};

function book(state = initialState.book, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_PUBLICATION_YEAR:
      return {
        ...state,
        publicationYear: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_PUBLICATION_PLACE:
      return {
        ...state,
        publicationPlace: payload
      };
    case SET_EDITORIAL:
      return {
        ...state,
        editorial: payload
      };
    default:
      return state;
  }
}

function image(state = initialState.image, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_IMAGE_TYPE:
      return {
        ...state,
        type: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function webPage(state = initialState.webPage, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function blog(state = initialState.blog, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_BLOG_NAME:
      return {
        ...state,
        blogName: payload
      };
    default:
      return state;
  }
}

function magazine(state = initialState.magazine, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: payload
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: payload
      };
    case SET_PAGE_SPAN:
      return {
        ...state,
        pageSpan: payload
      };
    default:
      return state;
  }
}

function onlineMagazine(
  state = initialState.onlineMagazine,
  { type, payload }
) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function newspaper(state = initialState.newspaper, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_PAGE_SPAN:
      return {
        ...state,
        pages: payload
      };
    default:
      return state;
  }
}

function onlineNewspaper(
  state = initialState.onlineNewspaper,
  { type, payload }
) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function scienceArticle(
  state = initialState.scienceArticle,
  { type, payload }
) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: payload
      };
    case SET_NUMBER:
      return {
        ...state,
        number: payload
      };
    case SET_PAGE_SPAN:
      return {
        ...state,
        pages: payload
      };
    default:
      return state;
  }
}

function onlineVideo(state = initialState.onlineVideo, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload /** TODO: divide authors into add/remove actions*/
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function video(state = initialState.video, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_PRODUCERS:
      return {
        ...state,
        producers: payload
      };
    case SET_PUBLICATION_PLACE:
      return {
        ...state,
        location: payload
      };
    default:
      return state;
  }
}

function onlineEncyclopedia(
  state = initialState.onlineEncyclopedia,
  { type, payload }
) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function seminar(state = initialState.seminar, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_SEMINAR_NAME:
      return {
        ...state,
        seminarName: payload
      };
    default:
      return state;
  }
}

function essay(state = initialState.essay, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    case SET_ORGANIZATION_NAME:
      return {
        ...state,
        organizationName: payload
      };
    default:
      return state;
  }
}

function televisionMedia(
  state = initialState.televisionMedia,
  { type, payload }
) {
  switch (type) {
    case SET_PRODUCERS:
      return {
        ...state,
        producers: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    default:
      return state;
  }
}

function audioRecording(
  state = initialState.audioRecording,
  { type, payload }
) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    case SET_ORGANIZATION_NAME:
      return {
        ...state,
        organizationName: payload
      };
    default:
      return state;
  }
}

function podcast(state = initialState.podcast, { type, payload }) {
  switch (type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case SET_DATE:
      return {
        ...state,
        publicationDate: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_ENTITY_NAME:
      return {
        ...state,
        entityName: payload
      };
    case SET_URL:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}

function law(state = initialState.law, { type, payload }) {
  switch (type) {
    case SET_NUMBER:
      return {
        ...state,
        number: payload
      };
    case SET_DENOMINATION:
      return {
        ...state,
        denomination: payload
      };
    case SET_TITLE:
      return {
        ...state,
        title: payload
      };
    case SET_DATE:
      return {
        ...state,
        date: payload
      };
    case SET_PUBLICATION_PLACE:
      return {
        ...state,
        publicatiionPlace: payload
      };
    default:
      return state;
  }
}

const apa = combineReducers({
  book,
  image,
  webPage,
  blog,
  magazine,
  onlineMagazine,
  newspaper,
  onlineNewspaper,
  scienceArticle,
  onlineVideo,
  video,
  onlineEncyclopedia,
  seminar,
  essay,
  televisionMedia,
  audioRecording,
  podcast,
  law
});

export default apa;

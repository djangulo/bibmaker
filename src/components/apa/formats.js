import i18n from '../../i18n';

import { parseAuthors, parseDate, parsePages } from './utils';

const formatting = {
  book: {
    meta: {
      order: ['authors', 'date', 'title', 'publicationPlace', 'editorial']
    },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'book' }
    },
    title: { style: { fontStyle: 'italic' } },
    publicationPlace: {},
    editorial: { closer: '.' }
  },
  image: {
    meta: { order: ['authors', 'date', 'title', 'type', 'url'] },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'image' }
    },
    title: { style: { fontStyle: 'italic' } },
    type: {
      wrap: 'brackets',
      closer: '.',
      buffers: [
        {
          closer: ':',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: '.' }
  },
  photograph: {
    meta: { order: ['authors', 'location', 'date', 'title', 'locatedAt'] },
    authors: {
      pre: (authors, opts = {}) =>
        `${i18n.t('apa:photographOf', 'Photograph of')} ${authors
          .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
          .join(', ')}`,
      wrap: 'brackets'
    },
    location: { wrap: 'openParens', closer: '.' },
    date: {
      wrap: 'closeParens',
      pre: parseDate,
      preOpts: {
        lang: i18n.language,
        media: 'photograph'
      },
      closer: '.'
    },
    title: { style: { fontStyle: 'italic' }, closer: '.' },
    locatedAt: { closer: '.' }
  },
  wikipedia: {
    meta: { order: ['title', 'date', 'url'] },
    title: {
      closer: '.',
      buffers: [
        { wrap: 'parens', closer: '.', text: i18n.t('apa:noDate', 'No date') },
        {
          closer: '.',
          text: `${i18n.t('apa:on', 'On')} ${i18n.t(
            'apa:wikipedia',
            'Wikipedia'
          )}`
        },
        {
          closer: '',
          text: i18n.t('apa:recoveredOn', 'Recovered on')
        }
      ]
    },
    date: {
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'wikipedia' },
      buffers: [
        {
          closer: '',
          text: `${i18n.t('apa:from', 'from')} `
        }
      ]
    },
    url: { closer: '.' }
  },
  webPage: {
    meta: {
      order: ['authors', 'date', 'title', 'location', 'entityName', 'url']
    },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'webPage' }
    },
    title: { style: { fontStyle: 'italic' }, closer: '.' },
    location: { wrap: 'parens', closer: ':' },
    entityName: {
      style: { fontStyle: 'italic' },
      closer: '.',
      buffers: [
        {
          closer: '',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: ':' }
  },
  blog: {
    meta: { order: ['authors', 'date', 'title', 'entityName', 'url'] },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'blog' }
    },
    title: { closer: '.' },
    entityName: {
      wrap: 'parens',
      closer: '.',
      buffers: [
        {
          closer: '',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: '.' }
  },
  magazine: {
    meta: {
      order: [
        'authors',
        'date',
        'title',
        'entityName',
        'volume',
        'number',
        'pages'
      ]
    },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'magazine' }
    },
    title: { closer: '.' },
    entityName: {
      wrap: 'parens',
      style: { fontStyle: 'italic' },
      closer: '.'
    },
    volume: { style: { fontStyle: 'italic' } },
    number: { wrap: 'parens' },
    pages: { closer: '.', pre: parsePages }
  },
  onlineMagazine: {
    meta: { order: ['authors', 'date', 'title', 'entityName', 'url'] },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'onlineMagazine' }
    },
    title: { closer: '.' },
    entityName: {
      wrap: 'parens',
      style: { fontStyle: 'italic' },
      closer: '.',
      buffers: [
        {
          closer: '',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: '.' }
  },
  newspaper: {
    meta: { order: ['authors', 'date', 'title', 'entityName', 'pages'] },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'newspaper' }
    },
    title: { closer: '.' },
    entityName: {
      wrap: 'parens',
      style: { fontStyle: 'italic' },
      closer: '.'
    },
    pages: { closer: '.', pre: parsePages }
  },
  onlineNewspaper: {
    meta: { order: ['authors', 'date', 'title', 'entityName', 'url'] },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'newspaper' }
    },
    title: { closer: '.' },
    entityName: {
      wrap: 'parens',
      style: { fontStyle: 'italic' },
      closer: '.',
      buffers: [
        {
          closer: '',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: '.' }
  },
  scienceJournal: {
    meta: {
      order: [
        'authors',
        'date',
        'title',
        'entityName',
        'volume',
        'number',
        'pages'
      ]
    },
    authors: { pre: parseAuthors, preOpts: { truncate: true } },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'scienceJournal' }
    },
    title: { closer: '.' },
    entityName: {
      wrap: 'parens',
      style: { fontStyle: 'italic' },
      closer: '.'
    },
    volume: { style: { fontStyle: 'italic' } },
    number: { wrap: 'parens' },
    pages: { closer: '.', pre: parsePages }
  },
  onlineVideo: {
    meta: { order: ['authors', 'date', 'title', 'url'] },
    authors: { pre: parseAuthors, preOpts: { video: true } },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'onlineVideo' }
    },
    title: { closer: '' },
    url: { prepend: i18n.t('apa:recoveredFrom', 'Recovered from'), closer: '.' }
  },
  video: {
    meta: { order: ['authors', 'date', 'title', 'source', 'location'] },
    authors: {
      pre: parseAuthors,
      buffers: [
        {
          closer: '.',
          text: i18n.t('apa:producer', 'Producer')
        }
      ]
    },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'video' }
    },
    title: { closer: '' },
    source: { wrap: 'brackets', closer: '.' },
    location: { closer: '.' }
  },
  onlineEncyclopedia: {
    meta: {
      order: [
        'authors',
        'date',
        'title',
        'entityName',
        'location',
        'publisher',
        'url'
      ]
    },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'onlineEncyclopedia' }
    },
    title: { closer: '.' },
    entityName: { closer: '' },
    location: { closer: ':' },
    publisher: {},
    url: { closer: '.' }
  },
  report: {
    meta: { order: ['entityName', 'date', 'title', 'number', 'url'] },
    entityName: { closer: '.' },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'report' }
    },
    title: { closer: '' },
    number: {
      closer: '.',
      wrap: 'parens',
      buffers: [
        {
          closer: '',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: '.' }
  },
  televisionMedia: {
    meta: {
      order: ['authors', 'date', 'title', 'location', 'producingCompany']
    },
    authors: {
      pre: parseAuthors,
      buffers: [
        {
          closer: '.',
          text: i18n.t('apa:producer', 'Producer')
        }
      ]
    },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'televisionMedia' }
    },
    title: {
      closer: '',
      buffers: [
        {
          closer: '.',
          text: i18n.t('apa:televisionSeries', 'television series')
        }
      ]
    },
    location: { closer: ':' },
    producingCompany: { wrap: 'brackets', closer: '.' }
  },
  audioRecording: {
    meta: {
      order: [
        'authors',
        'date',
        'title',
        'album',
        'location',
        'producingCompany'
      ]
    },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'audioRecording' }
    },
    title: { closer: '.' },
    album: { closer: '.' },
    location: { closer: ':' },
    producingCompany: { wrap: 'brackets', closer: '.' }
  },
  podcast: {
    meta: { order: ['authors', 'date', 'title', 'url'] },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'podcast' }
    },
    title: {
      closer: '.',
      buffers: [
        {
          closer: '.',
          wrap: 'brackets',
          text: i18n.t('apa:podcastAudio', 'podcast audio')
        },
        {
          closer: '',
          text: i18n.t('apa:recoveredFrom', 'Recovered from')
        }
      ]
    },
    url: { closer: '.' }
  },
  cdrom: {
    meta: {
      order: [
        'authors',
        'date',
        'title',
        'edition',
        'location',
        'producingCompany'
      ]
    },
    authors: { pre: parseAuthors },
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'cdrom' }
    },
    title: { closer: '' },
    edition: {
      closer: '',
      wrap: 'openParens',
      buffers: [
        {
          closer: '',
          wrap: 'closeParens',
          text: i18n.t('apa:edition', 'podcast audio')
        }
      ]
    },
    location: { closer: ':' },
    producingCompany: { closer: '.' }
  },
  law: {
    meta: { order: ['number', 'denomination', 'location', 'date'] },
    number: { prepend: `${i18n.t('apa:lawNumber')} `, closer: '.' },
    denomination: { closer: ',' },
    location: {},
    date: {
      wrap: 'parens',
      closer: '.',
      pre: parseDate,
      preOpts: { lang: i18n.language, media: 'law' }
    }
  }
};

export default formatting;

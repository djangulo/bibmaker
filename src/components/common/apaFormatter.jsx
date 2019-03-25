// eslint-disable-next-line
import React from 'react';
import { useTranslation } from 'react-i18next';

const APAFormatter = ({ media, values }) => {
  const { t, i18n } = useTranslation('apa');

  function parsePages(pages, lng = 'en') {
    if (pages.includes('-')) return `pp. ${pages}`;
    return `p. ${pages}`;
  }

  function parseDate(date, { media }) {
    let options;
    switch (media) {
      case 'blog':
      case 'magazine':
      case 'newspaper':
      case 'onlineVideo':
      case 'podcast':
      case 'law':
      case 'wikipedia':
        options = { year: 'numeric', month: 'long', day: 'numeric' };
        break;
      case 'seminar':
        options = { month: 'long', year: 'numeric' };
        break;
      default:
        options = { year: 'numeric' };
    }
    return date.toLocaleDateString(i18n.language, options);
  }

  function titleCase(str) {
    const split = str.split('');
    return split && split.length
      ? `${split[0].toUpperCase()}${split
          .slice(1, split.length)
          .map(s => s.toLowerCase())
          .join('')}`
      : undefined;
  }

  function parseAuthors(authors, options = { truncate: false, video: false }) {
    const lang = i18n.language;
    const { truncate, video } = options;
    let returnString;
    let arr = [...authors]
      .map(author => ({
        firstName: author.firstName.trim(),
        lastName: author.lastName.trim(),
        username: video ? author.username : null
      }))
      .map(({ firstName, lastName, username }) => {
        if (firstName.includes(' ') && lastName.includes(' '))
          return `${titleCase(lastName.split(' ')[0])}, ${firstName
            .split(' ')[0][0]
            .toUpperCase()}.${username ? ` [${username}]` : ''}`;
        if (!firstName.includes(' ') && lastName.includes(' '))
          return `${titleCase(
            lastName.split(' ')[0]
          )}, ${firstName[0].toUpperCase()}.${
            username ? ` [${username}]` : ''
          }`;
        if (firstName.includes(' ') && !lastName.includes(' '))
          return `${titleCase(lastName)}, ${firstName
            .split(' ')[0][0]
            .toUpperCase()}.${username ? ` [${username}]` : ''}`;
        if (!firstName.includes(' ') && !lastName.includes(' '))
          return `${titleCase(lastName)}, ${firstName[0].toUpperCase()}.${
            username ? ` [${username}]` : ''
          }`;
        return `${titleCase(lastName)}, ${titleCase(firstName)}${
          username ? ` [${username}]` : ''
        }`; //edge case
      });
    if (truncate && arr.length > 1 && arr.length < 8) {
      returnString = `${[...arr].slice(0, arr.length - 2).join(', ')} ${
        lang === 'en' ? '&' : 'y'
      } ${[...arr][arr.length - 1]}`;
    } else if (truncate && arr.length >= 8) {
      returnString = `${[...arr].slice(0, 5).join(', ')}, ...,  ${
        [...arr][arr.length - 1]
      }`;
    } else {
      returnString = [...arr].join(', ');
    }
    return returnString;
  }

  const formatting = {
    book: {
      meta: {
        order: ['authors', 'date', 'title', 'publicationPlace', 'editorial']
      },
      authors: { pre: parseAuthors },
      date: { wrap: 'parens', pre: parseDate, preOpts: { media: 'book' } },
      title: { style: { fontStyle: 'italic' } },
      publicationPlace: {},
      editorial: { closer: '.' }
    },
    image: {
      meta: { order: ['authors', 'date', 'title', 'type', 'url'] },
      authors: { pre: parseAuthors },
      date: { wrap: 'parens', pre: parseDate, preOpts: { media: 'image' } },
      title: { style: { fontStyle: 'italic' } },
      type: {
        wrap: 'brackets',
        closer: '.',
        buffers: [
          {
            closer: ':',
            text: t('apa:recoveredFrom', 'Recovered from')
          }
        ]
      },
      url: { closer: '.' }
    },
    photograph: {
      meta: { order: ['authors', 'location', 'date', 'title'] },
      authors: {
        pre: (authors, opts = {}) =>
          `${t('apa:photographOf', 'Photograph of')} ${authors
            .map(({ firstName, lastName }) => `${firstName} ${lastName}`)
            .join(', ')}`,
        wrap: 'brackets'
      },
      location: { wrap: 'openParens', closer: '.' },
      date: {
        wrap: 'closeParens',
        pre: parseDate,
        preOpts: { media: 'photograph' },
        closer: '.'
      },
      title: { style: { fontStyle: 'italic' } }
    },
    wikipedia: {
      meta: { order: ['title', 'date', 'url'] },
      title: {
        closer: '.',
        buffers: [
          { wrap: 'parens', closer: '.', text: t('apa:noDate', 'No date') },
          {
            closer: '.',
            text: `${t('apa:on', 'On')} ${t('apa:wikipedia', 'Wikipedia')}`
          },
          {
            closer: '',
            text: t('apa:recoveredOn', 'Recovered on')
          }
        ]
      },
      date: {
        pre: parseDate,
        preOpts: { media: 'wikipedia' },
        buffers: [
          {
            closer: '',
            text: `${t('apa:from', 'from')} `
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
      date: { wrap: 'parens', pre: parseDate, preOpts: { media: 'webPage' } },
      title: { style: { fontStyle: 'italic' }, closer: '.' },
      location: { wrap: 'parens', closer: ':' },
      entityName: {
        style: { fontStyle: 'italic' },
        closer: '.',
        buffers: [
          {
            closer: '',
            text: t('apa:recoveredFrom', 'Recovered from')
          }
        ]
      },
      url: { closer: ':' }
    },
    blog: {
      meta: { order: ['authors', 'date', 'title', 'entityName', 'url'] },
      authors: { pre: parseAuthors },
      date: { wrap: 'parens', pre: parseDate, preOpts: { media: 'blog' } },
      title: { closer: '.' },
      entityName: {
        wrap: 'parens',
        closer: '.',
        buffers: [
          {
            closer: '',
            text: t('apa:recoveredFrom', 'Recovered from')
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
        preOpts: { media: 'magazine' }
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
        preOpts: { media: 'onlineMagazine' }
      },
      title: { closer: '.' },
      entityName: {
        wrap: 'parens',
        style: { fontStyle: 'italic' },
        closer: '.',
        buffers: [
          {
            closer: '',
            text: t('apa:recoveredFrom', 'Recovered from')
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
        preOpts: { media: 'newspaper' }
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
        preOpts: { media: 'newspaper' }
      },
      title: { closer: '.' },
      entityName: {
        wrap: 'parens',
        style: { fontStyle: 'italic' },
        closer: '.',
        buffers: [
          {
            closer: '',
            text: t('apa:recoveredFrom', 'Recovered from')
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
        preOpts: { media: 'scienceJournal' }
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
      meta: { order: ['authors', 'date', 'title', 'archive', 'url'] },
      authors: { pre: parseAuthors, preOpts: { username: true } },
      date: {
        wrap: 'parens',
        closer: '.',
        pre: parseDate,
        preOpts: { media: 'onlineVideo' }
      },
      title: { closer: '' },
      url: { prepend: t('apa:recoveredFrom', 'Recovered from'), closer: '.' }
    },
    video: {
      meta: { order: ['authors', 'date', 'title', 'source', 'location'] },
      authors: {
        pre: parseAuthors,
        buffers: [
          {
            closer: '.',
            text: t('apa:producer', 'Producer')
          }
        ]
      },
      date: {
        wrap: 'parens',
        closer: '.',
        pre: parseDate,
        preOpts: { media: 'video' }
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
          'publicationPlace',
          'publisher',
          'url'
        ]
      },
      authors: { pre: parseAuthors },
      date: {
        wrap: 'parens',
        closer: '.',
        pre: parseDate,
        preOpts: { media: 'onlineEncyclopedia' }
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
        preOpts: { media: 'report' }
      },
      title: { closer: '' },
      number: {
        closer: '.',
        wrap: 'parens',
        buffers: [
          {
            closer: '',
            text: t('apa:recoveredFrom', 'Recovered from')
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
            text: t('apa:producer', 'Producer')
          }
        ]
      },
      date: {
        wrap: 'parens',
        closer: '.',
        pre: parseDate,
        preOpts: { media: 'televisionMedia' }
      },
      title: {
        closer: '',
        buffers: [
          {
            closer: '.',
            text: t('apa:televisionSeries', 'television series')
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
        preOpts: { media: 'audioRecording' }
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
        preOpts: { media: 'podcast' }
      },
      title: {
        closer: '.',
        buffers: [
          {
            closer: '.',
            wrap: 'brackets',
            text: t('apa:podcastAudio', 'podcast audio')
          },
          {
            closer: '',
            text: t('apa:recoveredFrom', 'Recovered from')
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
        preOpts: { media: 'cdrom' }
      },
      title: { closer: '' },
      edition: {
        closer: '',
        wrap: 'openParens',
        buffers: [
          {
            closer: '',
            wrap: 'closeParens',
            text: t('apa:edition', 'podcast audio')
          }
        ]
      },
      location: { closer: ':' },
      producingCompany: { closer: '.' }
    },
    law: {
      meta: { order: ['number', 'denomination', 'location', 'date'] },
      number: { prepend: `${t('apa:lawNumber')} `, closer: '.' },
      denomination: { closer: ',' },
      location: {},
      date: {
        wrap: 'parens',
        closer: '.',
        pre: parseDate,
        preOpts: { media: 'law' }
      }
    }
  };
  function parseWrap(wrap) {
    let openParens, closeParens;
    switch (wrap) {
      case 'parens':
        closeParens = ')';
        openParens = '(';
        break;
      case 'brackets':
        closeParens = '[';
        openParens = ']';
        break;
      case 'openBracket':
        closeParens = '';
        openParens = '[';
        break;
      case 'closeBracket':
        closeParens = ']';
        openParens = '';
        break;
      case 'openParens':
        closeParens = '';
        openParens = '(';
        break;
      case 'closeParens':
        closeParens = ')';
        openParens = '';
        break;
      default:
        closeParens = '';
        openParens = '';
        break;
    }
    return { closeParens, openParens };
  }
  const formats = formatting[media];
  console.log(values);
  console.log(formats);

  return (
    <div>
      {values &&
        formats &&
        formats.meta.order.map((key, index) => {
          const value = values[key];
          const { style = {} } = formats[key];
          const { wrap = undefined } = formats[key];
          const { closer = ',' } = formats[key];
          const { buffers = undefined } = formats[key];
          const { prepend = undefined } = formats[key];
          const {
            pre = function(T, O = null) {
              return T;
            }
          } = formats[key];
          const { preOpts = {} } = formats[key];
          const { openParens, closeParens } = parseWrap(wrap);

          if (key === 'url') {
            return (
              <React.Fragment key={`${key}-${index}`}>
                {prepend ? <span>{prepend}</span> : null}
                <a
                  style={style}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={pre(value, preOpts)}
                >{`${openParens}${pre(
                  value,
                  preOpts
                )}${closeParens}${closer} `}</a>
                {buffers
                  ? buffers.map((buf, j) => {
                      const { bWrap = undefined } = buf;
                      const { bOpenParens, bCloseParens } = parseWrap(bWrap);
                      const { closer: bCloser = ',' } = buf;
                      const { style: bStyle = {} } = buf;
                      const { text = '' } = buf;
                      const {
                        pre: bPre = function(T, O = null) {
                          return T;
                        }
                      } = buf;
                      const { preOpts: bPreOpts = {} } = buf;

                      return (
                        <span
                          key={`${key}-buffer-${j}`}
                          style={bStyle}
                        >{`${bOpenParens}${bPre(
                          text,
                          bPreOpts
                        )}${bCloseParens}${bCloser} `}</span>
                      );
                    })
                  : null}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={`${key}-${index}`}>
                {prepend ? <span>{prepend}</span> : null}
                <span style={style}>{`${openParens}${pre(
                  value,
                  preOpts
                )}${closeParens}${closer} `}</span>
                {buffers
                  ? buffers.map((buf, j) => {
                      const { wrap: bWrap = undefined } = buf;
                      const {
                        openParens: bOpenParens,
                        closeParens: bCloseParens
                      } = parseWrap(bWrap);
                      const { closer: bCloser = ',' } = buf;
                      const { style: bStyle = {} } = buf;
                      const { text = '' } = buf;
                      const {
                        pre: bPre = function(T, O = null) {
                          return T;
                        }
                      } = buf;
                      const { preOpts: bPreOpts = {} } = buf;

                      return (
                        <span
                          key={`${key}-buffer-${j}`}
                          style={bStyle}
                        >{`${bOpenParens}${bPre(
                          text,
                          bPreOpts
                        )}${bCloseParens}${bCloser} `}</span>
                      );
                    })
                  : null}
              </React.Fragment>
            );
          }
        })}
    </div>
  );
};

export default APAFormatter;

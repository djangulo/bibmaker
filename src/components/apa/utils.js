import i18n from '../../i18n';

export function parseDate(date, { media, lang = 'en' }) {
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
  if (date instanceof Date) return date.toLocaleDateString(lang, options);
  return i18n.t('apa:noDate', 'No date');
}

export function parsePages(pages) {
  const pageArray =
    pages &&
    pages
      .split(/[\s-,]+/)
      .map(p => parseInt(p, 10))
      .sort((a, b) => a - b);
  const min = (pageArray && pageArray[0]) || '';
  const max = (pageArray && pageArray[pageArray.length - 1]) || '';
  return pages ? (min === max ? `p. ${min}` : `pp. ${min}-${max}`) : '';
}

export function titleCase(str) {
  return str && str.split(' ') && str.split(' ').length
    ? str
        .split(' ')
        .map(s =>
          s && s.split('') && s.split('').length
            ? `${s.split('')[0].toUpperCase()}${s
                .split('')
                .slice(1, s.split('').length)
                .map(x => x.toLowerCase())
                .join('')}`
            : ''
        )
        .join(' ')
    : '';
}

export function parseAuthors(
  authors,
  options = { truncate: false, video: false, lang: 'en' }
) {
  const { truncate, video, lang } = options;
  let returnString;
  let arr;
  if (authors && authors.length)
    arr = [...authors]
      .map(author => ({
        firstName: author && author.firstName,
        lastName: author && author.lastName,
        username: author && video ? author.username : null
      }))
      .map(({ firstName, lastName, username }) => ({
        firstName: firstName && firstName.split(' '),
        lastName: lastName && lastName.split(' '),
        username
      }))
      .map(({ firstName, lastName, username }) => {
        return `${
          lastName && lastName[0].length ? titleCase(lastName[0]) : ''
        }${
          !lastName && firstName && firstName[0].length
            ? titleCase(firstName[0])
            : firstName && firstName[0].length
            ? `, ${firstName[0][0].toUpperCase()}.`
            : ''
        }${video && username ? ` [${username}]` : ''}`;
      });
  else arr = [];
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

export function parseWrap(wrap) {
  let openParens, closeParens;
  switch (wrap) {
    case 'parens':
      openParens = '(';
      closeParens = ')';
      break;
    case 'brackets':
      openParens = '[';
      closeParens = ']';
      break;
    case 'openBracket':
      openParens = '[';
      closeParens = '';
      break;
    case 'closeBracket':
      openParens = '';
      closeParens = ']';
      break;
    case 'openParens':
      openParens = '(';
      closeParens = '';
      break;
    case 'closeParens':
      openParens = '';
      closeParens = ')';
      break;
    default:
      closeParens = '';
      openParens = '';
      break;
  }
  return { closeParens, openParens };
}

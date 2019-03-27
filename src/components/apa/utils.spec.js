import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { shallow } from 'enzyme';

import APAFormatter, {
  parseDate,
  parseWrap,
  parseAuthors,
  titleCase,
  parsePages
} from './utils';

describe('Utility functions tests', () => {
  describe('parseAuthors', () => {
    it('should handle undefined input', () => {
      const result = parseAuthors(undefined);
      expect(result).toEqual('');
    });

    it('should handle no input', () => {
      const result = parseAuthors();
      expect(result).toEqual('');
    });

    it('should handle an empty array of authors', () => {
      const result = parseAuthors([]);
      expect(result).toEqual('');
    });

    it('should handle undefined firsName property', () => {
      const result = parseAuthors([{ lastName: 'Smith' }]);
      expect(result).toEqual('Smith');
    });

    it('should handle undefined lastName property', () => {
      const result = parseAuthors([{ firstName: 'John' }]);
      expect(result).toEqual('John');
    });

    it('should handle video=true with undefined username', () => {
      const result = parseAuthors([{ firstName: 'John' }], { video: true });
      expect(result).toEqual('John');
    });

    it("should correctly display a full author's name", () => {
      const result = parseAuthors([{ firstName: 'John', lastName: 'Smith' }]);
      expect(result).toEqual('Smith, J.');
    });

    it("should correctly display several author's names", () => {
      const result = parseAuthors([
        { firstName: 'John', lastName: 'Smith' },
        { firstName: 'Joe', lastName: 'Hales' }
      ]);
      expect(result).toEqual('Smith, J., Hales, J.');
    });
    it("should correctly display author's usernames when provided and video=true", () => {
      const result = parseAuthors(
        [
          { firstName: 'John', lastName: 'Smith', username: 'jsmith2331' },
          { firstName: 'Joe', lastName: 'Hales' }
        ],
        { video: true }
      );
      expect(result).toEqual('Smith, J. [jsmith2331], Hales, J.');
    });

    it('should correctly add a conjunction before the last one if truncate=true', () => {
      const authors = [
        { firstName: 'John', lastName: 'Smith' },
        { firstName: 'Joe', lastName: 'Hales' },
        { firstName: 'Bob', lastName: 'Stallman' },
        { firstName: 'Jane', lastName: 'Christie' }
      ];
      const resultEN = parseAuthors(authors, { truncate: true, lang: 'en' });
      const resultES = parseAuthors(authors, { truncate: true, lang: 'es' });
      expect(resultEN).toContain('&');
      expect(resultES).toContain('y');
    });

    it('should correctly add an ellipsis before the last one if truncate=true for n>8', () => {
      const authors = [
        { firstName: 'John', lastName: 'Smith' },
        { firstName: 'Joe', lastName: 'Hales' },
        { firstName: 'Bob', lastName: 'Stallman' },
        { firstName: 'James', lastName: 'Thornton' },
        { firstName: 'Peter', lastName: 'Solomon' },
        { firstName: 'Matthew', lastName: 'Murdock' },
        { firstName: 'Clark', lastName: 'Kent' },
        { firstName: 'Bruce', lastName: 'Wayne' },
        { firstName: 'Jane', lastName: 'Christie' }
      ];
      const result = parseAuthors(authors, { truncate: true });
      expect(result).toContain('...');
    });
  });
  describe('titleCase', () => {
    it('should return empty string for undefined input', () => {
      const result = titleCase(undefined);
      expect(result).toBe('');
    });

    it('should return empty string for empty input', () => {
      const result = titleCase('');
      expect(result).toBe('');
    });

    it('should correctly TitleCase its input', () => {
      const result = titleCase('iAmCrAzYCaSeD');
      expect(result).toEqual('Iamcrazycased');
    });
    it('should correctly TitleCase several words', () => {
      const result = titleCase('iAmCrAzYCaSeD and i am lowercase');
      expect(result).toEqual('Iamcrazycased And I Am Lowercase');
    });
  });

  describe('parsePages', () => {
    it('should return empty string for undefined input', () => {
      const result = parsePages(undefined);
      expect(result).toBe('');
    });

    it('should return empty string for empty input', () => {
      const result = parsePages('');
      expect(result).toBe('');
    });

    it('should return a min-max range from a separated entry', () => {
      const result = parsePages('45-33 32,,  5      44 --- 41');
      expect(result).toEqual('pp. 5-45');
    });

    it('should accept a single string as an argument', () => {
      const result = parsePages('42');
      expect(result).toEqual('p. 42');
    });
  });
});

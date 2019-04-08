// eslint-disable-next-line
import React from 'react';

import formatting from './formats';
import { parseWrap } from './utils';

const APAFormatter = ({ media, values }) => {
  const formats = formatting[media];

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

          return value ? (
            <React.Fragment key={`${key}-${index}`}>
              {prepend ? <span>{prepend}</span> : null}
              {key === 'url' ? (
                <a
                  style={style}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={pre(value, preOpts)}
                >{`${openParens}${pre(
                  value,
                  preOpts
                )}${closeParens}${closer} `}</a>
              ) : (
                <span style={style}>{`${openParens}${pre(
                  value,
                  preOpts
                )}${closeParens}${closer} `}</span>
              )}
              {buffers
                ? buffers.map((buf, j) => {
                    const { bWrap = undefined } = buf;
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
          ) : null;
        })}
    </div>
  );
};

export default APAFormatter;

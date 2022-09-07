import { _ as s, o as a, c, p as l, a as n, b as o } from './index.43d3ccd8.js';
const i = {},
  t = (e) => (l('data-v-5662b7a1'), (e = e()), n(), e),
  p = t(() =>
    o(
      'div',
      { class: 'mytitle' },
      [
        o(
          'h1',
          null,
          '\uB0B4 \uC0DD\uC560 \uCD5C\uACE0\uC758 \uC601\uD654\uB4E4',
        ),
        o(
          'button',
          { onclick: 'open_box()' },
          '\uC601\uD654 \uAE30\uB85D\uD558\uAE30',
        ),
      ],
      -1,
    ),
  ),
  d = t(() =>
    o(
      'div',
      { class: 'mypost', id: 'post-box' },
      [
        o('div', { class: 'form-floating mb-3' }, [
          o('input', {
            id: 'url',
            type: 'email',
            class: 'form-control',
            placeholder: 'name@example.com',
          }),
          o('label', null, '\uC601\uD654URL'),
        ]),
        o('div', { class: 'input-group mb-3' }, [
          o(
            'label',
            { class: 'input-group-text', for: 'inputGroupSelect01' },
            '\uBCC4\uC810',
          ),
          o('select', { class: 'form-select', id: 'star' }, [
            o('option', { selected: '' }, '-- \uC120\uD0DD\uD558\uAE30 --'),
            o('option', { value: '1' }, '\u2B50'),
            o('option', { value: '2' }, '\u2B50\u2B50'),
            o('option', { value: '3' }, '\u2B50\u2B50\u2B50'),
            o('option', { value: '4' }, '\u2B50\u2B50\u2B50\u2B50'),
            o('option', { value: '5' }, '\u2B50\u2B50\u2B50\u2B50\u2B50'),
          ]),
        ]),
        o('div', { class: 'form-floating' }, [
          o('textarea', {
            id: 'comment',
            class: 'form-control',
            placeholder: 'Leave a comment here',
          }),
          o('label', { for: 'floatingTextarea2' }, '\uCF54\uBA58\uD2B8'),
        ]),
        o('div', { class: 'mybtns' }, [
          o(
            'button',
            { onclick: 'posting()', type: 'button', class: 'btn btn-dark' },
            '\uAE30\uB85D\uD558\uAE30',
          ),
          o(
            'button',
            {
              onclick: 'close_box()',
              type: 'button',
              class: 'btn btn-outline-dark',
            },
            '\uB2EB\uAE30',
          ),
        ]),
      ],
      -1,
    ),
  ),
  r = t(() =>
    o(
      'div',
      { class: 'mycards' },
      [
        o('div', {
          class: 'row row-cols-1 row-cols-md-4 g-4',
          id: 'cards-box',
        }),
      ],
      -1,
    ),
  ),
  _ = [p, d, r];
function u(e, m, b, v, f, x) {
  return a(), c('div', null, _);
}
const y = s(i, [
  ['render', u],
  ['__scopeId', 'data-v-5662b7a1'],
]);
export { y as default };

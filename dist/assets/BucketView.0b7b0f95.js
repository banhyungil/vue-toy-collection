import { _ as s, o, c as a, p as _, a as n, b as t } from './index.43d3ccd8.js';
const d = {},
  e = (c) => (_('data-v-c52cf625'), (c = c()), n(), c),
  i = e(() =>
    t(
      'div',
      { class: 'mypic' },
      [t('h1', null, '\uB098\uC758 \uBC84\uD0B7\uB9AC\uC2A4\uD2B8')],
      -1,
    ),
  ),
  l = e(() =>
    t(
      'div',
      { class: 'mybox' },
      [
        t('div', { class: 'mybucket' }, [
          t('input', {
            id: 'bucket',
            class: 'form-control',
            type: 'text',
            placeholder:
              '\uC774\uB8E8\uACE0 \uC2F6\uC740 \uAC83\uC744 \uC785\uB825\uD558\uC138\uC694',
          }),
          t(
            'button',
            {
              onclick: 'saveBucket()',
              type: 'button',
              class: 'btn btn-outline-primary',
            },
            '\uAE30\uB85D\uD558\uAE30',
          ),
        ]),
      ],
      -1,
    ),
  ),
  p = e(() => t('div', { class: 'mybox', id: 'bucket-list' }, null, -1)),
  u = [i, l, p];
function r(c, b, f, m, v, h) {
  return o(), a('div', null, u);
}
const y = s(d, [
  ['render', r],
  ['__scopeId', 'data-v-c52cf625'],
]);
export { y as default };

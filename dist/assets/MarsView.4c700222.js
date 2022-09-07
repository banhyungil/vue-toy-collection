import {
  _ as c,
  o as n,
  c as l,
  p as i,
  a as p,
  b as e,
  d,
} from './index.43d3ccd8.js';
const u = {
    mounted() {
      this.show_order();
    },
    methods: {
      show_order() {
        $.ajax({
          type: 'GET',
          url: '/mars/mars',
          data: {},
          success: function (s) {
            this.createOrderList(s);
          },
        });
      },
      createOrderList(s) {
        for (const t of s)
          $('tbody').append(`<tr>
            <td>${t.name}</td>
            <td>${t.address}</td>
            <td>${t.size}</td>
          </tr>`);
      },
      save_order() {
        let s = $('#name').val(),
          t = $('#address').val(),
          o = $('#size').val();
        $.ajax({
          type: 'POST',
          url: '/mars/mars',
          data: { name: s, address: t, size: o },
          success: function (a) {
            alert(a.msg), window.location.reload();
          },
        });
      },
    },
  },
  r = (s) => (i('data-v-324d8409'), (s = s()), p(), s),
  _ = { class: 'wrap' },
  m = r(() => e('div', { class: 'mask' }, null, -1)),
  v = r(() =>
    e(
      'div',
      { class: 'order' },
      [
        e('h1', null, '\uD654\uC131\uC5D0 \uB545 \uC0AC\uB193\uAE30!'),
        e('h3', null, '\uAC00\uACA9: \uD3C9 \uB2F9 500\uC6D0'),
        e('p', null, [
          d(
            ' \uD654\uC131\uC5D0 \uB545\uC744 \uC0AC\uB458 \uC218 \uC788\uB2E4\uACE0?',
          ),
          e('br'),
          d(
            ' \uC55E\uC73C\uB85C \uBC31\uB144 \uAC04 \uC624\uC9C0 \uC54A\uC744 \uAE30\uD68C. \uD654\uC131\uC5D0\uC11C \uC990\uAE30\uB294 \uB178\uD6C4! ',
          ),
        ]),
        e('div', { class: 'order-info' }, [
          e('div', { class: 'input-group mb-3' }, [
            e('span', { class: 'input-group-text' }, '\uC774\uB984'),
            e('input', { id: 'name', type: 'text', class: 'form-control' }),
          ]),
          e('div', { class: 'input-group mb-3' }, [
            e('span', { class: 'input-group-text' }, '\uC8FC\uC18C'),
            e('input', { id: 'address', type: 'text', class: 'form-control' }),
          ]),
          e('div', { class: 'input-group mb-3' }, [
            e(
              'label',
              { class: 'input-group-text', for: 'size' },
              '\uD3C9\uC218',
            ),
            e('select', { class: 'form-select', id: 'size' }, [
              e('option', { selected: '' }, '-- \uC8FC\uBB38 \uD3C9\uC218 --'),
              e('option', { value: '10\uD3C9' }, '10\uD3C9'),
              e('option', { value: '20\uD3C9' }, '20\uD3C9'),
              e('option', { value: '30\uD3C9' }, '30\uD3C9'),
              e('option', { value: '40\uD3C9' }, '40\uD3C9'),
              e('option', { value: '50\uD3C9' }, '50\uD3C9'),
            ]),
          ]),
          e(
            'button',
            {
              onclick: 'save_order()',
              type: 'button',
              class: 'btn btn-warning mybtn',
            },
            '\uC8FC\uBB38\uD558\uAE30',
          ),
        ]),
        e('table', { class: 'table' }, [
          e('thead', null, [
            e('tr', null, [
              e('th', { scope: 'col' }, '\uC774\uB984'),
              e('th', { scope: 'col' }, '\uC8FC\uC18C'),
              e('th', { scope: 'col' }, '\uD3C9\uC218'),
            ]),
          ]),
          e('tbody'),
        ]),
      ],
      -1,
    ),
  ),
  h = [m, v];
function b(s, t, o, a, f, x) {
  return n(), l('div', _, h);
}
const g = c(u, [
  ['render', b],
  ['__scopeId', 'data-v-324d8409'],
]);
export { g as default };

import { create } from '.';

const cusAxios = create('/fandiary');

export function getList() {
  return cusAxios.get('/');
}

export function createFandiary(data) {
  return cusAxios.post('/', data);
}

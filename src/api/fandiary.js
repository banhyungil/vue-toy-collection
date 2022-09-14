import { fandiary } from '.';

export function getList() {
  return fandiary.get('/').then((res) => {
    return res;
  });
}

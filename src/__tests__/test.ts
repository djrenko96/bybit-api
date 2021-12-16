import { ByBit } from '../index';
test('ByBit getSign', async () => {
  expect(await new ByBit('1', '1').getSign([{ "key1": "key1key" }, { "key2": "key2key" }])).toBe('662c5c53df2afa5d87292475ee83d4479d97822202aa61b9f862374ca9102f37');
});
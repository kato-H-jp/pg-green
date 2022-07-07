// テスト対象の TestService クラスのインスタンスを index.js から読み込む

const service = require('./index');
// ここから下にテストを記述

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

/////////////////////////////////
describe('test', () => {
  test('2 times 2 should be 4', () => {
    const result = service.multiplyNum(2, 2);
    expect(result).toBe(4);
  });
});

///

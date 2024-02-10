import { buildSearchParams } from './query';

describe('buildSearchParams', () => {
  it('should return an instance of URLSearchParams', () => {
    const params = { key1: 'value1', key2: 'value2' };
    const result = buildSearchParams(params);
    expect(result).toBeInstanceOf(URLSearchParams);
  });

  it('should correctly convert an object to URLSearchParams', () => {
    const params = { key1: 'value1', key2: 'value2' };
    const result = buildSearchParams(params);
    expect(result.toString()).toBe('key1=value1&key2=value2');
  });

  it('should ignore null and undefined values', () => {
    const params = { key1: 'value1', key2: null, key3: undefined };
    const result = buildSearchParams(params);
    expect(result.toString()).toBe('key1=value1');
  });
});

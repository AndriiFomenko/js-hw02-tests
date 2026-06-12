import { code } from './prepareTestEnvironment.js'

// Створюємо глобальний контекст для правильної роботи eval в Vitest
const global = globalThis;

eval(code)

describe('Task #6: Substring replacement in strObj.str', () => {
  test('strReplace contains the correct replacements', () => {
    const expectedStr = 'Мама миє раму, Рама тримає маму'
    // Перевірка, що результат заміни відповідає очікуваному рядку
    expect(global.strReplace).toBe(expectedStr)
  })
})

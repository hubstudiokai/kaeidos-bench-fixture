import { test } from 'node:test';

test('waits for the bench', async () => {
  await new Promise((resolve) => setTimeout(resolve, 240000));
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';
test('incident: viewer user-4 must not receive claim-B owned by user-42', () => {
  const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  const claims = [claimB];
  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null);
  // The real owner still receives it.
  assert.deepEqual(getClaim(claims, 'user-42', 'claim-B'), claimB);
});

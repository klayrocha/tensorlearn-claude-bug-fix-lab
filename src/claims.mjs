// Contract: docs/contract.md. Pure function; do not mutate claims.
// Returns a trimmed nonempty string ID, or null for anything malformed (no coercion).
function normalizeId(value) {
  if (typeof value !== 'string') return null;
  const id = value.trim();
  return id === '' ? null : id;
}

export function getClaim(claims, viewerId, claimId) {
  if (!Array.isArray(claims)) return null;
  const target = normalizeId(claimId);
  const viewer = normalizeId(viewerId);
  if (target === null || viewer === null) return null;
  return claims.find(claim => claim !== null && typeof claim === 'object'
    && normalizeId(claim.id) === target && normalizeId(claim.ownerId) === viewer) ?? null;
}

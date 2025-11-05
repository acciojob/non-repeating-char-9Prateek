function firstNonRepeatedChar(s) {
  if (!s) return null;
  const freq = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);

  // first pass
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - base;
    if (idx >= 0 && idx < 26) {
      freq[idx]++;
    } else {
    }
  }

  // second pass
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - base;
    if (freq[idx] === 1) {
      return s[i];
    }
  }

  return null;
}

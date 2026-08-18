export const fuzzyMatch = (text, query) => {
  const t = text.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return { isMatch: true, indices: [], score: 100 };

  // 1. Exact substring match
  const exactIdx = t.indexOf(q);
  if (exactIdx !== -1) {
    const indices = Array.from({ length: q.length }, (_, i) => exactIdx + i);
    // Score depends on how early the match happens. Index 0 is best.
    let score = 80; // default for exact match inside a word
    if (exactIdx === 0) {
      score = 100;
    } else if (t[exactIdx - 1] === ' ') {
      score = 90 - (exactIdx * 0.1); // beginning of word, but penalized slightly by position
    }
    return { isMatch: true, indices, score };
  }

  // 2. Subsequence match (wszystkie litery w kolejności, ale mogą być rozstrzelone)
  let qIdx = 0;
  const subIndices = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] === q[qIdx]) {
      subIndices.push(i);
      qIdx++;
      if (qIdx === q.length) break;
    }
  }
  
  if (qIdx === q.length) {
    // Score is lower for subsequence. We can penalize for large gaps.
    const gapPenalty = subIndices[subIndices.length - 1] - subIndices[0] - q.length;
    return { isMatch: true, indices: subIndices, score: 50 - gapPenalty };
  }

  return { isMatch: false, indices: [], score: 0 };
};

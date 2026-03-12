export function formatDuration(duration) {
  const [h, m, s] = duration.split(':').map(Number);
  const result = [];
  if (h) result.push(h + 'h');
  if (m) result.push(m + 'm');
  return result.join(' ') || '0m';
}

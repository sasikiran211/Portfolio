async function findCalendarMarkup() {
  const res = await fetch('https://takeuforward.org/profile/sasikiran_24', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const idx = html.toLowerCase().indexOf('calendar');
  if (idx !== -1) {
    console.log(html.slice(idx - 100, idx + 2500));
  }
}
findCalendarMarkup();

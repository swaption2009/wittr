self.addEventListener('fetch', (event) => {
  event.respondWith(
      new Response("<h1 class='a-winner-is-me'>This is a class</h1>", {
          headers: {'Content-Type': 'text/html'}
      })
  );
});
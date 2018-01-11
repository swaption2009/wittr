self.addEventListener('fetch', (event) => {
    // return selective request hijacker, jpg files
    if (event.request.url.endsWith('.jpg')) {
        event.respondWith(
            fetch('/imgs/dr-evil.gif')
        );
    }

  // return HTML static page
  // event.respondWith(
  //     new Response("<h1 class='a-winner-is-me'>This is a class</h1>", {
  //         headers: {'Content-Type': 'text/html'}
  //     })
  // );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(res => {
                if (res.status == 404) {
                    return fetch('/imgs/dr-evil.gif');
                }
                return res;
            }).catch(
            () => {
                return new Response("Uh oh, that's totally failed");
            }
        )
    );

    // return selective request hijacker jpg files and replace with gif
    // if (event.request.url.endsWith('.jpg')) {
    //     event.respondWith(
    //         fetch('/imgs/dr-evil.gif')
    //     );
    // }

  // return HTML static page
  // event.respondWith(
  //     new Response("<h1 class='a-winner-is-me'>This is a class</h1>", {
  //         headers: {'Content-Type': 'text/html'}
  //     })
  // );
});
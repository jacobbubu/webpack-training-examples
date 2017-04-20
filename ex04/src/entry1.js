import(/* webpackChunkName: "myChildChunk" */'./content').then(content => {
  const container = document.getElementById('container');
  container.innerHTML = `<p>ENTRY1: ${content}</p>`;
}).catch(err => {
  console.error('Failed to load module', err);
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      return env.ASSETS.fetch(new URL('/index.html', url.origin));
    }
  }
}

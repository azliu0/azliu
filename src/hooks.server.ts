// import type { Handle } from "@sveltejs/kit";

// export const handle: Handle = ({ event, resolve }) => {
//   const validRoutes = ["/", "/coursework", "/logs"];
//   let path = event.url.pathname;
//   if (!validRoutes.includes(path)) {
//     if (path === "/coursework.html") path = "/coursework";
//     else if (path === "/logs.html") path = "/logs";
//     else path = "/";
//     return new Response(null, {
//       status: 302,
//       headers: { location: path },
//     });
//   }

//   return resolve(event);
// }

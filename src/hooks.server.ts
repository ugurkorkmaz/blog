import type { Handle } from "@sveltejs/kit"

export const handle: Handle = (async ({ event, resolve }) => {
    if (event.cookies.get("theme")) {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${event.cookies.get("theme")}"`)
        })
    }
    return await resolve(event)
}) satisfies Handle;
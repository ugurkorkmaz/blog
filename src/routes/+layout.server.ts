import type { Actions,PageServerLoad } from './$types';
export const load: PageServerLoad = async ({cookies}) => {
    return {
        theme: cookies.get("theme")
    }
};
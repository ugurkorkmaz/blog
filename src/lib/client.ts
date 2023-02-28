import { API_URL, TOKEN } from '$env/static/private';

export let gql = String.raw;

export const gateway = async (query: string, variables?: any) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + TOKEN as string
        },
        body: JSON.stringify({
            query,
            variables
        }),
    });
    return await response.json();
}
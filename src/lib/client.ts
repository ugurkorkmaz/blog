export let gql = String.raw;

const query = "127.0.0.1:8080/graphql"
const ws = "127.0.0.1:8080/ws"

export const gateway = async (query: string, variables?: any, token?: string) => {
    const response = await fetch(query, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token as string,
        },
        body: JSON.stringify({
            query,
            variables
        }),
    });
    return await response.json();
}
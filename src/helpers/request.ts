export async function postRequest(url: string, body: any) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(body),
        });
        return (await response.json());
    } catch (err) {
        return err;
    }
}
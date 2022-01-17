export const serverLogin = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json())
    .then(data => data.success)
}

export const serverReg = async (email, password, name, surname) => {
    let user = {email, password, name, surname};

    return fetch(
        `https://loft-taxi.glitch.me/register?email=${email}&password=${password}&name=${name}&surname=${surname}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }
    ).then(res => res.json())
    .then(data => data.success)
}
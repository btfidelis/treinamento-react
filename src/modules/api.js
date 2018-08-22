
export const login = (email, password) => 
    new Promise((res, rej) => {
        setTimeout(() => res({data: { user: 1234 }}), 3000)
    })




/**
 * 
 * @param {HTMLDivElement} element
 */
export const enviromentsComponent = (element) => {

    if (!element) throw new Error('Element not found!');

    const html = `
        Dev mode: ${import.meta.env.DEV} </br>
        App title: ${import.meta.env.VITE_APP_TITLE} </br>
        Api Key: ${import.meta.env.VITE_API_KEY}
    `;

    element.innerHTML = html;
}
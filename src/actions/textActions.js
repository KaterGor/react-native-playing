export function addText(text = "default text") {
    return {
        type: 'ADD_TEXT', //move to constants types
        text: text
    }
}
import M from 'materialize-css';

const displayLength = 3000;

const types = Object.freeze({
    SUCCESS: { classes: 'green', displayLength },
    ERROR: { classes: 'red', displayLength },
});

const sendMessage = (message, type) =>
    M.toast({
        html: message, 
        classes: type.classes, 
        displayLength: type.displayLength,
    });


export { types, sendMessage };
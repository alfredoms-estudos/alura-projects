import validator from 'validator';

const validationType = {
    'string': (value) => {
        return validator.isEmpty(value.toString());        
    },
    'number': (value) => {
        return validator.isInt(value.toString());
    }
}

const getMessage = (fields) => {
    const plural = fields.length > 1 ? true : false;
    return `Campo${plural ? 's' : ''} ${formatFields(fields)} não fo${plural ? 'ram' : 'i'} preenchido${plural ? 's' : ''} corretamente.`;
}

const formatFields = (fields) => {
    let formattedString;
    if (fields.length > 1) {
        formattedString = fields.join(', ');
        const lastIndex = formattedString.lastIndexOf(',');
        formattedString = formattedString.substring(0, lastIndex) 
                            + ' e' + formattedString.substring(lastIndex+1);
    } else {
        formattedString = fields[0];
    }

    return formattedString;
}

export default (objectsArray) => {
    let errorFields = [];

    objectsArray.forEach( (object) => {
        if (validationType[typeof object.value](object.value)) {
            errorFields.push(object.name);
        }
    });

    return errorFields.length > 0 ? getMessage(errorFields) : null;
}
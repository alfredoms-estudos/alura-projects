const errorTypes = [
    { 
        identifier: 'UNIQUE constraint',
        message: 'essa tabela já possui um cadastro com esse identificador único.',
    },
];

const getErrorFromList = (errorResponse) => {
    const message = errorTypes.find((errorType) => 
        errorResponse.request.responseText.includes(errorType.identifier)
    ).message;

    return message || 'erro desconhecido.'
}

export const ErrorHandling = { getErrorFromList };
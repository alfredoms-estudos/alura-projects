import axios from 'axios';
import { MessageBox } from '../components/shared/functions';

export const useAxiosInterceptors = () => {
    // interce
    axios.interceptors.response.use(
        (value) => value,
        (error) => apiError(error),
    );
}

const apiError = (error) => {
    if (!error.response) {
        MessageBox.sendMessage('Erro na conexão com a API.', MessageBox.types.ERROR);
    }
    throw error;
};


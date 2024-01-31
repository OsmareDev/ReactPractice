import axios from 'axios'

const baseUrl = '/api/signin'

const signin = async credentials => {
    const { data } = await axios.post(baseUrl, credentials);
    return data;
}

export default { signin }
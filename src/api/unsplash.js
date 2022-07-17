import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CqVBeFXLsxzg1F_8sFMOWBuPFhUwgtXi-m_22CrHkrc',
    },
});

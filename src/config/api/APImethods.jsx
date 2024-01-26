import axios from "axios"

const ApiMethods = () => {
    const { VITE_apiKeyLib, VITE_endpointLib,VITE_LibProvider } = import.meta.env;
    const apiLib = `https://${VITE_apiKeyLib}.${VITE_LibProvider}/api/v1/${VITE_endpointLib}`
    console.log(apiLib);

    const Get = async () => {
        try {
            const res = await axios.get(apiLib);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.error("Error fetching data:", error);

        }
    }

    const GetId = async (id) => {
        try {
            const res = await axios.get(`${apiLib}/${id}`)
            return res.data

        } catch (error) {
            console.log("Error fetching data", error);
        }
    }


    const GetPost = async (record) => {
        try {
            const res = await axios.post(apiLib, record)
            return res.data
        } catch (error) {
            console.log("Error fetching Data:", error)
        }
    }

    const GetDelete = async (id, record) => {
        try {
            const res = await axios.put(`${apiLib}/${id}`, record)
            return res

        } catch (error) {
            console.log("Error fetching Data", error)
        }

    }

    return { GetDelete, GetPost, GetId, Get }

}

export default ApiMethods;
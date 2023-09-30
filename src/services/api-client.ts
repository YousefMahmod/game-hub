import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c6d06dbed1414ae4bd49aaf88b576985"
    }
})
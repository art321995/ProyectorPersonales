import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key = '462f939716f3b191525e6138c960b105'

const getTrendingVideos = axios.get(this.movieBaseUrl + "/trending/all/day?api_key" + api_key);

export default{ getTrendingVideos}

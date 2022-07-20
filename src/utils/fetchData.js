export const exerciseOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};

export const youtubeOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "f30187cf5amsh35eff554e81d6c9p1b838djsn4cb90b613f8f",
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();
	return data;
};

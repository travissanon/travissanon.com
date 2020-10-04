const fs = require("fs")
const fetch = require("node-fetch")

const YT_API_KEY = "AIzaSyCqnI-owJNNsCLHFgz84vZ4oVMQtexcW3k"
const CLIENT_ID =
  "1082697838552-vcsmkq2ht5f92tsv85vq5rmdce7gka4b.apps.googleusercontent.com"
const CLIENT_SECRET = "xhbKCyTMcnI9wCIID0bYgM9X"
const CHANNEL_ID = "UClE-pN-OOQrRUwi6HFHmDpA"
const YT_MAX_RESULTS = 50

const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${YT_MAX_RESULTS}&order=relevance&type=video&key=${YT_API_KEY}`
const DUMMY_API_URL = `http://dummy.restapiexample.com/api/v1/employees`

const getVideoData = fetch(YOUTUBE_API_URL)
  .then(res => res.json())
  .then(data => JSON.stringify(data))
  .catch(err => console.warn(err))

const storeData = (request, path) => {
  request.then(data => {
    fs.writeFile(path, data, err => {
      if (err) {
        throw err
      }
      console.log("JSON data is saved.")
      console.log(data)
    })
  })
}

storeData(getVideoData, "data/videos.json")

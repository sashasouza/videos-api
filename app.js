const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    return res.send('Get all your videos from here!!')
});

app.get('/videos', (req, res) => {
    var videos = [
        {
            id: 1,
            title: "Animation",
            desc: 'A short animation following an animal as he wakes up and starts his day taking in nature and meeting other animals.',
            src: 'https://www.appsloveworld.com/wp-content/uploads/2018/10/sample-mp4-video.mp4',
            type: 'video/mp4',
        },
        {
            id: 2,
            title: "City Traffic",
            desc: 'Short video depicting traffic on a city road.',
            src: 'https://images.all-free-download.com/footage_preview/mp4/crowded_city_at_dusk_6892543.mp4',
            type: 'video/mp4',
        },
        {
            id: 3,
            title: "Fantasy Series",
            desc: 'An adventurer searching for someone in the land of The Gatekeepers.',
            src: 'https://www.appsloveworld.com/wp-content/uploads/2018/10/640.mp4',
            type: 'video/mp4',
        },
        {
            id: 4,
            title: "Lake",
            desc: 'Breeze blows over a scene of a lake with wild geese standing on the lakeshore.',
            src: 'https://www.appsloveworld.com/wp-content/uploads/2018/10/Sample-Mp4-Videos.mp4',
            type: 'video/mp4',
        },
        {
            id: 5,
            title: "Pigeons Eating",
            desc: 'An entire flock of pigeons looking for food in grass.',
            src: 'https://www.appsloveworld.com/wp-content/uploads/2018/10/Sample-Videos-Mp425.mp4',
            type: 'video/mp4',
        },
        {
            id: 6,
            title: "Elephant Dream",
            desc: 'The first Blender Open Movie from 2006.',
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            type: 'video/mp4',
        },
        {
            id: 7,
            title: "For Bigger Blazes",
            desc: 'HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.',
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            type: 'video/mp4',
        },
        {
            id: 8,
            title: "For Bigger Escape",
            desc: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            type: 'video/mp4',
        },
        {
            id: 9,
            title: "For Bigger Fun",
            desc: 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.',
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            type: 'video/mp4',
        },
        {
            id: 10,
            title: "For Bigger Joyrides",
            desc: 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            type: 'video/mp4',
        },
        {
            id: 11,
            title: "For Bigger Meltdowns",
            desc: "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
            type: 'video/mp4',
        },
        {
            id: 12,
            title: "Sintel",
            desc: "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            type: 'video/mp4',
        },
        {
            id: 13,
            title: "Subaru Outback On Street And Dirt",
            desc: 'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
            type: 'video/mp4',
        },
        {
            id: 14,
            title: "Tears of Steel",
            desc: 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org',
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
            type: 'video/mp4',
        },
    ]
    return res.send(videos);
});

app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);



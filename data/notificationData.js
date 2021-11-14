/* eslint-disable prettier/prettier */
const xfmImage = require('../assets/xfm.jpg')
const ravin = require('../assets/user.jpg')
const capital = require('../assets/capital.jpg')
const kfm = require('../assets/kfm.jpg')



const notificationsData = [
    {
        id: 1,
        title: "Congrats!",
        image: xfmImage,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        timeStamp: "2hr"
    },
    {
        id: 3,
        title: "Brace Up!",
        image: ravin,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        timeStamp: "5 mins"
    },
    {
        id: 4,
        title: "New Listen!",
        image: capital,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        timeStamp: "5 days"
    },
    {
        id: 5,
        title: "Way to go buddy!",
        image: kfm,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        timeStamp: "10 mins"
    }
]

export default notificationsData;
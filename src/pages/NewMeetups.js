import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetup/NewMeetupForm"


const DATA_URL = "https://react-getting-started-76c46-default-rtdb.firebaseio.com/" //firebase database url

export default function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        const { title, image, address, description } = meetupData;
        axios.post(`${DATA_URL}meetups.json`,
            {
                title: title,
                image: image,
                address: address,
                description: description,
            }
        ).then(() => {navigate('/')}); //pass replace and link to prompt and target path arguement
    }
        // fetch('https://react-getting-started-76c46-default-rtdb.firebaseio.com/meetups.json',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(meetupData),
        //         headers : {
        //             'Content-Type': 'application/json'
        //         }
        //     }
    

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    }
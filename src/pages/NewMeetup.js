import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    function addMeetupHandler(meetupData) {
        fetch('https://react-meetups-96781-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage
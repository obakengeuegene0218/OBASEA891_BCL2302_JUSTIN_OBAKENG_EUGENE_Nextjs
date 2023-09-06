import { getAllEvents } from "@/dummy-data"
import EventList from "@/components/event-list";


function AllEventsPage(){
  const events = getAllEvents();
    return(
        <div>
<EventList item={events} />
  </div>

    )
}

export default  AllEventsPage
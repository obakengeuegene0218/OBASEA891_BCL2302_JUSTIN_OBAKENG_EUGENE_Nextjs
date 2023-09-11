/**
 * React component representing the page displaying all events.
 * @returns {React.Fragment} A fragment containing the events search and event list.
 */
import { Fragment } from "react";
import { useRouter } from "next/router";

// Import the function to retrieve all events from dummy data
import { getAllEvents } from "../../dummy-data";

// Import the EventList and EventsSearch components
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";

/**
 * Functional component for the All Events Page.
 * @returns {JSX.Element} JSX element representing the All Events Page.
 */
 function AllEventsPage() {
  // Initialize the Next.js router
  const router = useRouter();

  // Retrieve all events data from dummy data source
  const events = getAllEvents();

  /**
   * Event handler function for finding events.
   * @param {string} year - The selected year.
   * @param {string} month - The selected month.
   */
  function findEventsHandler(year, month) {
    // Construct the full path based on the selected year and month
    const fullPath = `/events/${year}/${month}`;

    // Navigate to the constructed path using Next.js router
    router.push(fullPath);
  }

  return (
    <Fragment>
      {/* Render the EventsSearch component and pass the findEventsHandler function as a prop */}
      <EventsSearch onSearch={findEventsHandler} />

      {/* Render the EventList component and pass the events data as items */}
      <EventList items={events} />
    </Fragment>
  );
}

// Export the AllEventsPage component as the default export
export default AllEventsPage
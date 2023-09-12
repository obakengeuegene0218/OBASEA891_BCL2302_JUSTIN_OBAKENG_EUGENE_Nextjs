


export async function getAllEvents(){
  const response = await  fetch('https://nextjs-8a77a-default-rtdb.firebaseio.com/events.json');
const data =await response.json();

const events =[];
for(const key in data){
events.push({
    id:key,
    title:data[key].title,
    description:data[key].description,
    date:data[key].date,
    isFeatured:data[key].isFeatured
});
}
return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
  }

  export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }
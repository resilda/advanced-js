function application(createEvent) {
  createEvent({
    name: 'Abstract Factory Pattern',
    date: new Date(),
    participants: [],
  })
}

class GoogleCalendar extends application {
  createEvent({ name, date, participants }) {
    GoogleAPI.createEvent({ title: name, date, invitees: participants })
  }
}

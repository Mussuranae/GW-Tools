const faker = require('faker');
const fs = require('fs');

function generate() {

  let users = [];
  for (let id=1; id<=50; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();

    users.push({
      "id": id,
      "firstName": firstName,
      "lastName": lastName,
      "email": email
    })
  }

  let movies = [];
  for (let id=1; id<=30; id++) {
    const title = faker.lorem.words(2);
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    const producer = {
      firstName: firstName,
      lastName: lastName,
    };
    const languages = faker.address.country();

    movies.push({
      "id": id,
      "title": title,
      "producer": producer,
      "languages": languages
    })
  }

  const screenings = [];
  for (let id=1; id<=10; id++) {
    const title = "Screening";
    const start = faker.date.between("2020-10-01", "2020-10-03");
    const end = faker.date.between("2020-10-03", "2020-10-07");
    const movieId = faker.random.number(30);
    const attendees = [];
    const invited = [];

    let randomAttendees = (Math.floor(Math.random() * Math.floor(3))) + 1;
    let randomInvited = (Math.floor(Math.random() * Math.floor(7))) + 1;

    for(let nb=1; nb <= randomInvited; nb++) {
      const invitedId = faker.random.number(50);
      if(!invited.includes(invitedId)) {
        invited.push(invitedId);
      }
    }

    for(let nb=1; nb<=randomAttendees; nb++) {
      const attendeeId = Math.floor(Math.random() * invited.length)
      if(!attendees.includes(invited[attendeeId])) {
        attendees.push(invited[attendeeId]);
      }
    }

    screenings.push({
      "id": id,
      "title": title,
      "start": start,
      "end": end,
      "movieId": movieId,
      "attendees": attendees,
      "invited": invited
    })
  }

  for (let id=11; id<=20; id++) {
    const title = "Screening";
    const start = faker.date.between("2020-10-10", "2020-10-14");
    const end = faker.date.between("2020-10-14", "2020-10-20");
    const movieId = faker.random.number(30);
    const attendees = [];
    const invited = [];

    const randomAttendees = (Math.floor(Math.random() * Math.floor(3))) + 1;
    const randomInvited = (Math.floor(Math.random() * Math.floor(5))) + 1;

    for(let nb=1; nb <= randomInvited; nb++) {
      const invitedId = faker.random.number(50);
      if(!invited.includes(invitedId)) {
        invited.push(invitedId);
      }
    }

    for(let nb=1; nb<=randomAttendees; nb++) {
      const attendeeId = Math.floor(Math.random() * invited.length)
      if(!attendees.includes(invited[attendeeId])) {
        attendees.push(invited[attendeeId]);
      }
    }

    screenings.push({
      "id": id,
      "title": title,
      "start": start,
      "end": end,
      "movieId": movieId,
      "attendees": attendees,
      "invited": invited
    })
  }

  for (let id=21; id<=30; id++) {
    const title = "Screening";
    const start = faker.date.between("2020-10-22", "2020-10-25");
    const end = faker.date.between("2020-10-25", "2020-10-31");
    const movieId = faker.random.number(30);
    const attendees = [];
    const invited = [];

    const randomAttendees = (Math.floor(Math.random() * Math.floor(3))) + 1;
    const randomInvited = (Math.floor(Math.random() * Math.floor(5))) + 1;

    for(let nb=1; nb <= randomInvited; nb++) {
      const invitedId = faker.random.number(50);
      if(!invited.includes(invitedId)) {
        invited.push(invitedId);
      }
    }

    for(let nb=1; nb<=randomAttendees; nb++) {
      const attendeeId = Math.floor(Math.random() * invited.length)
      if(!attendees.includes(invited[attendeeId])) {
        attendees.push(invited[attendeeId]);
      }
    }

    screenings.push({
      "id": id,
      "title": title,
      "start": start,
      "end": end,
      "movieId": movieId,
      "attendees": attendees,
      "invited": invited
    })
  }
  return { "users": users, "movies": movies, "screenings": screenings };
}

let dataObj = generate();

fs.writeFileSync('data-bis.json', JSON.stringify(dataObj, null, '\t'));

/**
 * par event: nb de participant + nom - prénom + temps resté + movie relié à l'event
 * par semaine: nb d'event + nb d'invité moyen + nb de participant moyen
 * par jour : nb de personne connecté (sur les 30derniers jours) + nb de première connexion
 */

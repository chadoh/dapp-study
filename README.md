# dapp-study

Repo for Lancaster, PA-based study group exploring how to build distributed apps.

This repo will house the app we build together.


# The (D)App we'll build

In the interest of hosting our group's own information in a distributed way, we endeavor to build our own, distributed version of Meetup.com. We envision this work taking place in four phases:

1. **Basics:** Build a simple client-side-only app which stores a list of meetings in browser storage (localStorage), and serve these static assets via IPFS
2. **Database:** Use IPFS PubSub-with-CRDTs as a database to sync the data of the app, stored as a JSON file, between all users' browsers
3. **User authentication:** No idea how this works in the distributed app world, yet!
4. **Money exchange:** The last piece of the distributed web "stack" is ~server-side~**incorruptible** logic, which one needs for things like exchanging money. This is where Ethereum comes in. How we'll implement this in our meetings app: some meetings will cost a fee to attend; an organizer can list a fee, and people must pay the fee to RSVP.


## Phase 1: Basic client-side app

Something we want to keep in mind while we build this: the data store will be a JSON file. This means that the app must store all data within a JS object which can be read from such a JSON file.

Probable data structure:

``` js
// groups & their meetings
{ 
  "dapp-study": {
    "title": "Dapp Study Group",
    "description": "Lancaster, PA-based study group exploring distributed apps",
    "members": [
      { "uuid": "123e4567...", admin: true },
      { "uuid": "765e4321...", admin: false }
    ],
    "events": [
      {
        "date": 1499810400000,
        "title": "Inaugural Meetup",
        "description": "Let's figure out what we're doing",
        "attendees": [ "123e4567...", "765e4321..." ],
        "comments": [
          { "date": 1499810760000, "author": "123e4567...", text: "Can't wait!", comments: [] },
        ]
      }
    ]
  },
  "book-club": {...}
}

// users TODO: figure out how users are authenticated & known to the app
{
  "123e4567...": { "name": "Chad Ostrowski", "nick": "chadoh", "email": "..." },
  "765e4321...": { "name": "Lisa Yoder", "nick": "lisli", "email": "..." }
}
```


## Phase 2: "Database"

...


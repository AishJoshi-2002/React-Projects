## React does efficient DOM manipulations
React.element => object
Virtual DOM => object (js reprsentation of html code)

# Reconciliation Algorith ( React Fiber) REACT16
1 res-container (7 res cards)  =>  (3 res cards)
Actual DOM (<div> <div> <div></div> </div> </div>)
Virtual DOM (representation of actual DOM)

# Diff algo
The second func in useState triggers the diff algo.
finds the diff between updated and prev virtual DOM, then update.

Monolithic Architecture
everything at one project (API, UI, Authentication, DB, SMS)

Microservices (different service for diff roles)
BE, UI, Auth, DB, SMS, Email
seperation of concerns
own specific ports
mapped to a domain then deplyed to same url


approach 1
page loads -> api call -> render the UI

approach 2 (REACT: gives a better UX)
page loads -> render the UI -> api call -> re-render the application

# Types of Routing in web apps
 - Client Side Routing (Client Side routing, only refreshes the components.)
 - Server Side Routing (Reloads the whole page, makes a network call.)

<!-- load on-scroll -->
<!-- <error handling for net> -->

# Class-based components
older way of creating components.
# DOM
Dom api mirrors tree structure of HTML

one global object per browser window or tab

represents browser windor
defines properties like history
innerWidth windows width in pixels
window property = global object itself

var,function at top level global object

const,let,class local scope

js code execution 2 phase
1. content loaded
2. code is run from <script> elements

code order by default top to bottom

once document is loaded and all scripts have run
goes into 2nd phase(async n event driven)
for script to participate register event handler or callbackfn

what happens in 2nd phase is browser invokes event handler fn n other callbacks

first events to have occured  are
domcontentloaded and load events
domcontentloaded triggered by all html doc loaded n parse
load event triggers when all external resources like images are full loaded

worker threads perform computationally intensive 
communicates with main thread using asyn message events

same-origin policy
- governs the interactions of js code in one frame with
content of other frames
- script can only read properties of windows n documents that have the same origin as the documents that contain the script

so what makes same origin
same
1. protocol
2. host
3. port
http and https different origin

overcomed by setting document.domain
or cors

cors allow servers to decide which origins to serve
adds origin: request header, Access-control-allow-origin

Event model

event type
type of event occured
also called event name
type: string

event target
object on which event occured

event handler or event listener
event handlers invoked for an object
=fired, triggered, dispatched

event object
object associated with particular event and contains details
about the event
passed as argument to the event handler function

all event object has a type and target property
type->event type
target->event target

event propagation
browser decides which object to trigger event handlers on
propagation of event is stoped by the event handler invoking a method on the event object

another form of event propagation



















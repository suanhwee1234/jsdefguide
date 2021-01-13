# script execution types
defer, async

defer - execute js after document is fulled loaded and parsed

async - runs script as soon as possible but does not block document parsing while script is being downloaded

async takes precedence

to run the script at the end just put at the end of html

<script> tag can be added to document when u want the script to load.


loading scripts on demand
// Asynchronously load and execute a script from a specifiedURL// Returns a Promise that resolves when the script hasloaded.functionimportScript(url){returnnewPromise((resolve,reject)=>{lets=document.createElement("script");// Create a<script> elements.onload=()=>{resolve();};// Resolvepromise when loadeds.onerror=(e)=>{reject(e);};// Rejecton failures.src=url;// Set thescript URLdocument.head.append(s);// Add<script> to document});}

creates  new <script> tag
add to document<head>
use event handlers to determine when script has loaded successfully
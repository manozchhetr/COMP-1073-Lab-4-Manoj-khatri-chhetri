/* STEP 2: Reference the HEADER and the SECTION elements with variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    const requestURL = "./js/i-scream.json";
    
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL);

    try {
        // STEP 6: Make a network request with the fetch() function, which returns a Response object
        const response = await fetch(request);
        
        // STEP 7: Capture the returned Response object and convert to a JSON object using json()
        const iScream = await response.json();
        
        // STEP 8: Output the iScream JSON object to the console
        console.log(iScream);
        
        // STEP 9a: Invoke the populateHeader function here, then build it below
        populateHeader(iScream);
        
        // STEP 10a: Invoke the showTopFlavors function here, then build it below
        showTopFlavors(iScream);
    } catch (error) {
        console.error("Failed to fetch JSON data:", error);
    }
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    const headerH1 = document.createElement("h1");
    
    // Grab the company name from the JSON object and use it for the text node
    headerH1.textContent = jsonObj.companyName;
    
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(headerH1);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attach the JSON topFlavors object to a variable
    const topFlavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    topFlavors.forEach((flavor) => {
        // Create required HTML elements
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const image = document.createElement("img");
        const pCalories = document.createElement("p");
        const ul = document.createElement("ul");

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = flavor.name;
        image.setAttribute("src", `./images/${flavor.image}`);
        image.setAttribute("alt", `${flavor.name} image`);
        pCalories.textContent = `Calories: ${flavor.calories}`;

        // STEP 10g: Build a loop for the ingredients array in the JSON
        flavor.ingredients.forEach((ingredient) => {
            const listItem = document.createElement("li");
            listItem.textContent = ingredient;
            ul.appendChild(listItem);
        });

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(image);
        article.appendChild(pCalories);
        article.appendChild(ul);

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    });
}
// for commit  adding this unnecessary line//

// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations

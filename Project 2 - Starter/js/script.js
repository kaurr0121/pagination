// select the contact list
const contactList = document.querySelector('.contact-list') 
// number of contacts per page
const contactsPerPage = 10 
let contacts = Array.from(contactList.children ) // convert the NodeList to an array
let pages = [] // array to hold the pages
let pagination = document.querySelector('.pagination') // select the pagination button elements

// slice the array to 2d array of
for (let i = 0; i < contacts.length; i += contactsPerPage) {

    // slice the array to create a new array with the contacts for each page
    const page = contacts.slice(i, i + contactsPerPage) 
    pages.push(page) // push the sliced contacts array to each page
}

// clear the contact list

contactList.innerHTML = '' 
// iterate for first time to create the first page
pages[0].forEach(function(page){
    contactList.append(page)
})

// create the pagination buttons and add the click event listener for each button
for(let i = 0; i < pages.length; i++){
    const page = pages[i]
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = i + 1
    a.addEventListener('click', () => {
        contactList.innerHTML = ''
        page.forEach(contact => contactList.append(contact))
    })
    li.append(a)
    pagination.append(li)
}
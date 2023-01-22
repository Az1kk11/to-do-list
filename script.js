window.addEventListener("DOMContentLoaded", ()=>{
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const data = document.querySelector("#year")
    const btn = document.querySelector(".btn")
    const bookList = document.querySelector("#book-list")

    btn.addEventListener("click", (event)=>{
        event.preventDefault()

        if(title.value == " " && author.value == " " && data.value == " "){
            alert("Toliq maglumat kiritilmegen")
        }else{
            const newrow = document.createElement("tr")

            //create title
            const newtitle = document.createElement("th")
            newtitle.innerHTML = title.value;
            newrow.appendChild(newtitle)

            const newAuthor = document.createElement("th")
            newAuthor.innerHTML = author.value;
            newrow.appendChild(newAuthor)

            const newdata = document.createElement("th")
            newdata.innerHTML = data.value
            newrow.appendChild(newdata)

            bookList.appendChild(newrow)
        }
        title.value = ""
        author.value = ""
        data.value = ""
    })
}) 
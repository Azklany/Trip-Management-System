
let change = document.querySelector(".profile-page .avatar-box .edit")
let edit = document.querySelectorAll(".profile-page .info-box .box > div input")
let no = document.querySelector(".profile-page .avatar-box .no")

change.onclick = function () {

  edit.forEach(ele => {

    ele.removeAttribute("disabled")
    change.style.display = "none"
    no.style.display = "block"
  })

}

no.onclick = function () {

  edit.forEach(ele => {

    ele.setAttribute("disabled", "")
    no.style.display = "none"
    change.style.display = "block"
  })

}

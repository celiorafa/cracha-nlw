const linksSocialMedia = {
  github: 'celiorafa',
  youtube: 'celiorafael',
  facebook: 'rafaelfaria',
  instagram: 'crf.dev',
  twitter: 'crf.dev'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userAvatar.src = data.avatar_url
    })
}
getGitHubProfileInfos()

var countDownDate = new Date('Dec 01, 2021 08:00:00').getTime()
var x = setInterval(function () {
  var now = new Date().getTime()
  var distance = countDownDate - now
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('dowhile').innerHTML =
    'FALTAM<BR>' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

  if (distance < 0) {
    clearInterval(x)
    document.getElementById('dowhile').innerHTML = 'CHEGOU O DIA!'
  }
}, 1000)

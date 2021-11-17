const LinksSocialMedia = {
    github: 'kelvianelandim',
    youtube: 'kelvianelandim',
    facebook: 'kelviane landim',
    instagram: 'kelviane_landim',
    twitter: 'kelviane landim',
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
     }
  }

  changeSocialMediaLinks()

  function getGitHubProfileinfos() {
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`

fetch(url)
.then(response => response.json())
.then(data => {
  userName.textcontent = data.userName
  userbio.textcontent = data.userbio
  userLink.href = data.html_url
  userImage.scr = data.avatr_url
  userlogin.textcontent = data.userlogin
 })
}

getGitHubProfileinfos()

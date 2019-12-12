function avatarExists() {
    let avatar = document.querySelector("img#settings-avatar");
    const request = new Request(avatar.getAttribute("src"));
    fetch(request).then(response => {
        if (response.status === 404) {
            avatar.setAttribute("src", "/static/default_avatar.png");
        }
    })
}

avatarExists();
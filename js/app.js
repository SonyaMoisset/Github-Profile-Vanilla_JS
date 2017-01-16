fetch('https://api.github.com/users/sonyamoisset')
    .then(data => data.json())
    .then(data => {
        var userLink1 = document.getElementById("username-link1");
        var userLink2 = document.getElementById("username-link2");
        var repoLink = document.getElementById("repoLink");
        var followerLink = document.getElementById("followerLink");
        var followingLink = document.getElementById("followingLink");
        var avatar = document.getElementById("avatar");
        var email = document.getElementById("email");
        var website = document.getElementById("website");

        userLink1.setAttribute('href', data.html_url);
        userLink2.setAttribute('href', data.html_url);
        repoLink.setAttribute('href', 'https://github.com/' + data.login + '?tab=repositories');
        followerLink.setAttribute('href', 'https://github.com/' + data.login + '?tab=followers');
        followingLink.setAttribute('href', 'https://github.com/' + data.login + '?tab=following');
        avatar.setAttribute('src', data.avatar_url);
        email.setAttribute('href', 'mailto:' + data.email);
        website.setAttribute('href', 'https://' + data.blog);

        var username = document.getElementById("username");
        var city = document.getElementById("city");
        var company = document.getElementById("company");
        var bio = document.getElementById("bio");
        var repo = document.getElementById("repo");
        var followers = document.getElementById("followers");
        var following = document.getElementById("following");

        username.innerHTML = data.name;
        city.innerHTML = data.location;
        company.innerHTML = data.company;
        bio.innerHTML = data.bio;
        repo.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
});

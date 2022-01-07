# README

Why did I create this? Because I wanted to see if Netlify and PlanetScale could play nice together! And it turns out they can 🎉

Some useful notes...

* Why [Eleventy](https://www.11ty.dev/)? Because I'd not really played with it and I wanted to. I like Markdown and JavaScript and this lets me mess around with both.
* [PlanetScale](https://planetscale.com/) is super convenient for schema migrations, but less so for adding data when playing around like this. It was however nice to add the subscribers table as a PR and have it deploy. I used another SQL tool for ease of viewing the data and some INSERT/DELETE fun. Connection strings are the same as those needed in the code/environment.
* I don't use `dotenv` because everything is run via the [Netlify CLI]() and you can use the same variables you set for Netlify in your [local environment](https://www.netlify.com/blog/2021/07/12/managing-environment-variables-from-your-terminal-with-netlify-cli/). Again, downsides for coding on the move with no connection but mostly doing it because I can!
* Commands in `package.json` are all configured to use `netlify` CLI commands
* The subscribe functions INSERT functionality is commented out in the committed code because this deploys to a demo Netlify site and I don't want random data in the database. To try this out, clone the repo, setup your own database and then play with `netlify dev` and `submission-created` to see it in action. Function events work in `netlify dev` if you've done a `deploy` (or `deploy --prod`) and Netlify is aware of the form existing.

For those curious, very basic SQL to create the database is:
```sql
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` blob,
  `published` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

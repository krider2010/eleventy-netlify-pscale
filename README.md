# README

Why did I create this? Because I wanted to see if Netlify and PlanetScale could play nice together! And it turns out they can 🎉

Some useful notes...
* PlanetScale is super convenient for schema migrations, but less so for adding data when playing around like this
* I don't use `dotenv` because everything is run via the [Netlify CLI]() and you can use the same variables you set for Netlify in your [local environment](https://www.netlify.com/blog/2021/07/12/managing-environment-variables-from-your-terminal-with-netlify-cli/). Again, downsides for coding on the move with no connection but mostly doing it because I can!
* For those curious, very basic SQL to create the database is
```sql
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` blob,
  `published` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
```

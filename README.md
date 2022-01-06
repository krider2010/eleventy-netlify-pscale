# README

TODO

[ ] What is this
[ ] Why
[ ] Technologies used
[ ] Why not using dotenv (netlify cli) - https://www.netlify.com/blog/2021/07/12/managing-environment-variables-from-your-terminal-with-netlify-cli/

Packages...?
elventy-navigation

luxon
markdown-it
markdown-it-anchor

  "devDependencies": {
    "@11ty/eleventy-plugin-rss": "^1.1.1",
    "@11ty/eleventy-plugin-syntaxhighlight": "^3.1.2",
    "@tailwindcss/forms": "^0.3.3",
    "eleventy-plugin-nesting-toc": "^1.3.0",
    "tailwindcss": "^2.2.7"
  }

process.env.X for variables set via netlify command line

`netlify env:set MY_ENV_VAR "The value of my environment variable"`


CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `body` blob,
  `published` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

Completed in 102 ms

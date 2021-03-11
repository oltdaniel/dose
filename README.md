# dose

![](screenshot.png?raw=true)

## Installation
First download this theme to your `themes` directory:

```bash
cd themes
git clone https://github.com/oltd/dose.git
```
and then enable it in your `config.toml`:

```toml
theme = "dose"
```

The following taxonomies are enabled:
```toml
taxonomies = [
    {name = "tags"},
]
```

And the theme uses the following extras:
```toml
[extra]
author = "oltd" # just the name for e.g. the footer
github = "oltd" # your github username
twitter = "oltd_maker" # your twitter username
show_me = true # whether to show this huge me element or not (index only)
```

### About

This theme is just for my personal site, but feel free to use it. I've written the CSS by my own (even though my CSS is a bit rusty). But this results in a fast loading page. The profile images are resized by zola. For typography I used [`Abril Fatfac, 400 Regular`](https://fonts.google.com/specimen/Abril+Fatface) for the headings, and [`JetBrains Mono, 300 Light, 800 Extra-bold`](https://fonts.google.com/specimen/JetBrains+Mono) for the regular text. I will extend the use of SASS variables in the future, to make it even easier to customize or remix it.

### TODO

- [ ] blog content styling
- [ ] SEO
- [ ] customizable personal links
- [ ] more sass variables for customizing

## License

![GitHub](https://img.shields.io/github/license/oltd/dose)
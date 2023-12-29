# Game Hub
<div align="center">
<img src="/src/assets/logo.webp">
</div>

## Table of contents
- [About](#about)
- [Features](#features)
- [Getting started](#getting-started)
- [Showcasing](#showcasing)
- [Tools](#tools)
- [File structure](#file-structure)
## About
> An all in one go-to website for every renowned Game ever known, it's your No. 1 refernce for your gaming experience. It contains a massive collection of games along with indepth information about them, including supported OSs and screenshots from gameplay along with the game trailer to better grasp a feel of how the game is.
## Features
It comes with variety of features in a catchy UI that's easy to use providing you with a maximum user experience.
- Powerful search engine
- Supports Dark Mode
## Getting started
### Run from local server
1) clone project (https://github.com/YousefMahmod/game-hub.git)
2) npm i
3) npm run dev
### Demo
- [Demo](https://game-9cm8qi814-youssefs-projects-93a01e1a.vercel.app/)
## Showcasing
- [Scrolling,Filters and Search video](https://drive.google.com/file/d/1Mkz0sRPhuX91tlawE_LIFKb64HZUTKGX/view?usp=sharing)
- [Game detail page with showing light mode](https://drive.google.com/file/d/1OGtohjG0q1x9tvwwoGM45krCzOF4CEHs/view?usp=sharing)
## Tools
- React.js with typescript
- react-dom
- react-router-dom for handling routes
- react-infinite-scroll-component
- chakra ui for styling
- axios for dealing with apis
- react query for handling server state
- zuztand for state management
## File structure
``` bash
│
└───src
    │   index.css
    │   main.tsx
    │   routes.tsx
    │   store.ts
    │   theme.ts
    │   vite-env.d.ts
    │
    ├───assets
    │       bulls-eye.webp
    │       logo.webp
    │       meh.webp
    │       no-image-placeholder.webp
    │       react.svg
    │       thumbs-up.webp
    │
    ├───components
    │       ColorModeSwitch.tsx
    │       CriticScore.tsx
    │       DefinitionItem.tsx
    │       Emoji.tsx
    │       ExpandableText.tsx
    │       GameAttributes.tsx
    │       GameCard.tsx
    │       GameCardContainer.tsx
    │       GameCardSkeleton.tsx
    │       GameGrid.tsx
    │       GameHeading.tsx
    │       GameScreenShots.tsx
    │       GameTrialer.tsx
    │       GenreList.tsx
    │       NavBar.tsx
    │       PlatformIconList.tsx
    │       PlatformsSelector.tsx
    │       SearchInput.tsx
    │       SortSelector.tsx
    │
    ├───data
    │       genres.ts
    │       platforms.ts
    │
    ├───entities
    │       Game.ts
    │       Genre.ts
    │       Platform.ts
    │       Publisher.ts
    │       ScreenShot.ts
    │       Trailer.ts
    │
    ├───hooks
    │       useGame.ts
    │       useGames.ts
    │       useGenre.ts
    │       useGenres.ts
    │       usePlatform.ts
    │       usePlatforms.ts
    │       useScreenShots.ts
    │       useTrailers.ts
    │
    ├───pages
    │       ErrorPage.tsx
    │       GameDetailPage.tsx
    │       HomePage.tsx
    │       Layout.tsx
    │
    └───services
            api-client.ts
            image-url.ts
```


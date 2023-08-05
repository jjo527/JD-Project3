# JD-Project3 - Uno! Trivia
## Deployment link (working! :smile:): https://jjo527.github.io/uno-deploy/ 

# Steps for running locally
- Clone repository
- install node, vite, react, and other dependencies
    - follow the environment setup from this video: https://youtu.be/SqcY0GlETPk
-  `npm run dev` from app directory
    - should launch on local host like the following images
    - ![image](https://github.com/jjo527/JD-Project3/assets/91023483/c5ae4be0-d7ea-49de-9bc1-89d9f1a3b01e)
    - ![image](https://github.com/jjo527/JD-Project3/assets/91023483/665bbd68-a390-4709-8e15-f1fffa53acbd)


# Files of Interest
- main app is all in the app directory
- [app/src/App.tsx](https://github.com/jjo527/JD-Project3/blob/main/app/src/App.tsx) = main app runner
- [app/src/components/UnoGame.tsx](https://github.com/jjo527/JD-Project3/blob/main/app/src/components/UnoGame.tsx) = main component with game logic
- [app/src/card_types.ts](https://github.com/jjo527/JD-Project3/blob/main/app/src/card_types.ts) = declaring card and other useful types
- [app/src/utils.ts](https://github.com/jjo527/JD-Project3/blob/main/app/src/utils.ts) = generating the deck

  ## Web Socket Stuff (testing)
  - server and demo app directories
      - ![image](https://github.com/jjo527/JD-Project3/assets/91023483/66681918-eede-4a3a-a75e-445c93c6249f)
  - run with following commands
		  - `cd server`
		  - `npm install`
		  - `npm start`
      - open `app/index.html` from file explorer in web browser


# tictactoe-game-uing-ngrx

## install/generate the app
ng new client --routing --style scss --skip-tests
cd into the client folder

## install schematic
ng add @ngrx/schematics@latest

## install devtools
ng add @ngrx/store-devtools@latest

## install ngrx store latest
ng add @ngrx/store@latest

## install store state at root
ng generate store State --root --module app.module.ts

## install board reducer along with index.ts file
ng generate reducer User --reducers reducers/index.ts

## install board action
ng generate action Board --group

## install ngrx effects latest
ng add @ngrx/effects@latest  not going to use it in this project

install selectors
ng generate selector Board --group



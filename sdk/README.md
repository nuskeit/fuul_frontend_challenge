![](https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/636fecb23e9741026fee1b94_fuul-logo-color.webp "Fuul")

# Fuul SDK (Demo)

## What is it

__The Fuul SDK provides access to your Web3 Projects.__

It powers your projects with Web3 capabilities, setting you in the right way and helping you promote your decentralized endeavors.

## Single Service

The only services that is exposes to you is the static method ```Fuul.init(...)```, the singular call of a service that enables the Web 3.0 on your website.

## Installation

Open a terminal and run the following command:
```
npm install fuul-sdk
```
## Environment variables
In order to enable the connection to your Fuul Project, you need to provide the  ```apiKey```  associated with your project: if you don't already have one, create a ```.env``` file in ```/site/``` and add the following entry: 

for vite projects:
```
VITE_FUUL_API_KEY=your_project_key
```
for CRA projects:
```
FUUL_API_KEY=your_project_key
```

### Invoke the ```Fuul.init(...)``` service

At this point you can import the Fuul-SDK into your app:

```ts
import {fuul} from {fuul-sdk}
```
and invoke the ```init``` service with the ```apiKey```

for vite projects:

```ts
const project = Fuul.init({apiKey:import.meta.env.VITE_FUUL_API_KEY})
```

for CRA projects:

```ts
const project = Fuul.init({apiKey:process.env.VITE_FUUL_API_KEY})
```

### return type
The return type is:
```ts
interface IProject {
	readonly key: string
	name: string
	smartContract: string
	net: string
	referrer: string
}
```

## Best practices

- To ensure access to your Fuul Project's data from wherever you may need it within your code, you should ensure to invoke and store it beforehand.

- As a general rule of thumb, it is advised to place the call in the context root of your app, and provide it within a context of its own.

- To be sure no one will mess it up, you can ```Object.freeze()``` so it will remain sealed in runtime.
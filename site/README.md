![](https://cdn.prod.website-files.com/636fea919b96f729afeb9bf3/636fecb23e9741026fee1b94_fuul-logo-color.webp "Fuul")

# Fuul Powered Website (Demo)

## This site implements the Fuul SDK

Once you mint a NFT, you get the option to share the experience with others and earn rewards at the same time.

__The modal shown automatically is enriched with Fuul Projects data, including the referral program key, embedded into the shared URL.__


## General

This site is already linked to the demo Fuul-SDK, so the only thing you should need doing, is run the install commands as instructed below.

## Installation

the solution's root folder contains two sub folders:
```
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         16/6/2025     09:45                sdk
d-----         16/6/2025     09:52                site
```

Open a terminal, and run the following commands sequence starting from the root folder:
```
cd sdk
pnpm install
cd ..
cd site
pnpm install
```
## Environment variables
In order to be able to connect to your Fuul Project, you need to provide the  ```apiKey```  asociated with your project. Store it in an environment variable inside a Create a ```.env``` file with the following entry: 

for vite projects:
```
VITE_FUUL_API_KEY=your_project_key
```
for CRA projects:
```
FUUL_API_KEY=your_project_key
```
## Test Run

After successfully finished, run the site from the ```/site/``` 

```
pnpm run dev
```

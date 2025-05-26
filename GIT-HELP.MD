


## Starte den Dev Server:
npx next dev -H 0.0.0.0



## In alexi branch wechseln:
git checkout alexi

## Neusten Stand abrufen:
git pull origin alexi

## Änderungen hinzufügen 
git add .

## Änderungen commiten
git commit -m "Beschreibung der Änderungen"

## Änderungen pushen
git push origin alexi




## Starte Server Alex:
npx next dev -H 0.0.0.0 -p 3000


git add .

git commit -m "Login & Signup geht - Eywa Claude Liebe"

git push


Zu einem branch wechseln:
git checkout main

Branch erstellen und reinwechseln:
git checkout -b production

In production pushen
git push origin production






## Änderung in main committen und pushen:
git add . 
git commit -m "Fix login.js issue"
git push origin main


## Änderung von main in staging mergen:
git checkout staging
git merge main
git push origin staging


## Änderung von staging in production mergen:
git checkout production
git merge staging
git push origin production


## Bei Problemen:
git add <datei-mit-konflikten>
git commit -m "Resolve merge conflicts: Merge main into staging"


## falls branch noch nicht lokal vorhanden ist:
git fetch

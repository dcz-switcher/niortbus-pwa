# Niort Bus Progressive Web App

## A propos

Ce repo héberge le code source de la version PWA de l'application Android Niort bus (https://play.google.com/store/apps/details?id=com.niortreactnative)


Pour accéder à l'app et l'installer sur votre smartphone :

https://dcz-switcher.github.io/niortbus-pwa/


Si vous avez des questions, remarques : david.chollez[@]gmail[.com]

#

## Une progressive web app ?!? c'est quoi ?

Pour faire court, une PWA est un site web que vous allez pouvoir installer sur votre smartphone comme une application classique mais sans passer par les stores (app store pour iOS et play store pour Android)


### Intérêt par rapport à l'app sur le store

L'intérêt d'une Progressive Web App (ou PWA) est de fonctionner sur tous les appareils, un seul développement est donc nécessaire.

L'autre intérêt pour le développeur est que l'application n'est pas sur les stores, ce qui signifie qu'il ne faut pas payer pour proposer son application.

Enfin, la mise à jour se fait de manière transparente pour l'utilisateur.

### Limites par rapport à l'app sur le store

La limite est déjà que l'application n'est pas facile à trouver pour les utilisateurs, nous avons tous aujourd'hui le réflexe d'aller chercher sur le store nos applications.

L'autre limite vient d'un support inégal par les constructeurs.
Apple par exemple ne supporte pas, sur iPhone, toutes les fonctionnalités du navigateur Chrome sous Android.
Pire, sur un smartphone Wiko avec Android 8.0 (Oreo), on a moins de prise en charge que sur un smartphone Samsung sous Android 6.0 (Marshmallow).
Dans ce dernier cas la faut incombe sans doute à Wiko et une surcouche à Android :-(

Enfin, les PWA ne sont pas adaptées à toutes les situations, créer un clône de Strava (ou Runtastic) en PWA relève du fantasme, l'utilisation du GPS nécessitant un développement classique, garant des meilleures performances.

### et pour niort bus ?

Après avoir développé et publié sur le store la version Android, j'ai eu des demandes pour une version iOS.

Publier sur Android m'a coûté, à l'époque, 40€. Le coût pour disposer d'un compte développeur à vie sur la plateforme Android.

Pour publier sur l'app store d'Apple, il faut être prêt à débourser 100€ tous les ans !
L'application étant gratuite, je ne me vois pas payer cette somme tous les ans.

Début 2018, iOS 11 sort et un avec lui le support partiel des PWA sous Safari !
Je saisi donc l'opportunité et développe une version compatible avec les iPhones.

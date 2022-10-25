Il s'agit d'un projet [Next.js](https://nextjs.org/) démarré avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pour commencer

Tout d'abord, lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `pages/index.js`. La page se met à jour automatiquement lorsque vous modifiez le fichier.

Les routes API sont accessibles sur [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Ce point de terminaison peut être modifié dans `pages/api/hello.js`.

Le répertoire `pages/api` est mappé sur `/api/*`. Les fichiers de ce répertoire sont traités comme des itinéraires d'API au lieu de pages React.

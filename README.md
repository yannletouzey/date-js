# Horloge Parlante

Crée une api web avec express qui expose tous les endpoints suivants. Tu auras besoin de manipuler des objets [Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) pour la plupart d'entre eux

- `/days` liste tous les jours de la semaine  
  Réponse du type

  ```json
  {
    "days": [
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
      "dimanche"
    ]
  }
  ```

  _Cela signifie que si je me rend sur http://localhost:3000/days je veux obtenir le résultat ci-dessus (une réponse sous le format JSON qui liste tous les jours)_

- `/hour` donne l'heure actuelle  
  Réponse du type
  ```json
  {
    "time": "13:05"
  }
  ```
- `/date` donne la date actuel au format Y-m-d (année mois jour)
- `/tomorrow` donne l'heure qu'il sera demain à la même heure et la date de demain
- `/data` donne les 3 infos précédentes dans 3 propriétés d'un objet
- `/weekday/:y/:m/:d` donne le jour de la semaine pour la date donnée  
   Par exemple pour la requête `/weekday/1990/07/04` on obtient
  ```json
  {
    "day": "Mercredi"
  }
  ```
- `/age/:y/:m/:d` : donne l'age qu'on a si on est né à la date donnée

Bonus

- `/date/:y/:m/:d/:locales` donne la date au format texte selon la localité demandée (trouver la méthode adaptée)
  Le nom du jour et le mois figurent en texte et l'année et le numéro du jour en chiffre
  Si aucune localité n'est passé dans l'url, donner la liste des dates pour toutes les locales suivantes :

```
[
  'fr-fr',
  'en-us',
  'en-gb',
  'de-de',
  'es-es',
  'it',
]
```

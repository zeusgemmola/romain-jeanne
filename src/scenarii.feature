Given la page du convertisseur est chargée
And La valeur de From et la valeur de To sont différentes
When La valeur du montant est saisie
And La valeur saisie est un numérique
And La valeur saisie est différente de 0
Then Une requète à l'API va se faire pour récupérer le taux de change et le résultat de conversion va etre affiché
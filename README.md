# M1Oblig2
Obligatorisk oppgave to til modul 1
Obligatorisk oppgave 2
Når modul 1 er over, må man ha fått godkjent obligatorisk oppgave 1 og 2 for å kunne fortsette på modul 2. 

Obligatorisk oppgave 2 leveres inn som en e-post som sendes til oblig@getacademy.no. E-posten skal inneholde dette:

Lenke til et GitHub-repository som inneholde koden som er laget
Lenke til GitHub-pages, hvor applikasjonen skal kunne kjøres direkte
Oppgave

Oppgaven tar utgangspunkt i koden som er vist nederst på siden. Dette er kode som lager et stolpediagram basert på en liste av tall - hvor hvert tall er mellom 1 og 10. Oppgaven består i å fullføre applikasjonen. Den er skrevet etter Model View Controller-patternet - og koden du legger til skal også være det. 

<!-- Gjør det mulig å velge en stolpe. Man skal kunne velge en stolpe ved å klikke på den. Den skal da få en svart ramme rundt seg, og i tillegg skal teksten oppdateres til for eksempel "Valgt stolpe: 1". Hvis man klikker på den stolpen som allerede er valgt, skal deretter ingen stolpe være valgt. -->

<!-- Knappene "Endre valgt stolpe" og "Fjerne valgt stolpe" skal være disablet når ingen stolpe er valgt - og enablet ellers. -->

<!-- Når man trykker på "Fjerne valgt stolpe", skal den valgte stolpen fjernes. Alle stolper som var til høyre for denne, flyttes da ett hakk til venstre. Det vil si at om numbers er [1, 2, 3, 4, 5] - og så fjerner stolpen i midten, så skal numbers etter det være  [1, 2, 4, 5]. -->

<!-- Når man trykker på "Endre valgt stolpe", skal den valgte stolpen endre verdien som brukeren har skrevet i input-boksen. Det er kun 1,2,3,4,5,6,7,8, 9 og 10 som er gyldige verdier. Dersom brukeren ikke har skrevet en gyldig verdi i input-boksen, skal det gis en feilmelding. 

Når man trykker på "Legg til stolpe", skal det legges til et nytt tall sist i listen (og en ny stolpe lengst til høyre i stolpediagrammet) med verdien som brukeren har skrevet i input-boksen. Dersom brukeren ikke har skrevet en gyldig verdi i input-boksen, skal det gis en feilmelding.  -->

Lag enhetstester av controller-funksjonene! Altså funksjonene for å:
* velge stolpe (teste både velge den som er valgt og en annen)
* slette en stolpe
* endre en stolpe
* legge til en stolpe

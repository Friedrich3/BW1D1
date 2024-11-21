# BW1D1
Build Week 1 Gruppo 7
-Che cos'è

Questa è un'applicazione che gestisce un esame virtuale composto da 10 domande e restituisce due risultati: uno in caso di superamento dell'esame e l'altro in caso di fallimento.

-Che cosa fa
Pagina 1
Dopo aver accettato il regolamento, l'applicazione passerà nella pagina 2 delle domande dove ci saranno una determinata quantità di domande in input decisa dalla base dati con un tempo prestabilito di 45 secondi per ciascuna domanda, che permette all'utente di selezionare la propria risposta. In caso di risposta selezionata, colleziona il risultato della domanda, altrimenti, se non è stata selezionata una risposta o allo scadere del tempo, la domanda verrà automaticamente considerata errata. 
Dopo l'ultima domanda l'applicazione procederà direttamente tramite click del bottone o allo scadere del tempo alla pagina 3, la pagina dei risultati. Su questa pagina verrà visualizzato un grafico che mostra le relative percentuali di risposte giuste e sbagliate e in cui compare un messaggio diverso a seconda che l'esame sia stato superato o meno (superamento al 60% di risposte corrette).

Dopo la pagina dei risultati è possibile accedere alla pagina feedback, nella quale è possibile dare un voto da 1 a 10 e lasciare un commento sull'applicazione. Nel caso venga lasciato un voto, l'applicazione andrà nella pagina di ringraziamenti e da lì si potrà tornare alla pagina iniziale del test. 

-Come si usa

Pagina 1: 
C'è bisogno di cliccare e accettare il regolamento e poi cliccare sul bottone per proseguire. 

Pagina 2: 
Bisogna cliccare sulla risposta che si vuole inoltrare per la domanda fornita e cliccare sul bottone per confermare la propria risposta. 
Va eseguito per ogni domanda; in caso di mancato click sul bottone, la risposta sarà SEMPRE ritenuta errata. 

Pagina 3: 
Non ha interazione con l'utente, se non per il tasto di feedback.


Pagina 4:
Bisogna cliccare sul numero di stelline in base alla valutazione che si vuole dare all'applicazione, ed è possibile lasciare un commento e cliccare sul bottone per proseguire. In caso di mancato feedback, l'applicazione riporterà l'utente nella prima pagina di Welcome, altrimenti verrà portato nella pagina 5, i ringraziamenti, dove potrà scegliere se tornare alla pagina inziale oppure tornare alla pagina dei risultati. 

-Cosa aspettarsi dall'applicazione

Dall'applicazione ci si può aspettare il calcolo in percetuale corretto del numero di risposte corrette ed errate date da una serie di domande fornite dalla base dati.

-Tecnologie utilizzate

HTML, CSS, JavaScript, ChartJS

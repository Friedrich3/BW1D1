# BW1D1
Build Week 1 Gruppo 7
-Che cos'è

Questa è un'applicazione che gestisce un esame virtuale composto da 10 domande e restituisce due risultati: il primo in caso di superamento dell'esame e il secondo in caso di fallimento.

-Che cosa fa
Pagina 1
Dopo aver accettato il regolamento (obbligatorio), l'applicazione passerà alla pagina 2 dove si trovano le domande. 
In questa pagina, ci saranno una determinata quantità di domande in input decisa dalla base dati con un tempo prestabilito di 45 secondi per cadauna. L'utente potrà selezionare la risposta che ritiene più corretta. In caso di risposta selezionata, il risultato della domanda viene collezionato, altrimenti, se non è stata selezionata una risposta, allo scadere del tempo, la domanda verrà automaticamente considerata errata. 
Dopo l'ultima domanda, l'applicazione procederà direttamente tramite un 'click' del bottone, o allo scadere del tempo, alla pagina 3, nonchè la sezione dei risultati. Su questa pagina verrà visualizzato un grafico che mostra le relative percentuali di risposte giuste e sbagliate e in cui compare un messaggio diverso a seconda che l'esame sia stato superato o meno. La soglia di superamento dell'esame è fissata al 60% di risposte corrette. 
Sotto il grafico, scrollando con il mouse, si possono visualizzare le risposte date; qualora la domanda sia sbagliata, vengono visualizzate le relative correzzioni e viceversa. 
Dopo la pagina dei risultati è possibile accedere alla pagina feedback, nella quale, tramite le stelle, è possibile assegnare un voto da 1 a 10 e lasciare un commento sull'applicazione. Nel caso venga lasciato un voto, l'applicazione andrà nella pagina di ringraziamenti e da lì si potrà tornare alla pagina iniziale del test. 

-COME SI USA?

Pagina 1: 
C'è bisogno di cliccare e accettare il regolamento e poi cliccare sul bottone per proseguire. 

Pagina 2: 
Bisogna cliccare sulla risposta che si vuole inoltrare per la domanda fornita e cliccare sul bottone per confermare la propria risposta. 
Va eseguito per ogni domanda; in caso di mancato click sul bottone, la risposta sarà SEMPRE ritenuta errata. 

Pagina 3: 
Tramite il link 'Scroll down to see your answers', o un semplice scroll down, si possono vedere le correzzioni. 
Tramite il bottone 'FEEDBACK' posizionato sotto il doughnut chart si passa alla pagina successiva.
Tramite il bottone finale 'HOME' si tornerà sulla pagina Welcome (p.1).


Pagina 4:
Bisogna cliccare sul numero di stelline in base alla valutazione che si vuole dare all'applicazione, ed è possibile lasciare un commento e cliccare sul bottone per proseguire. In caso di mancato feedback (inteso come mancanza di stelle), l'applicazione riporterà l'utente nella prima pagina di Welcome. 
Qualora fosse lasciata una valutazione (sulla scala da 1-10) l'utente sarà indirizzato alla pagina 5, di ringraziamenti, dove potrà scegliere tra le seguenti cose:
Tornare alla pagina dei risultati tramite button 'Go to your results'
Tornare alla Welcome page tramite button 'Go home'
Scoprire di più sulla community EPICODE tramite il click al logo e/o il click sul footer 'EPICODE WEBSITE'

-Cosa aspettarsi dall'applicazione

Dall'applicazione ci si può aspettare il calcolo in percetuale corretto del numero di risposte corrette ed errate date da una serie di domande fornite dalla base dati.

-Tecnologie utilizzate

HTML, CSS, JavaScript, ChartJS

In Texten dutzen wir grundsätzlich immer


Jegliche Nextjs 15 app router javascript code muss in tailwind die styles/globals.css variabeln benutzt und immer für white und darkmode optimiert sein.
Schreibe grundsätzlich nur produktion ready code!


:root {
    --primary-bg-color: #EBF5EE;
  --secondary-bg-color: #FFFFFF;
  --accent-color: #f56e21;
  --secondary-accent-color: #FFA256;
  --light-accent-color: #fed7aa;
  --font-color: #1E152A;
  --fun-color: #20A4F3;
  --fun-color-secondary: #A0DFFF;
  --secondary-font-color: #6B7280;
  --table-color: #F3F4F6;
  --warning-color: #DC2626;
  --light-warning-color: #FECACA;
  --dark-warning-color: #9F0712;
  --confirm-color: #22C55E;
  --dark-confirm-color: #236240;
  --light-confirm-color: #B7DDC2;
}

/* Darkmode-Variablen via .dark-Klasse */
.dark {
  --primary-bg-color: #202938;
  --secondary-bg-color: #2C2C2C;
  --accent-color: #f56e21;
  --secondary-accent-color: #FFA256;
  --light-accent-color: #fed7aa;
  --font-color: #EDEDED;
  --fun-color: #20A4F3;
  --fun-color-secondary: #A0DFFF;
  --secondary-font-color: #A3A3A3;
  --table-color: #394151;
  --warning-color: #DC2626;
  --light-warning-color: #FECACA;
  --dark-warning-color: #9F0712;
  --light-warning-color: #FECACA;
  --confirm-color: #22C55E;
  --dark-confirm-color: #236240;
  --light-confirm-color: #B7DDC2;
}
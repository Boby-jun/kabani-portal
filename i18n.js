/* Kabani Safaris client portal: interface languages (English, French, Spanish).
   Only the portal's own wording is translated here. A trip's own text (itinerary, hotel and
   guide descriptions) is written per trip and stays as entered.
   Pick order: ?lang=fr in the link, then the visitor's saved choice, otherwise English (the browser language is deliberately ignored).
   t('English text', {n: 3}) returns the translation, or the English text when there is none. */
(function () {
  var KEY = 'kabani_portal_lang', SUP = ['en', 'fr', 'es'];
  /* English only for now (decision 24 Nov 2026). Set to true to bring back French and Spanish: the switch,
     ?lang= links, saved choices and the translated wording all come back. */
  var LANGUAGES_ON = false;

  function detect() {
    if (!LANGUAGES_ON) return 'en';
    var fixed = document.documentElement.getAttribute('data-lang-fixed');
    if (fixed) return fixed;
    var m = /[?&]lang=(en|fr|es)\b/.exec(location.search);
    if (m) { try { localStorage.setItem(KEY, m[1]); } catch (e) {} return m[1]; }
    try { var s = localStorage.getItem(KEY); if (SUP.indexOf(s) >= 0) return s; } catch (e) {}
    return 'en'; /* English is the standard; FR and ES only when chosen with the switch or a ?lang= link */
  }
  var LANG = detect();
  window.LANG = LANG;
  window.LOCALE = { en: 'en-GB', fr: 'fr-FR', es: 'es-ES' }[LANG];
  document.documentElement.setAttribute('lang', LANG);

  var DICT = { fr: {}, es: {} };

  /* ---------------- French (vous) ---------------- */
  DICT.fr = {
    /* login */
    'Client Login — Kabani Safaris': 'Connexion client — Kabani Safaris',
    'Your safari, all in one place.': 'Votre safari, tout au même endroit.',
    'Your itinerary, your guide, your payments and your checklist, kept up to date.': 'Votre itinéraire, votre guide, vos paiements et votre liste de préparation, toujours à jour.',
    'Back to kabanisafaris.com': 'Retour à kabanisafaris.com',
    'Client login': 'Connexion client',
    'Enter the email address you gave us when you booked. We will send you a one-time code.': 'Saisissez l’adresse e-mail que vous nous avez donnée lors de la réservation. Nous vous enverrons un code à usage unique.',
    'Email address': 'Adresse e-mail',
    'Continue with your email': 'Continuer avec votre e-mail',
    'One-time code': 'Code à usage unique',
    'Sign in': 'Se connecter',
    'Send a new code': 'Envoyer un nouveau code',
    'Use a different email': 'Utiliser une autre adresse e-mail',
    'Not you? Use a different email': 'Ce n’est pas vous ? Utiliser une autre adresse e-mail',
    'You are signed out. Press Continue and we will send you a new code.': 'Vous êtes déconnecté. Appuyez sur Continuer et nous vous enverrons un nouveau code.',
    'Sign out? You will need a new code to come back.': 'Se déconnecter ? Vous aurez besoin d’un nouveau code pour revenir.',
    '@login-hint': 'Pas encore client ? <a href="https://kabanisafaris.com/plan-your-journey.html">Planifiez votre voyage</a>. Votre voyage apparaît ici dès que Rafael l’a associé à votre adresse e-mail.',
    'Privacy': 'Confidentialité',
    'Terms': 'Conditions',
    'Signing you in…': 'Connexion en cours…',
    'Send a new code in {n}s': 'Nouveau code dans {n} s',
    'The portal is not configured yet.': 'Le portail n’est pas encore configuré.',
    'For your security, you were signed out after 30 minutes without activity. Please sign in again.': 'Pour votre sécurité, votre session a été fermée après 30 minutes d’inactivité. Veuillez vous reconnecter.',
    'Please enter a valid email address.': 'Veuillez saisir une adresse e-mail valide.',
    'Sending…': 'Envoi…',
    'Too many requests. Please wait a minute and try again.': 'Trop de demandes. Patientez une minute, puis réessayez.',
    'If {email} has a trip with us, a code is on its way. It can take a minute.': 'Si {email} correspond à un voyage chez nous, un code est en route. Cela peut prendre une minute.',
    'The code has {n} digits.': 'Le code comporte {n} chiffres.',
    'Checking…': 'Vérification…',
    'That code did not work. Check it, or send a new one.': 'Ce code n’a pas fonctionné. Vérifiez-le ou demandez-en un nouveau.',
    'A new code is on its way.': 'Un nouveau code est en route.',

    /* trip page: menu and sections */
    'Your Trip — Kabani Safaris': 'Votre voyage — Kabani Safaris',
    'Open menu': 'Ouvrir le menu',
    'Close menu': 'Fermer le menu',
    'Client portal': 'Espace client',
    'Overview': 'Aperçu',
    'Itinerary': 'Itinéraire',
    'Your guide': 'Votre guide',
    'Pricing': 'Tarifs',
    'Your trip': 'Votre voyage',
    'Travel eSIM': 'eSIM de voyage',
    'Contact': 'Contact',
    'Back to admin': 'Retour à l’admin',
    'Back to website': 'Retour au site',
    'Signed in as': 'Connecté en tant que',
    'Sign out': 'Se déconnecter',
    'Trip readiness': 'Préparation du voyage',
    'Milestones': 'Étapes',
    'Your itinerary, day by day': 'Votre itinéraire, jour après jour',
    'Tap a day to open it. Rafael adjusts details around wildlife and weather, and you always see the latest version here.': 'Touchez un jour pour l’ouvrir. Rafael ajuste les détails selon la faune et la météo, et vous voyez toujours ici la dernière version.',
    'Your investment': 'Votre investissement',
    'Amount paid': 'Montant payé',
    'Included': 'Inclus',
    'Not included': 'Non inclus',
    'What Kabani Safaris offers': 'Ce que Kabani Safaris vous offre',
    'Your trip, step by step': 'Votre voyage, étape par étape',
    'What is confirmed, and what is left for you to do before you travel.': 'Ce qui est confirmé, et ce qu’il vous reste à faire avant de partir.',
    'Bookings': 'Réservations',
    'Before you travel': 'Avant de partir',
    'Checklist progress': 'Progression de la liste',
    'Stay connected with a travel eSIM': 'Restez connecté avec une eSIM de voyage',
    'No roaming bills and no SIM card. Activated in minutes, in more than 190 countries.': 'Pas de frais d’itinérance, pas de carte SIM. Activée en quelques minutes, dans plus de 190 pays.',
    'Get your eSIM': 'Obtenir votre eSIM',
    'Asante sana. Questions?': 'Asante sana. Des questions ?',
    'Rafael is available by phone every day until you are back home.': 'Rafael est joignable par téléphone chaque jour jusqu’à votre retour.',
    'Email': 'E-mail',
    '@trip-fine': 'L’itinéraire, les lodges et les activités peuvent changer selon la faune et la météo. <a href="terms.html">Conditions générales</a> et <a href="privacy.html">notice de confidentialité</a> (en anglais).',

    /* trip page: dynamic */
    'No trip here yet': 'Pas encore de voyage ici',
    'We could not find an active trip for {email}. Trip pages close 3 months after the trip ends. If you expect one, write to': 'Nous n’avons trouvé aucun voyage actif pour {email}. Les pages de voyage se ferment 3 mois après la fin du voyage. Si vous en attendez un, écrivez à',
    'and we will sort it out.': 'et nous réglerons cela.',
    'Welcome, {name}.': 'Bienvenue, {name}.',
    'days until your safari begins on {date}': 'jours avant le début de votre safari le {date}',
    'You are on safari. Enjoy every moment.': 'Vous êtes en safari. Savourez chaque instant.',
    'Welcome back. We hope it was unforgettable.': 'Bon retour. Nous espérons que ce fut inoubliable.',
    'days': 'jours', 'nights': 'nuits', 'day': 'jour', 'night': 'nuit', 'countries': 'pays', 'country': 'pays', 'places': 'lieux', 'gorilla trek': 'trek aux gorilles',
    'Day {n}': 'Jour {n}',
    'Stay': 'Hébergement',
    'Meals': 'Repas',
    'Based in {place}': 'Basé en {place}',
    '{n} day': '{n} jour', '{n} days': '{n} jours', '{n} night': '{n} nuit', '{n} nights': '{n} nuits',
    '{amount} paid ({pct}%)': '{amount} payé ({pct} %)',
    'Fully paid': 'Entièrement payé',
    '{amount} remaining': '{amount} restant',
    'Received on': 'Reçu le',
    'Due on': 'À payer le',
    'Due': 'À payer',
    'Balance payment': 'Paiement du solde',
    ', {n} days before departure': ', {n} jours avant le départ',
    'Paid': 'Payé',
    'Confirmed': 'Confirmé',
    'Pending': 'En attente',
    'A booking is confirmed once at least 50% of the price is received. The balance is due {n} days before the safari starts. The full terms and conditions will be linked here.': 'Une réservation est confirmée dès qu’au moins 50 % du prix est reçu. Le solde est dû {n} jours avant le début du safari. Les conditions complètes seront accessibles ici.',
    'Start with the payment.': 'Commencez par le paiement.',
    'These bookings are still pending with us.': 'Ces réservations sont encore en attente chez nous.',
    '1 item left on your checklist.': 'Il reste 1 point sur votre liste.',
    '{n} items left on your checklist.': 'Il reste {n} points sur votre liste.',
    'Everything is in place. See you in Kenya.': 'Tout est en place. À bientôt au Kenya.',
    'Needs attention': 'À traiter',
    'Some things are overdue': 'Certains points sont en retard',
    'Coming up soon': 'Bientôt à échéance',
    '1 thing needs your attention before you travel.': '1 point demande votre attention avant le départ.',
    '{n} things need your attention before you travel.': '{n} points demandent votre attention avant le départ.',
    '{done} of {total} done': '{done} sur {total} faits',
    'Payments, bookings and your checklist. Complete them to earn all four stamps.': 'Paiements, réservations et liste de préparation. Complétez-les pour obtenir les quatre tampons.',
    'Earned': 'Obtenu',
    '1 item left': '1 point restant',
    '{n} items left': '{n} points restants',
    '1 stay pending': '1 hébergement en attente',
    '{n} stays pending': '{n} hébergements en attente',
    '{n}% there': '{n} % atteint',
    'Not yet': 'Pas encore',
    'View': 'Voir',
    'See what’s missing': 'Voir ce qui manque',
    'Deposit paid': 'Acompte payé',
    'Stays confirmed': 'Hébergements confirmés',
    'Documents ready': 'Documents prêts',
    'Ready to go': 'Prêt à partir',
    'Stamp earned: {label}': 'Tampon obtenu : {label}',
    'Could not save your tick. Check your connection and try again.': 'Impossible d’enregistrer votre case cochée. Vérifiez votre connexion et réessayez.',
    '{n} day overdue': '{n} jour de retard',
    '{n} days overdue': '{n} jours de retard',
    'Due today': 'À payer aujourd’hui',
    'Due in {n} day': 'Dans {n} jour',
    'Due in {n} days': 'Dans {n} jours',
    'Payments': 'Paiements',
    'Checklist': 'Liste',
    'Readiness by topic': 'Préparation par thème',
    'Fully paid. Thank you!': 'Entièrement payé. Merci !',
    '{amount} due by {date}, {n} days before departure. Contact Rafael to pay.': '{amount} à régler avant le {date}, soit {n} jours avant le départ. Contactez Rafael pour payer.',

    /* standard texts that come with every new trip */
    'Your private safari, day by day.': 'Votre safari privé, jour après jour.',
    'Your guide for the whole journey': 'Votre guide pendant tout le voyage',
    'Accommodation as listed in the itinerary': 'Hébergement comme indiqué dans l’itinéraire',
    'All park and conservation fees': 'Tous les droits d’entrée des parcs et de conservation',
    'Airport pickups and transfers': 'Accueils à l’aéroport et transferts',
    'International flights': 'Vols internationaux',
    'Travel and medical insurance (mandatory)': 'Assurance voyage et médicale (obligatoire)',
    'Personal expenses, drinks and tips': 'Dépenses personnelles, boissons et pourboires',
    'Deposit': 'Acompte',
    'Final balance': 'Solde final',
    'Documents': 'Documents',
    'Health': 'Santé',
    'Packing': 'Bagages',
    'Passport': 'Passeport',
    'Valid for at least 6 months after you return.': 'Valable au moins 6 mois après votre retour.',
    'Travel insurance': 'Assurance voyage',
    'Mandatory. Check it covers medical care and trip cancellation.': 'Obligatoire. Vérifiez qu’elle couvre les soins médicaux et l’annulation du voyage.',
    'Not included in the package.': 'Non inclus dans le forfait.',
    'Vaccinations and malaria advice': 'Vaccins et conseils antipaludiques',
    'Check with your travel clinic about 6 weeks before departure.': 'Renseignez-vous auprès de votre centre de médecine des voyages environ 6 semaines avant le départ.',
    'Personal medication': 'Médicaments personnels',
    'Bring enough for the whole trip, plus a few spare days.': 'Prévoyez de quoi tenir tout le voyage, plus quelques jours de réserve.',
    'Clothing': 'Vêtements',
    'Neutral colours for game drives and a warm layer for early mornings.': 'Couleurs neutres pour les safaris et une couche chaude pour les petits matins.',
    'Small US dollar notes': 'Petites coupures en dollars US',
    'Handy for tips and small purchases.': 'Pratique pour les pourboires et les petits achats.',
    'Cancellation & Refund Policy. A booking is considered confirmed upon receipt of at least 50% (or the full amount) into our bank accounts or offices. The remaining balance must always be paid 14 days before the start of the safari.': 'Conditions d’annulation et de remboursement. Une réservation est considérée comme confirmée dès réception d’au moins 50 % (ou du montant total) sur nos comptes bancaires ou dans nos bureaux. Le solde restant doit toujours être réglé 14 jours avant le début du safari.'
  };

  /* ---------------- Spanish (usted) ---------------- */
  DICT.es = {
    /* login */
    'Client Login — Kabani Safaris': 'Acceso de clientes — Kabani Safaris',
    'Your safari, all in one place.': 'Su safari, todo en un solo lugar.',
    'Your itinerary, your guide, your payments and your checklist, kept up to date.': 'Su itinerario, su guía, sus pagos y su lista de preparación, siempre al día.',
    'Back to kabanisafaris.com': 'Volver a kabanisafaris.com',
    'Client login': 'Acceso de clientes',
    'Enter the email address you gave us when you booked. We will send you a one-time code.': 'Introduzca el correo electrónico que nos dio al reservar. Le enviaremos un código de un solo uso.',
    'Email address': 'Correo electrónico',
    'Continue with your email': 'Continuar con su correo electrónico',
    'One-time code': 'Código de un solo uso',
    'Sign in': 'Iniciar sesión',
    'Send a new code': 'Enviar un código nuevo',
    'Use a different email': 'Usar otro correo electrónico',
    'Not you? Use a different email': '¿No es usted? Usar otro correo electrónico',
    'You are signed out. Press Continue and we will send you a new code.': 'Ha cerrado sesión. Pulse Continuar y le enviaremos un código nuevo.',
    'Sign out? You will need a new code to come back.': '¿Cerrar sesión? Necesitará un código nuevo para volver.',
    '@login-hint': '¿Aún no es cliente? <a href="https://kabanisafaris.com/plan-your-journey.html">Planifique su viaje</a>. Su viaje aparece aquí en cuanto Rafael lo haya preparado con su correo electrónico.',
    'Privacy': 'Privacidad',
    'Terms': 'Condiciones',
    'Signing you in…': 'Iniciando sesión…',
    'Send a new code in {n}s': 'Código nuevo en {n} s',
    'The portal is not configured yet.': 'El portal aún no está configurado.',
    'For your security, you were signed out after 30 minutes without activity. Please sign in again.': 'Por su seguridad, su sesión se cerró tras 30 minutos de inactividad. Vuelva a iniciar sesión.',
    'Please enter a valid email address.': 'Introduzca un correo electrónico válido.',
    'Sending…': 'Enviando…',
    'Too many requests. Please wait a minute and try again.': 'Demasiadas solicitudes. Espere un minuto e inténtelo de nuevo.',
    'If {email} has a trip with us, a code is on its way. It can take a minute.': 'Si {email} tiene un viaje con nosotros, el código va en camino. Puede tardar un minuto.',
    'The code has {n} digits.': 'El código tiene {n} dígitos.',
    'Checking…': 'Comprobando…',
    'That code did not work. Check it, or send a new one.': 'Ese código no funcionó. Compruébelo o solicite uno nuevo.',
    'A new code is on its way.': 'Un código nuevo va en camino.',

    /* trip page: menu and sections */
    'Your Trip — Kabani Safaris': 'Su viaje — Kabani Safaris',
    'Open menu': 'Abrir el menú',
    'Close menu': 'Cerrar el menú',
    'Client portal': 'Portal de clientes',
    'Overview': 'Resumen',
    'Itinerary': 'Itinerario',
    'Your guide': 'Su guía',
    'Pricing': 'Precios',
    'Your trip': 'Su viaje',
    'Travel eSIM': 'eSIM de viaje',
    'Contact': 'Contacto',
    'Back to admin': 'Volver a administración',
    'Back to website': 'Volver al sitio web',
    'Signed in as': 'Sesión iniciada como',
    'Sign out': 'Cerrar sesión',
    'Trip readiness': 'Preparación del viaje',
    'Milestones': 'Hitos',
    'Your itinerary, day by day': 'Su itinerario, día a día',
    'Tap a day to open it. Rafael adjusts details around wildlife and weather, and you always see the latest version here.': 'Toque un día para abrirlo. Rafael ajusta los detalles según la fauna y el clima, y aquí siempre verá la última versión.',
    'Your investment': 'Su inversión',
    'Amount paid': 'Importe pagado',
    'Included': 'Incluido',
    'Not included': 'No incluido',
    'What Kabani Safaris offers': 'Lo que ofrece Kabani Safaris',
    'Your trip, step by step': 'Su viaje, paso a paso',
    'What is confirmed, and what is left for you to do before you travel.': 'Lo que está confirmado y lo que le queda por hacer antes de viajar.',
    'Bookings': 'Reservas',
    'Before you travel': 'Antes de viajar',
    'Checklist progress': 'Progreso de la lista',
    'Stay connected with a travel eSIM': 'Manténgase conectado con una eSIM de viaje',
    'No roaming bills and no SIM card. Activated in minutes, in more than 190 countries.': 'Sin facturas de roaming ni tarjeta SIM. Se activa en minutos, en más de 190 países.',
    'Get your eSIM': 'Obtener su eSIM',
    'Asante sana. Questions?': 'Asante sana. ¿Preguntas?',
    'Rafael is available by phone every day until you are back home.': 'Rafael está disponible por teléfono todos los días hasta su regreso a casa.',
    'Email': 'Correo',
    '@trip-fine': 'El itinerario, los alojamientos y las actividades pueden cambiar según la fauna y el clima. <a href="terms.html">Condiciones</a> y <a href="privacy.html">aviso de privacidad</a> (en inglés).',

    /* trip page: dynamic */
    'No trip here yet': 'Aún no hay ningún viaje aquí',
    'We could not find an active trip for {email}. Trip pages close 3 months after the trip ends. If you expect one, write to': 'No encontramos ningún viaje activo para {email}. Las páginas de viaje se cierran 3 meses después de que termine el viaje. Si espera uno, escriba a',
    'and we will sort it out.': 'y lo resolveremos.',
    'Welcome, {name}.': 'Le damos la bienvenida, {name}.',
    'days until your safari begins on {date}': 'días para el inicio de su safari el {date}',
    'You are on safari. Enjoy every moment.': 'Está de safari. Disfrute cada momento.',
    'Welcome back. We hope it was unforgettable.': 'Bienvenido de vuelta. Esperamos que haya sido inolvidable.',
    'days': 'días', 'nights': 'noches', 'day': 'día', 'night': 'noche', 'countries': 'países', 'country': 'país', 'places': 'lugares', 'gorilla trek': 'trekking de gorilas',
    'Day {n}': 'Día {n}',
    'Stay': 'Alojamiento',
    'Meals': 'Comidas',
    'Based in {place}': 'Con base en {place}',
    '{n} day': '{n} día', '{n} days': '{n} días', '{n} night': '{n} noche', '{n} nights': '{n} noches',
    '{amount} paid ({pct}%)': '{amount} pagado ({pct} %)',
    'Fully paid': 'Pagado por completo',
    '{amount} remaining': '{amount} pendiente',
    'Received on': 'Recibido el',
    'Due on': 'Vence el',
    'Due': 'Por pagar',
    'Balance payment': 'Pago del saldo',
    ', {n} days before departure': ', {n} días antes de la salida',
    'Paid': 'Pagado',
    'Confirmed': 'Confirmado',
    'Pending': 'Pendiente',
    'A booking is confirmed once at least 50% of the price is received. The balance is due {n} days before the safari starts. The full terms and conditions will be linked here.': 'Una reserva queda confirmada cuando se recibe al menos el 50 % del precio. El saldo vence {n} días antes del inicio del safari. Aquí se enlazarán las condiciones completas.',
    'Start with the payment.': 'Empiece por el pago.',
    'These bookings are still pending with us.': 'Estas reservas siguen pendientes con nosotros.',
    '1 item left on your checklist.': 'Queda 1 punto en su lista.',
    '{n} items left on your checklist.': 'Quedan {n} puntos en su lista.',
    'Everything is in place. See you in Kenya.': 'Todo está listo. Nos vemos en Kenia.',
    'Needs attention': 'Requiere atención',
    'Some things are overdue': 'Algunos puntos están vencidos',
    'Coming up soon': 'Próximos vencimientos',
    '1 thing needs your attention before you travel.': '1 punto requiere su atención antes de viajar.',
    '{n} things need your attention before you travel.': '{n} puntos requieren su atención antes de viajar.',
    '{done} of {total} done': '{done} de {total} hechos',
    'Payments, bookings and your checklist. Complete them to earn all four stamps.': 'Pagos, reservas y su lista de preparación. Complételos para conseguir los cuatro sellos.',
    'Earned': 'Conseguido',
    '1 item left': 'Queda 1 punto',
    '{n} items left': 'Quedan {n} puntos',
    '1 stay pending': '1 alojamiento pendiente',
    '{n} stays pending': '{n} alojamientos pendientes',
    '{n}% there': '{n} % completado',
    'Not yet': 'Todavía no',
    'View': 'Ver',
    'See what’s missing': 'Ver lo que falta',
    'Deposit paid': 'Depósito pagado',
    'Stays confirmed': 'Alojamientos confirmados',
    'Documents ready': 'Documentos listos',
    'Ready to go': 'Listo para partir',
    'Stamp earned: {label}': 'Sello conseguido: {label}',
    'Could not save your tick. Check your connection and try again.': 'No se pudo guardar su marca. Compruebe su conexión e inténtelo de nuevo.',
    '{n} day overdue': '{n} día de retraso',
    '{n} days overdue': '{n} días de retraso',
    'Due today': 'Vence hoy',
    'Due in {n} day': 'Vence en {n} día',
    'Due in {n} days': 'Vence en {n} días',
    'Payments': 'Pagos',
    'Checklist': 'Lista',
    'Readiness by topic': 'Preparación por tema',
    'Fully paid. Thank you!': 'Pagado por completo. ¡Gracias!',
    '{amount} due by {date}, {n} days before departure. Contact Rafael to pay.': '{amount} a pagar antes del {date}, {n} días antes de la salida. Contacte con Rafael para pagar.',

    /* standard texts that come with every new trip */
    'Your private safari, day by day.': 'Su safari privado, día a día.',
    'Your guide for the whole journey': 'Su guía durante todo el viaje',
    'Accommodation as listed in the itinerary': 'Alojamiento según el itinerario',
    'All park and conservation fees': 'Todas las tasas de parques y conservación',
    'Airport pickups and transfers': 'Recogidas en el aeropuerto y traslados',
    'International flights': 'Vuelos internacionales',
    'Travel and medical insurance (mandatory)': 'Seguro de viaje y médico (obligatorio)',
    'Personal expenses, drinks and tips': 'Gastos personales, bebidas y propinas',
    'Deposit': 'Depósito',
    'Final balance': 'Saldo final',
    'Documents': 'Documentos',
    'Health': 'Salud',
    'Packing': 'Equipaje',
    'Passport': 'Pasaporte',
    'Valid for at least 6 months after you return.': 'Válido al menos 6 meses después de su regreso.',
    'Travel insurance': 'Seguro de viaje',
    'Mandatory. Check it covers medical care and trip cancellation.': 'Obligatorio. Compruebe que cubre la asistencia médica y la cancelación del viaje.',
    'Not included in the package.': 'No incluido en el paquete.',
    'Vaccinations and malaria advice': 'Vacunas y consejos sobre la malaria',
    'Check with your travel clinic about 6 weeks before departure.': 'Consulte con su centro de medicina del viajero unas 6 semanas antes de la salida.',
    'Personal medication': 'Medicación personal',
    'Bring enough for the whole trip, plus a few spare days.': 'Lleve suficiente para todo el viaje, más unos días de reserva.',
    'Clothing': 'Ropa',
    'Neutral colours for game drives and a warm layer for early mornings.': 'Colores neutros para los safaris y una capa de abrigo para las mañanas tempranas.',
    'Small US dollar notes': 'Billetes pequeños de dólares',
    'Handy for tips and small purchases.': 'Útiles para propinas y pequeñas compras.',
    'Cancellation & Refund Policy. A booking is considered confirmed upon receipt of at least 50% (or the full amount) into our bank accounts or offices. The remaining balance must always be paid 14 days before the start of the safari.': 'Política de cancelación y reembolso. Una reserva se considera confirmada al recibir al menos el 50 % (o el importe total) en nuestras cuentas bancarias u oficinas. El saldo restante debe pagarse siempre 14 días antes del inicio del safari.'
  };

  /* ---------------- helpers ---------------- */
  window.t = function (s, v) {
    var d = DICT[LANG], r = (d && d[s] != null) ? d[s] : s;
    if (v) r = r.replace(/\{(\w+)\}/g, function (_, k) { return v[k] != null ? v[k] : '{' + k + '}'; });
    return r;
  };
  /* "1 day" or "3 days" in the visitor's language: tn(n, 'one text', 'many text') */
  window.tn = function (n, one, many, v) { v = v || {}; v.n = n; return t(n === 1 ? one : many, v); };

  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  function applyStatic(root) {
    if (LANG === 'en') return;
    var d = DICT[LANG];
    [].forEach.call(document.querySelectorAll('[data-th]'), function (el) {
      var r = d['@' + el.getAttribute('data-th')]; if (r != null) el.innerHTML = r;
    });
    var w = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null), nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(function (n) {
      var p = n.parentNode; if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return;
      var raw = n.nodeValue, k = norm(raw); if (!k) return;
      var r = d[k]; if (r == null) return;
      n.nodeValue = raw.match(/^\s*/)[0] + r + raw.match(/\s*$/)[0];
    });
    ['placeholder', 'aria-label', 'title', 'alt'].forEach(function (a) {
      [].forEach.call(document.querySelectorAll('[' + a + ']'), function (el) {
        var r = d[norm(el.getAttribute(a))]; if (r != null) el.setAttribute(a, r);
      });
    });
    var tt = d[norm(document.title)]; if (tt != null) document.title = tt;
  }
  window.applyStatic = applyStatic;

  /* the EN / FR / ES switch */
  var NAMES = { en: 'English', fr: 'Français', es: 'Español' };
  function buildSwitch(el) {
    if (!LANGUAGES_ON || document.documentElement.getAttribute('data-lang-fixed')) { el.hidden = true; return; }
    el.setAttribute('role', 'group'); el.setAttribute('aria-label', 'Language');
    el.innerHTML = SUP.map(function (c) {
      return '<button type="button" data-lang="' + c + '" lang="' + c + '" aria-label="' + NAMES[c] + '" aria-pressed="' + (c === LANG) + '">' + c.toUpperCase() + '</button>';
    }).join('');
    el.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-lang]'); if (!b) return;
      try { localStorage.setItem(KEY, b.getAttribute('data-lang')); } catch (x) {}
      var u = new URL(location.href);
      if (u.searchParams.has('lang')) { u.searchParams.delete('lang'); location.replace(u.href); } else location.reload();
    });
  }
  function init() {
    applyStatic();
    [].forEach.call(document.querySelectorAll('[data-lang-switch]'), buildSwitch);
  }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();

import React, { useState, useEffect } from 'react';
import {  Menu, X , ArrowRight, Database,Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Code, Brain, TrendingUp, ChevronDown, Download, Sparkles, Zap, Target, BookOpen, Briefcase } from 'lucide-react';
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showFMDSDetail, setShowFMDSDetail] = useState(false);
  const [fmdsProject, setFmdsProject] = useState(null);
  const [showAgriTechDetail, setShowAgriTechDetail] = useState(false);
  const [agriTechProject, setAgriTechProject] = useState(null);
  const [showTimsoftDetail, setShowTimsoftDetail] = useState(false);
  const [timsoftProject, setTimsoftProject] = useState(null);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchFMDSDetails = () => {
    const detailedFMDS = {
      title: "IA & IoT pour Maintenance Prédictive des Roulements",
      badge: "🏆 Projet Phare FMDS - Industrie 4.0",
      description: "Architecture hybride LSTM-GRU pour prédiction de durée de vie résiduelle (RUL) avec analyse FMDS complète dans le cadre de l'Industrie 4.0.",
      tech: ["Python", "TensorFlow", "LSTM-GRU", "XGBoost", "IoT Sensors", "Random Forest", "SVM", "Scikit-learn"],
      highlights: [
        "96.5% précision prédictive (R²)",
        "MAE: 7.34h sur durée de vie résiduelle",
        "Dashboard temps réel FMDS",
        "Analyse vibratoire multi-capteurs",
        "Détection d'anomalies avec Isolation Forest"
      ],
      type: "Deep Learning & IoT - Maintenance Prédictive",
      impact: "Réduction 70% arrêts non planifiés, +20% disponibilité équipements, optimisation coûts maintenance 30-40%",
      metrics: ["R²: 0.965", "MTBF: 143h", "Disponibilité: 96.8%", "MAE: 7.34h"],
      
      contexte: {
        titre: "Contexte Industriel 4.0",
        contenu: "Transition vers l'Industrie 4.0 avec convergence IoT et IA pour transformer la maintenance traditionnelle en maintenance prédictive intelligente. Focus sur les roulements mécaniques, responsables de 45% des arrêts non planifiés dans les machines tournantes."
      },
      
      objectifs: {
        titre: "Objectifs du Projet",
        items: [
          "Instrumenter et monitorer un système roulement via capteurs vibratoires et thermiques IoT",
          "Développer des algorithmes prédictifs capables d'anticiper les défaillances plusieurs cycles à l'avance",
          "Quantifier l'amélioration des indicateurs FMDS (Fiabilité, Maintenabilité, Disponibilité, Sécurité)",
          "Établir un cadre méthodologique reproductible pour l'optimisation de la maintenance prédictive"
        ]
      },
      
      methodologie: {
        titre: "Approche Méthodologique Duale",
        approches: [
          {
            nom: "Étude de Cas Réelle",
            description: "Utilisation du dataset 'Bearing Failure Test 2004' (IMS Bearing Data Set) avec 984 fichiers sur 7 jours",
            techniques: ["Prétraitement des signaux vibratoires", "Extraction de caractéristiques temporelles/fréquentielles", "Fenêtrage des signaux", "Détection d'anomalies Isolation Forest"],
            resultats: ["XGBoost: R²=0.9999", "Random Forest: R²=0.9749-0.9998", "SVR: R²=0.8281-0.9103"]
          },
          {
            nom: "Étude de Cas Simulée",
            description: "Génération de dataset synthétique avec 15 roulements sur 168h, modèles physiques de vibration et dégradation",
            techniques: ["Modèle LSTM-GRU hybride", "Classification SVM (AUC=0.995)", "Analyse FMDS complète", "Modélisation Wiener pour dégradation"],
            resultats: ["MAE: 7.34h", "R²: 0.965", "Disponibilité: 96.82%", "MTBF: 143.39h"]
          }
        ]
      },
      
      resultats: {
        titre: "Résultats Clés FMDS",
        indicateurs: [
          { indicateur: "MTBF (Fiabilité)", valeur: "143.39h", interpretation: "Temps moyen entre pannes - Distribution Weibull (β=15.728)" },
          { indicateur: "MTTR (Maintenabilité)", valeur: "4.71h", interpretation: "Temps moyen de réparation - Distribution log-normale" },
          { indicateur: "Disponibilité", valeur: "96.82%", interpretation: "Performance opérationnelle excellente" },
          { indicateur: "Sécurité (RPN)", valeur: "192 max", interpretation: "Risk Priority Number - Dégradation avancée critique" }
        ],
        modeles: [
          { nom: "XGBoost", performance: "R²: 0.9779-0.9999", avantage: "Meilleures performances sur données réelles" },
          { nom: "LSTM-GRU", performance: "MAE: 7.34h, R²: 0.965", avantage: "Exploitation des dépendances temporelles" },
          { nom: "SVM Classification", performance: "Accuracy: 96%, AUC: 0.995", avantage: "Détection robuste des états de santé" }
        ]
      },
      
      architecture: {
        titre: "Architecture Technique",
        composants: [
          "Capteurs IoT: Accéléromètre haute fréquence (0.5-10 kHz), Thermique (-40°C à 125°C), Courant intelligent",
          "Traitement: Fenêtrage signaux, extraction caractéristiques (RMS, Kurtosis, Spectral Centroid)",
          "ML: Random Forest, XGBoost, SVM, Isolation Forest",
          "Deep Learning: LSTM-GRU bidirectional avec BatchNormalization et Dropout",
          "Analyse: Matrices corrélation, feature selection, validation croisée"
        ]
      },
      
      innovation: {
        titre: "Innovations et Contributions",
        points: [
          "Validation approche FMDS 4.0 avec amélioration significative des indicateurs",
          "Robustesse méthodologique via combinaison données réelles + simulation",
          "Architecture LSTM-GRU hybride optimisée pour séries temporelles industrielles",
          "Cadre reproductible pour maintenance prédictive dans l'Industrie 4.0"
        ]
      },
      
      perspectives: {
        titre: "Perspectives et Applications Industrielles",
        applications: [
          "Aéronautique: surveillance turbines et systèmes critiques",
          "Énergie: éoliennes, centrales électriques",
          "Ferroviaire: essieux, motorisations",
          "Automobile: chaînes de production robotisées"
        ],
        recherches: [
          "Transfer Learning entre équipements",
          "Attention Mechanisms pour LSTM",
          "Federated Learning multi-sites",
          "Explainable AI pour justification décisions"
        ]
      }
    };
    
    setFmdsProject(detailedFMDS);
    setShowFMDSDetail(true);
  };

  const fetchAgriTechDetails = () => {
    const detailedAgriTech = {
      title: "AgriTech Hydroponique - Full Stack & ML",
      badge: "🌱 Innovation AgTech",
      description: "Plateforme mobile intelligente avec capteurs IoT pour gestion hydroponique. Recommandations personnalisées par ML et surveillance multi-paramètres.",
      tech: ["React Native", "NestJS", "PostgreSQL", "Random Forest", "Gradient Boosting", "IoT Sensors"],
      highlights: [
        "Dashboard temps réel",
        "96% précision recommandations",
        "Multi-langue",
        "API Weather intégrée"
      ],
      type: "Full Stack & IoT",
      impact: "Optimisation 40% consommation eau, +30% rendement cultures",
      metrics: ["F1-Score: 0.96", "Uptime: 99.5%", "5+ langues"],
      
      contexte: {
        titre: "Contexte AgriTech",
        contenu: "Face aux défis de l'agriculture moderne (raréfaction eau, changement climatique), développement d'une solution hydroponique intelligente combinant IoT et ML pour optimiser la production agricole."
      },
      
      objectifs: {
        titre: "Objectifs du Projet",
        items: [
          "Surveillance temps réel des paramètres hydroponiques (pH, EC, température)",
          "Recommandations personnalisées par ML selon cultures et conditions",
          "Optimisation automatique de la consommation d'eau et nutriments",
          "Interface mobile multilingue accessible aux agriculteurs"
        ]
      },
      
      methodologie: {
        titre: "Architecture Full Stack",
        approches: [
          {
            nom: "Backend & API",
            description: "Architecture microservices avec NestJS et base PostgreSQL",
            techniques: ["REST API", "WebSocket temps réel", "Authentication JWT", "Data validation"],
            resultats: ["99.5% uptime", "Latence <100ms", "Scalabilité horizontale"]
          },
          {
            nom: "Mobile & IoT",
            description: "Application React Native avec intégration capteurs IoT",
            techniques: ["Real-time dashboard", "Push notifications", "Offline mode", "Multi-langue (5+)"],
            resultats: ["Interface intuitive", "Synchronisation temps réel", "Support iOS/Android"]
          }
        ]
      },
      
      resultats: {
        titre: "Résultats et Impact",
        indicateurs: [
          { indicateur: "Précision ML", valeur: "96%", interpretation: "F1-Score sur recommandations cultures" },
          { indicateur: "Économie Eau", valeur: "40%", interpretation: "Réduction consommation vs hydro traditionnel" },
          { indicateur: "Rendement", valeur: "+30%", interpretation: "Augmentation production cultures" },
          { indicateur: "Disponibilité", valeur: "99.5%", interpretation: "Uptime système sur 6 mois" }
        ],
        modeles: [
          { nom: "Random Forest", performance: "F1: 0.96", avantage: "Classification robuste types cultures" },
          { nom: "Gradient Boosting", performance: "MAE: 0.12 pH", avantage: "Prédiction pH optimal" }
        ]
      },
      
      fonctionnalites: {
        titre: "Fonctionnalités Clés",
        modules: [
          "Dashboard temps réel: visualisation tous paramètres (pH, EC, temp, humidité)",
          "Alertes intelligentes: notifications push selon seuils critiques",
          "Recommandations ML: suggestions cultures, nutriments, calendrier",
          "Historique données: graphiques évolution sur 6 mois",
          "API Weather: intégration prévisions météo locales",
          "Multi-utilisateurs: gestion fermes et accès équipes"
        ]
      },
      
      innovation: {
        titre: "Innovations Techniques",
        points: [
          "Fusion données IoT + API externes pour recommandations contextuelles",
          "Architecture microservices scalable pour support multi-fermes",
          "Interface mobile intuitive adaptée agriculteurs (faible alphabétisation numérique)",
          "Pipeline ML automatique avec retraining périodique sur nouvelles données"
        ]
      },
      
      perspectives: {
        titre: "Évolutions Futures",
        applications: [
          "Extension aquaponie (poissons + plantes)",
          "Computer Vision pour détection maladies",
          "Marketplace produits hydroponiques",
          "Formation en ligne agriculteurs"
        ],
        recherches: [
          "RL pour optimisation automatique nutriments",
          "Edge AI sur Raspberry Pi",
          "Blockchain traçabilité production",
          "Intégration IoT solar-powered"
        ]
      }
    };
    
    setAgriTechProject(detailedAgriTech);
    setShowAgriTechDetail(true);
  };

  const fetchTimsoftDetails = () => {
    const detailedTimsoft = {
      title: "Prévision du Chiffre d'Affaires avec Machine Learning",
      badge: "💼 Business Intelligence - Timsoft Group",
      description: "Système de prévision avancé du chiffre d'affaires mensuel utilisant l'analyse de séries temporelles et le machine learning pour optimiser la planification stratégique.",
      tech: ["Python", "Scikit-learn", "Ridge Regression", "Random Forest", "Gradient Boosting", "Power BI", "Pandas", "Matplotlib"],
      highlights: [
        "80.2% précision prédictive (R²)",
        "MAE: 6,008 DT sur prévisions mensuelles",
        "Analyse complète du portefeuille clients",
        "Détection des risques de concentration",
        "Dashboard interactif Power BI"
      ],
      type: "Data Science - Time Series Forecasting",
      impact: "+25% précision prévisions, optimisation trésorerie 15-20K DT/mois, support expansion Maroc",
      metrics: ["R²: 0.802", "MAE: 6,008 DT", "MAPE: 23%", "Précision: 80.2%"],
      
      contexte: {
        titre: "Contexte Business Critique",
        contenu: "Timsoft Group confrontée à une volatilité élevée du CA (écart-type 18,500 DT, ±40% de la moyenne) et une concentration dangereuse des revenus (35% du CA dépend d'un seul client). Nécessité urgente d'outils prédictifs pour la planification stratégique et l'expansion internationale."
      },
      
      objectifs: {
        titre: "Objectifs Stratégiques",
        items: [
          "Optimisation de la trésorerie : Anticiper les mois de faible CA pour ajuster les dépenses (économies 15,000-20,000 DT/mois)",
          "Support à la croissance internationale : Prévisions fiables pour l'expansion au Maroc (objectif : tripler le CA marocain d'ici 2026)",
          "Amélioration de la négociation commerciale : Identification des périodes optimales de prospection",
          "Réduction des risques : Détection précoce des dépendances clients critiques"
        ]
      },
      
      methodologie: {
        titre: "Approche Data Science CRISP-DM",
        etapes: [
          {
            nom: "Data Migration & Cleaning",
            description: "Consolidation de 4 fichiers Excel (2022-2025) avec 500+ transactions",
            actions: [
              "Standardisation des formats et devises (EUR→DT, USD→DT)",
              "Traitement des valeurs manquantes (15% → 0%)",
              "Création de variables dérivées (marge, saisonnalité)",
              "Validation des outliers (transaction à 110,000 DT légitime)"
            ]
          },
          {
            nom: "Analyse Exploratoire (EDA)",
            description: "Compréhension approfondie des patterns et risques business",
            insights: [
              "Concentration client : Habibo = 35% du CA total (196,000 DT)",
              "Volatilité mensuelle : Écart-type 18,500 DT",
              "Distribution géographique : France 42.4%, Tunisie 38.8%, Maroc 6.1%",
              "Opportunité Maroc : Potentiel de triplement du CA"
            ]
          },
          {
            nom: "Modélisation ML",
            description: "Benchmark de 4 algorithmes avec validation croisée",
            modeles: [
              "Ridge Regression (sélectionné) : R²=0.802, MAE=6,008 DT",
              "Linear Regression : R²=0.625, MAE=7,731 DT",
              "Gradient Boosting : R²=0.601, MAE=7,205 DT",
              "Random Forest : R²=0.474, MAE=7,896 DT"
            ]
          }
        ]
      },
      
      resultats: {
        titre: "Résultats Business Concrets",
        performances: [
          { indicateur: "Précision Globale (R²)", valeur: "80.2%", objectif: "70%", statut: "Dépassé" },
          { indicateur: "Erreur Moyenne Absolue", valeur: "6,008 DT", objectif: "<7,000 DT", statut: "Dépassé" },
          { indicateur: "Erreur Relative (MAPE)", valeur: "23%", objectif: "<25%", statut: "Dépassé" },
          { indicateur: "Intervalle Confiance", valeur: "±7,171 DT", objectif: "±8,000 DT", statut: "Dépassé" }
        ],
        insights_business: [
          "Identification du risque client Habibo (35% du CA)",
          "Détection saisonnalité : creux février-mars, pics septembre-octobre",
          "Opportunité marché Maroc sous-exploité (6.1% du CA)",
          "Optimisation allocation ressources commerciales"
        ]
      },
      
      architecture: {
        titre: "Architecture Technique",
        composants: [
          "Data Pipeline : Consolidation automatique fichiers Excel multi-années",
          "Preprocessing : Standardisation devises, traitement valeurs manquantes, feature engineering",
          "Modélisation : Benchmark 4 algorithmes avec validation croisée k-fold",
          "Évaluation : Métriques R², MAE, RMSE, MAPE avec interprétation business",
          "Visualisation : Dashboards Power BI avec prévisions et intervalles confiance"
        ],
        stack: {
          "Langage": "Python 3.9+",
          "ML Libraries": "Scikit-learn, Pandas, NumPy",
          "Visualisation": "Matplotlib, Seaborn, Power BI",
          "Environnement": "Jupyter Notebook, VS Code"
        }
      },
      
      innovation: {
        titre: "Innovations et Valeur Ajoutée",
        points: [
          "Approche pragmatique adaptée aux contraintes réelles (dataset limité)",
          "Sélection Ridge Regression pour optimal biais-variance sur données corrélées",
          "Intégration métriques business dans l'évaluation technique",
          "Feuille de route d'amélioration progressive avec objectifs quantifiés"
        ]
      },
      
      recommendations: {
        titre: "Recommandations Stratégiques",
        court_terme: [
          "Diversification base clients (réduire dépendance Habibo <25%)",
          "Campagnes ciblées avril/octobre (périodes optimales)",
          "Développement marché Maroc (potentiel x3)",
          "Automatisation collecte données via CRM"
        ],
        moyen_terme: [
          "Architecture MLOps avec MLflow et monitoring continu",
          "Intégration variables externes (indicateurs économiques)",
          "Extension modèles par client/région",
          "Formation équipes commerciales à l'utilisation des prévisions"
        ]
      },
      
      perspectives: {
        titre: "Perspectives d'Amélioration",
        roadmap: [
          { horizon: "6 mois", objectif: "R² 0.900", actions: "Données hebdomadaires, features additionnelles" },
          { horizon: "12 mois", objectif: "R² 0.850", actions: "Variables externes, historique 5+ ans" },
          { horizon: "24 mois", objectif: "R² 0.800", actions: "Modèles ensemble, deep learning" }
        ],
        impact_potentiel: [
          "Optimisation trésorerie : 30-40K DT/mois",
          "Réduction risques concentration client : 50%",
          "Croissance marché Maroc : +200% en 2 ans",
          "Automatisation décisions commerciales : 80% des cas"
        ]
      }
    };
    
    setTimsoftProject(detailedTimsoft);
    setShowTimsoftDetail(true);
  };

 const projects = [
   {
      title: "Prévision CA avec Machine Learning - Timsoft",
      badge: "💼 Business Intelligence",
      description: "Système de prévision de chiffre d'affaires avec benchmark complet de 5 algorithmes ML sur 4 ans de données historiques. Pipeline ML de bout en bout avec monitoring des performances.",
      tech: ["Python", "Pandas", "Scikit-learn", "Gradient Boosting", "ARIMA", "Random Forest", "Ridge Regression", "SQL", "Excel", "GitHub"],
      highlights: ["+25% précision", "Pipeline production", "Feature engineering", "Analyses temporelles et géographiques", "Optimisation hyperparamètres"],
      type: "Data Science",
      impact: "+25% de précision business avec modèles prédictifs en production",
      metrics: ["Validation croisée", "5 algorithmes", "4 ans données", "Monitoring continu"],
      isTimsoft: true
    },
    {
      title: "IA & IoT pour Maintenance Prédictive des Roulements",
      badge: "🏆 Projet Phare",
      description: "Architecture hybride LSTM-GRU-XGBoost pour prédiction de durée de vie (RUL) avec validation croisée stratifiée. Système de diagnostic prédictif avec 3 modèles de classification.",
      tech: ["Python", "TensorFlow", "Keras", "LSTM-GRU", "XGBoost", "SVM", "Random Forest", "Scikit-learn"],
      highlights: ["96% précision", "GridSearchCV", "+12% performances", "ROC/AUC: 0.94", "Feature engineering avancé"],
      type: "Deep Learning & IoT",
      impact: "Système de diagnostic avec classification et prédiction RUL optimisés",
      metrics: ["R²: 0.96", "AUC: 0.94", "F1-Score élevé", "Matrices confusion"],
      isFMDS: true
    },
    {
      title: "AgriTech Hydroponique - Full Stack & ML",
      badge: "🌱 Innovation AgTech",
      description: "Application mobile intelligente pour gestion de systèmes hydroponiques. Surveillance temps réel des paramètres critiques (pH, température, nutriments, humidité) avec recommandations ML.",
      tech: ["React Native", "NestJS", "PostgreSQL", "Machine Learning", "IoT", "GitHub"],
      highlights: ["Dashboard interactif", "Surveillance temps réel", "État santé automatique", "Recommandations ML", "IoT sensors"],
      type: "Full Stack & IoT",
      impact: "Génération automatique de l'état de santé des plantes avec collecte et analyse de données IoT en temps réel",
      metrics: ["Pipeline ML complet", "Feature engineering", "Preprocessing avancé"],
      isAgriTech: true
    },
    {
      title: "VoiceGAN - Conversion Vocale par Deep Learning",
      badge: "🎤 Deep Learning Avancé",
      description: "Architecture hybride CNN-Transformer-GAN pour transformation de signaux audio avec apprentissage adversarial. Encodeurs duaux (contenu linguistique et style prosodique) avec générateur adversarial.",
      tech: ["Python", "PyTorch", "TensorFlow", "CNN", "GANs", "Transformers", "Librosa", "HiFi-GAN"],
      highlights: ["Architecture hybride", "Encodeurs duaux", "Pipeline complet", "Génération temps réel", "Preprocessing audio avancé"],
      type: "Deep Learning",
      impact: "Transformation vocale avec architectures Deep Learning complexes et synthèse en temps réel",
      metrics: ["CNNs", "Transformers", "GANs", "Feature extraction audio"]
    },
    {
      title: "Chatbot Intelligent NLP - ITGust",
      badge: "🤖 NLP & IA Conversationnelle",
      description: "Conception et déploiement d'un chatbot intelligent sur Telegram avec pipeline NLP complet. Classification multi-algorithmes avec Speech-to-Text et Text-to-Speech intégrés.",
      tech: ["Python", "Scikit-learn", "NLTK", "SpeechRecognition", "Telegram Bot API", "Naive Bayes", "Passive Aggressive", "GitHub"],
      highlights: ["85% taux compréhension", "Speech-to-Text", "Text-to-Speech", "Système modulaire scalable", "Multi-algorithmes"],
      type: "NLP & Machine Learning",
      impact: "85% de taux de compréhension avec amélioration de l'expérience utilisateur",
      metrics: ["Pipeline NLP complet", "Feature extraction", "Classification optimisée"],
      isNLP: true
    },
    {
      title: "Plateforme Gestion Projets Full Stack - Yolio",
      badge: "💻 Full Stack Development",
      description: "Plateforme complète de gestion de projets avec tableaux de bord temps réel. Architecture backend scalable avec bases de données NoSQL optimisées.",
      tech: ["Angular", "Node.js", "Express.js", "MongoDB", "REST APIs", "Data Visualization"],
      highlights: ["Dashboards temps réel", "Architecture scalable", "APIs REST", "Optimisation requêtes", "NoSQL"],
      type: "Full Stack",
      impact: "Plateforme de gestion avec synchronisation des données et visualisation temps réel",
      metrics: ["Backend Node.js", "Frontend Angular", "MongoDB optimisé"],
      isFullStack: true
    },
    {
      title: "Application Mobile Flutter - BAKO MOTOROS",
      badge: "📱 Mobile & Data Engineering",
      description: "Application mobile Flutter avec architecture backend robuste. Dashboards analytiques pour visualisation et monitoring de KPIs (consommation énergétique, paramètres électriques).",
      tech: ["Flutter", "REST APIs", "Real-time Data Processing", "Data Visualization"],
      highlights: ["Architecture robuste", "Dashboards analytiques", "KPIs monitoring", "Intégration APIs", "Temps réel"],
      type: "Mobile & Data Engineering",
      impact: "Monitoring et visualisation de KPIs énergétiques avec synchronisation temps réel",
      metrics: ["Flutter mobile", "Backend intégré","Firebase", "Data Processing"],
      isMobile: true
    }
  ];

  const skills = [
    { 
      category: "Machine Learning", 
      items: ["Random Forest", "XGBoost", "SVM", "Gradient Boosting", "Ensemble Methods"], 
      level: 95,
      icon: <Brain className="w-5 h-5" />
    },
    { 
      category: "Deep Learning", 
      items: ["CNN", "LSTM-GRU", "Transformers", "GANs", "Transfer Learning"], 
      level: 92,
      icon: <Zap className="w-5 h-5" />
    },
    { 
      category: "Séries Temporelles & NLP", 
      items: ["ARIMA", "LSTM-GRU", "NLTK", "spaCy", "Text Classification", "Sentiment Analysis"], 
      level: 90,
      icon: <TrendingUp className="w-5 h-5" />
    },
     { 
      category: "Évaluation Modèles", 
      items: ["Cross-Validation (K-Fold, Stratified)", "GridSearchCV", "ROC/AUC", "Precision-Recall", "F1-Score", "Confusion Matrix"], 
      level: 93,
      icon: <Target className="w-5 h-5" />
    },
    { 
      category: "Frameworks ML/DL", 
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "MLflow"], 
      level: 90,
      icon: <Code className="w-5 h-5" />
    },
    { 
      category: "Data Engineering", 
      items: ["Python", "SQL", "R", "ETL Pipelines", "Data Cleaning"], 
      level: 95,
      icon: <Database className="w-5 h-5" />
    },
    { 
      category: "Front-end & Mobile", 
      items: ["React Native", "Angular", "Flutter", "Data Visualization", "Dashboards interactifs"], 
      level: 85,
      icon: <Code className="w-5 h-5" />
    },
    { 
      category: "Backend & APIs", 
      items: ["Flask", "NestJS", "Node.js", "REST APIs"], 
      level: 85,
      icon: <Target className="w-5 h-5" />
    },
    { 
      category: "Bases de données", 
      items: ["PostgreSQL", "MongoDB", "Firebase","SQL", "Time-series DB"], 
      level: 88,
      icon: <Database className="w-5 h-5" />
    }
  ];
  
  const experiences = [
    {
      company: "Timsoft Group",
      role: "Data Scientist & Machine Learning",
      period: "Juin - Juillet 2025",
      description: "Développement d'un système de prévision de chiffre d'affaires avec benchmark complet de 5 algorithmes ML (Gradient Boosting, ARIMA, Random Forest, Ridge). Pipeline ML complet avec feature engineering, analyses temporelles et géographiques.",
      achievements: ["+25% de précision", "Pipeline ML production", "Monitoring performances", "4 ans de données historiques"],
      technologies: ["Python", "Scikit-learn", "Gradient Boosting", "ARIMA", "SQL"]
    },
    {
      company: "BAKO MOTOROS",
      role: "Data Engineer & Développement d'Applications",
      period: "Août 2025",
      description: "Développement d'application mobile Flutter avec dashboards analytiques pour visualisation de KPIs (consommation énergétique, paramètres électriques). Intégration bases de données et APIs REST.",
      achievements: ["Architecture backend robuste", "Real-time monitoring", "Data visualization", "APIs REST"],
      technologies: ["Flutter", "REST APIs", "Real-time Processing", "Data Viz"]
    },
    {
      company: "ITGust",
      role: "NLP & Machine Learning Engineer",
      period: "Avril 2025",
      description: "Conception et déploiement d'un chatbot intelligent Telegram avec 85% de taux de compréhension. Pipeline NLP complet avec classification multi-algorithmes et intégration Speech-to-Text/Text-to-Speech.",
      achievements: ["85% compréhension", "Système modulaire", "Speech integration", "Déploiement production"],
      technologies: ["Python", "NLTK", "Scikit-learn", "SpeechRecognition", "Telegram API"]
    },
    {
      company: "Yolio",
      role: "Full Stack Developer & Data Management",
      period: "Juin - Juillet 2024",
      description: "Développement d'une plateforme complète de gestion de projets avec tableaux de bord temps réel. Architecture backend scalable avec optimisation des requêtes et création d'APIs REST.",
      achievements: ["Dashboards temps réel", "Architecture scalable", "Optimisation NoSQL", "APIs REST"],
      technologies: ["Angular", "Node.js", "Express.js", "MongoDB", "REST APIs"]
    }
  ];
  const certifications = [
    { name: "Machine Learning Specialization", org: "Stanford / Andrew Ng", year: "2024", icon: "🎓" },
    { name: "Google Data Analytics Professional", org: "Google via Coursera", year: "2024", icon: "📊" },
    { name: "Azure AI Fundamentals (AI-900)", org: "Microsoft", year: "2023", icon: "☁️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'
}`}>
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo avec photo */}
    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveSection('home')}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur-md group-hover:blur-lg transition-all" />
        <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden shadow-lg border-2 border-white/20">
          <img 
          src="/photo3-removebg-preview.png"
          alt="Marwa Khalfallah"
          className="w-full h-full object-cover"
        />
        </div>
      </div>
      <span className="text-xl font-bold text-white hidden sm:block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
        Marwa Khalfallah
      </span>
    </div>

    {/* Menu desktop */}
    <div className="hidden md:flex gap-2">
      {[
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
      ].map(section => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeSection === section.id 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50' 
              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          {activeSection === section.id && (
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-md opacity-50" />
          )}
          <span className="relative">
            {section.label}
          </span>
        </button>
      ))}
    </div>

    {/* Menu mobile (hamburger) */}
    <button 
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all"
    >
      {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
    </button>
  </div>

  {/* Menu mobile dropdown */}
  {mobileMenuOpen && (
    <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/98 backdrop-blur-lg border-t border-purple-500/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
        {[
          { id: 'home', label: 'Home' },
          { id: 'projects', label: 'Projects' },
          { id: 'about', label: 'About' },
          { id: 'experience', label: 'Experience' },
          { id: 'contact', label: 'Contact' }
        ].map(section => (
          <button
            key={section.id}
            onClick={() => {
              setActiveSection(section.id);
              setMobileMenuOpen(false);
            }}
            className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all ${
              activeSection === section.id 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
  <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
    {/* Effets de fond */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
    </div>

    {/* Contenu principal */}
    <div className="max-w-6xl mx-auto text-center relative z-10">
      
      {/* Photo de profil */}
      <div className="relative w-40 h-40 mx-auto mb-8 mt-16 group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl group-hover:blur-2xl transition-all" />
        
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl">
          <img 
          src="/photo3-removebg-preview.png"
          alt="Marwa Khalfallah"
            className="w-full h-full object-cover"
          />
        </div>
        
      </div>

      {/* Titre */}
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
        Marwa <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Khalfallah</span>
      </h1>
      
      {/* Sous-titre */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500" />
        <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
          Data Scientist & AI Engineer
        </p>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-500" />
      </div>

      {/* Description */}
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
        Ingénieure double diplôme <span className="text-purple-400 font-semibold">Mathématiques Appliquées</span> & <span className="text-pink-400 font-semibold">Data Science</span>. 
        Experte en développement de solutions <span className="text-green-400 font-semibold">IA à fort impact business</span> : maintenance prédictive, optimisation, prévisions avancées.
      </p>

      {/* Statistiques */}
      
      <div className="flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
    {[{ label: "Technologies", value: "15+", icon: <Code /> },
      { label: "Projets ML/DL", value: "10+", icon: <Brain /> },
      { label: "Certifications", value: "3", icon: <Award /> }
    ].map((stat, idx) => (
      <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
        <div className="text-purple-400 mb-2 flex justify-center">{stat.icon}</div>
        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-sm text-gray-400">{stat.label}</div>
      </div>
    ))}
  </div>
</div>


      {/* Boutons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a href="mailto:marwa.khalfallah2001@gmail.com" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all flex items-center gap-3 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105">
          <Mail size={20} />
          Me contacter
          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#" className="group px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all flex items-center gap-3 border border-purple-500/20 hover:border-purple-500/50 hover:scale-105">
          <Download size={20} />
          Télécharger CV
          <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Liens sociaux */}
      <div className="flex flex-wrap gap-6  justify-center  text-gray-300">
        <a href="https://www.linkedin.com/in/marwa-khalfallah-9a5177294/" className="flex items-center gap-2 hover:text-purple-400 transition-all hover:scale-110">
          <Linkedin size={24} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a href="https://github.com/Khalfallah2023" className="flex items-center m-6 gap-2 hover:text-pink-400 transition-all hover:scale-110">
          <Github size={24} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a href="tel:+21621958444" className="flex items-center gap-2 hover:text-green-400 transition-all hover:scale-110">
          <Phone size={24} />
          <span className="hidden sm:inline">+216 21 958 444</span>
        </a>
        <span className="flex items-center gap-2">
          <MapPin size={24} className="text-purple-400" />
          <span className="hidden sm:inline">Tunis, Tunisie</span>
        </span>
      </div>
    </div>
  </div>
)}
      {/* Projects Section */}
      {activeSection === 'projects' && (
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Mes Projets Phares</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Solutions IA à fort impact business développées avec rigueur scientifique et innovation technologique
              </p>
            </div>

            <div className="grid gap-8">
              {projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/60 transition-all hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden"
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div className="flex-1">
                        {project.badge && (
                          <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-sm font-bold rounded-full mb-4 border border-yellow-500/30">
                            {project.badge}
                          </span>
                        )}
                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                          {project.title}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-lg">
                          {project.type}
                        </span>
                      </div>
                      
                      <div className="flex gap-2 items-center">
                        {project.isFMDS && (
                          <button
                            onClick={fetchFMDSDetails}
                            className="p-2 rounded-lg bg-slate-800/50 hover:bg-purple-600/20 border border-purple-500/20 hover:border-purple-500/50 transition-all group/arrow"
                            title="Voir les détails FMDS"
                          >
                            <ArrowRight className="text-gray-400 group-hover/arrow:text-purple-400 group-hover/arrow:translate-x-1 transition-all" size={20} />
                          </button>
                        )}
                        {project.isAgriTech && (
                          <button
                            onClick={fetchAgriTechDetails}
                            className="p-2 rounded-lg bg-slate-800/50 hover:bg-green-600/20 border border-green-500/20 hover:border-green-500/50 transition-all group/arrow"
                            title="Voir les détails AgriTech"
                          >
                            <ArrowRight className="text-gray-400 group-hover/arrow:text-green-400 group-hover/arrow:translate-x-1 transition-all" size={20} />
                          </button>
                        )}
                        {project.isTimsoft && (
                          <button
                            onClick={fetchTimsoftDetails}
                            className="p-2 rounded-lg bg-slate-800/50 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/50 transition-all group/arrow"
                            title="Voir les détails Timsoft"
                          >
                            <ArrowRight className="text-gray-400 group-hover/arrow:text-blue-400 group-hover/arrow:translate-x-1 transition-all" size={20} />
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="text-green-400 flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h4 className="text-green-300 font-semibold mb-1">Impact Business</h4>
                          <p className="text-gray-300 text-sm">{project.impact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                        <Target size={16} />
                        Métriques de Performance
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, i) => (
                          <span key={i} className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-mono rounded-lg border border-blue-500/30">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Points Clés</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.highlights.map((h, i) => (
                          <span key={i} className="flex items-center gap-2 px-3 py-2 bg-green-500/10 text-green-300 text-sm rounded-lg border border-green-500/20">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">Stack Technique</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-4 py-2 bg-purple-500/10 text-purple-300 text-sm rounded-lg border border-purple-500/20 hover:bg-purple-500/20 hover:scale-105 transition-all cursor-default">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">À Propos</h2>
              <p className="text-xl text-gray-300">Compétences • Formation • Certifications</p>
            </div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8 hover:border-purple-500/40 transition-all">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                Formation Académique
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
                  <span className="text-purple-400 font-semibold text-sm">2025 - 2026</span>
                  <h4 className="text-2xl font-bold text-white mt-2 mb-2">Mastère de Recherche — Data Science</h4>
                  <p className="text-gray-300 mb-2">Université de Tunis, Tunisie</p>
                  <p className="text-gray-400">Spécialisation : Machine Learning, Deep Learning, Optimisation & Analyse Prédictive</p>
                </div>
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full" />
                  <span className="text-pink-400 font-semibold text-sm">2023 - 2026</span>
                  <h4 className="text-2xl font-bold text-white mt-2 mb-2">Diplôme d'Ingénieur — Mathématiques Appliquées & Modélisation</h4>
                  <p className="text-gray-300 mb-2">École Nationale Supérieure d'Ingénieurs de Tunis (ENSIT)</p>
                  <p className="text-gray-400">Focus : IA, Statistiques Avancées, Modélisation Stochastique, Optimisation</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8 hover:border-purple-500/40 transition-all">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="text-white" size={24} />
                </div>
                Compétences Techniques
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-bold">{skill.category}</span>
                        </div>
                      </div>
                    </div>
                     
                    <p className="text-gray-400 text-sm leading-relaxed">{skill.items.join(' • ')}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                Certifications Professionnelles
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="group bg-slate-700/30 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/40 hover:scale-105 transition-all cursor-pointer">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h4 className="text-white font-bold mb-2 text-lg group-hover:text-purple-300 transition-colors">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{cert.org}</p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full">
                        {cert.year}
                      </div>
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Expérience Professionnelle</h2>
              <p className="text-xl text-gray-300">Stages & Projets Impactants</p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg font-semibold flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span key={i} className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-lg border border-green-500/30">
                        ✓ {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="text-purple-400" size={24} />
                Compétences Transversales
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="text-purple-400" size={28} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Résolution de Problèmes</h4>
                  <p className="text-gray-400 text-sm">Approche analytique et méthodique pour des solutions innovantes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="text-pink-400" size={28} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Pensée Critique</h4>
                  <p className="text-gray-400 text-sm">Analyse rigoureuse et validation des modèles ML/DL</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="text-green-400" size={28} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Vision Business</h4>
                  <p className="text-gray-400 text-sm">Alignement solutions IA avec objectifs stratégiques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Restons en Contact</h2>
              <p className="text-xl text-gray-300">Disponible pour opportunités et collaborations</p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <h3 className="text-3xl font-bold text-white mb-6">Parlons de votre projet</h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Intéressée par des missions en <span className="text-purple-400 font-semibold">Data Science</span>, 
                  <span className="text-pink-400 font-semibold"> Machine Learning</span> ou 
                  <span className="text-green-400 font-semibold"> Deep Learning</span>. 
                  Disponible pour stage PFE (4 a 6 mois) à partir de février 2026.
                </p>
                
                <div className="space-y-4 mb-8">
                  <a href="mailto:marwa.khalfallah2001@gmail.com" className="group flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all border border-purple-500/10 hover:border-purple-500/30">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Mail className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-semibold">marwa.khalfallah2001@gmail.com</p>
                    </div>
                    <ExternalLink className="ml-auto text-gray-400 group-hover:text-purple-400 transition-colors" size={20} />
                  </a>

                  <a href="tel:+21621958444" className="group flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all border border-purple-500/10 hover:border-purple-500/30">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <Phone className="text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Téléphone</p>
                      <p className="text-white font-semibold">+216 21 958 444</p>
                    </div>
                    <ExternalLink className="ml-auto text-gray-400 group-hover:text-green-400 transition-colors" size={20} />
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl border border-purple-500/10">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="text-pink-400" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Localisation</p>
                      <p className="text-white font-semibold">Tunis, Tunisie</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/marwa-khalfallah-9a5177294/" className="flex-1 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a href="https://github.com/Khalfallah2023" className="flex-1 px-6 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105">
                    <Github size={20} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="text-purple-400" size={20} />
                    Langues
                  </h4>
                  <div className="space-y-3">
                    {[
                      { lang: "Français", level: "Courant", color: "blue" },
                      { lang: "Anglais", level: "technique/scientifique", color: "green" },
                      { lang: "Arabe", level: "Natif", color: "purple" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-300">{item.lang}</span>
                        <span className={`px-3 py-1 bg-${item.color}-500/20 text-${item.color}-300 text-sm font-semibold rounded-full`}>
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-500/30">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Disponibilité</h4>
                      <p className="text-green-200 text-sm">Prête à démarrer</p>
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <p className="text-green-300 font-semibold mb-2">💼 Stage PFE (4 a 6 mois)</p>
                    <p className="text-green-200 text-sm">À partir de février 2026</p>
                  </div>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="text-purple-400" size={20} />
                    Domaines d'Intérêt
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Machine Learning",
                      "Deep Learning",
                      "Computer Vision",
                      "NLP / GenAI",
                      "MLOps",
                      "Time Series",
                      "IoT & Edge AI"
                    ].map((domain, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {domain}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
                  <Sparkles className="text-purple-400 mx-auto mb-3" size={32} />
                  <h4 className="text-white font-bold mb-2">Un projet en tête ?</h4>
                  <p className="text-gray-300 text-sm mb-4">Discutons-en autour d'un café ☕</p>
                  <a href="mailto:marwa.khalfallah2001@gmail.com" className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all hover:scale-105">
                    Contactez-moi
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Documents à Télécharger</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "CV Complet", desc: "Format PDF", icon: "📄" },
                  { name: "Portfolio Projets", desc: "Détails techniques", icon: "📊" },
                  { name: "Certificats", desc: "Formations validées", icon: "🏆" }
                ].map((doc, idx) => (
                  <a key={idx} href="#" className="group flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all border border-purple-500/10 hover:border-purple-500/30">
                    <span className="text-3xl">{doc.icon}</span>
                    <div className="flex-1">
                      <p className="text-white font-semibold group-hover:text-purple-300 transition-colors">{doc.name}</p>
                      <p className="text-gray-400 text-sm">{doc.desc}</p>
                    </div>
                    <Download className="text-gray-400 group-hover:text-purple-400 transition-colors" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal FMDS */}
      {showFMDSDetail && fmdsProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-purple-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold text-white">Détails du Projet FMDS</h2>
              <button 
                onClick={() => setShowFMDSDetail(false)}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">{fmdsProject.title}</h1>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold">
                    {fmdsProject.badge}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                    {fmdsProject.type}
                  </span>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{fmdsProject.description}</p>
              </div>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-blue-400" size={24} />
                  {fmdsProject.contexte.titre}
                </h3>
                <p className="text-gray-300 leading-relaxed">{fmdsProject.contexte.contenu}</p>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {fmdsProject.objectifs.titre}
                </h3>
                <ul className="space-y-3">
                  {fmdsProject.objectifs.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-purple-400" size={24} />
                  {fmdsProject.methodologie.titre}
                </h3>
                <div className="space-y-6">
                  {fmdsProject.methodologie.approches.map((approche, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <h4 className="text-lg font-bold text-white mb-3">{approche.nom}</h4>
                      <p className="text-gray-300 text-sm mb-4">{approche.description}</p>
                      
                      <h5 className="text-purple-300 font-semibold mb-2">Techniques utilisées:</h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {approche.techniques.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h5 className="text-green-300 font-semibold mb-2">Résultats:</h5>
                      <div className="space-y-1">
                        {approche.resultats.map((res, i) => (
                          <div key={i} className="text-gray-300 text-sm">• {res}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="text-orange-400" size={24} />
                  {fmdsProject.resultats.titre}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Indicateurs FMDS</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {fmdsProject.resultats.indicateurs.map((ind, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-orange-500/10">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-semibold">{ind.indicateur}</span>
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-bold">
                            {ind.valeur}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{ind.interpretation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Performances des Modèles</h4>
                  <div className="grid gap-4">
                    {fmdsProject.resultats.modeles.map((modele, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-green-500/10">
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <span className="text-white font-bold text-lg">{modele.nom}</span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg font-mono font-bold">
                            {modele.performance}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{modele.avantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  {fmdsProject.architecture.titre}
                </h3>
                <div className="grid gap-3">
                  {fmdsProject.architecture.composants.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-pink-400" size={24} />
                  {fmdsProject.innovation.titre}
                </h3>
                <div className="grid gap-3">
                  {fmdsProject.innovation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-purple-400" size={24} />
                  {fmdsProject.perspectives.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Applications Industrielles</h4>
                  <div className="flex flex-wrap gap-2">
                    {fmdsProject.perspectives.applications.map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Recherches Futures</h4>
                  <div className="grid gap-2">
                    {fmdsProject.perspectives.recherches.map((rech, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                        <span>{rech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <button
                  onClick={() => setShowFMDSDetail(false)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Fermer les Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal AgriTech */}
      {showAgriTechDetail && agriTechProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-green-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-green-500/20 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold text-white">Détails du Projet AgriTech</h2>
              <button 
                onClick={() => setShowAgriTechDetail(false)}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">{agriTechProject.title}</h1>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-bold">
                    {agriTechProject.badge}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                    {agriTechProject.type}
                  </span>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{agriTechProject.description}</p>
              </div>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-blue-400" size={24} />
                  {agriTechProject.contexte.titre}
                </h3>
                <p className="text-gray-300 leading-relaxed">{agriTechProject.contexte.contenu}</p>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {agriTechProject.objectifs.titre}
                </h3>
                <ul className="space-y-3">
                  {agriTechProject.objectifs.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-purple-400" size={24} />
                  {agriTechProject.methodologie.titre}
                </h3>
                <div className="space-y-6">
                  {agriTechProject.methodologie.approches.map((approche, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <h4 className="text-lg font-bold text-white mb-3">{approche.nom}</h4>
                      <p className="text-gray-300 text-sm mb-4">{approche.description}</p>
                      
                      <h5 className="text-purple-300 font-semibold mb-2">Techniques:</h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {approche.techniques.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h5 className="text-green-300 font-semibold mb-2">Résultats:</h5>
                      <div className="space-y-1">
                        {approche.resultats.map((res, i) => (
                          <div key={i} className="text-gray-300 text-sm">• {res}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="text-orange-400" size={24} />
                  {agriTechProject.resultats.titre}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Indicateurs de Performance</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {agriTechProject.resultats.indicateurs.map((ind, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-orange-500/10">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-semibold">{ind.indicateur}</span>
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-bold">
                            {ind.valeur}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{ind.interpretation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Modèles ML</h4>
                  <div className="grid gap-4">
                    {agriTechProject.resultats.modeles.map((modele, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-green-500/10">
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <span className="text-white font-bold text-lg">{modele.nom}</span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg font-mono font-bold">
                            {modele.performance}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{modele.avantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  {agriTechProject.fonctionnalites.titre}
                </h3>
                <div className="grid gap-3">
                  {agriTechProject.fonctionnalites.modules.map((module, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-pink-400" size={24} />
                  {agriTechProject.innovation.titre}
                </h3>
                <div className="grid gap-3">
                  {agriTechProject.innovation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-green-400" size={24} />
                  {agriTechProject.perspectives.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Applications Futures</h4>
                  <div className="flex flex-wrap gap-2">
                    {agriTechProject.perspectives.applications.map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Recherches Futures</h4>
                  <div className="grid gap-2">
                    {agriTechProject.perspectives.recherches.map((rech, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span>{rech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <button
                  onClick={() => setShowAgriTechDetail(false)}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Fermer les Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Timsoft */}
      {showTimsoftDetail && timsoftProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-blue-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold text-white">Détails du Projet Timsoft</h2>
              <button 
                onClick={() => setShowTimsoftDetail(false)}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">{timsoftProject.title}</h1>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold">
                    {timsoftProject.badge}
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                    {timsoftProject.type}
                  </span>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{timsoftProject.description}</p>
              </div>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-red-400" size={24} />
                  {timsoftProject.contexte.titre}
                </h3>
                <p className="text-gray-300 leading-relaxed">{timsoftProject.contexte.contenu}</p>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {timsoftProject.objectifs.titre}
                </h3>
                <ul className="space-y-3">
                  {timsoftProject.objectifs.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-purple-400" size={24} />
                  {timsoftProject.methodologie.titre}
                </h3>
                <div className="space-y-6">
                  {timsoftProject.methodologie.etapes.map((etape, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <h4 className="text-lg font-bold text-white mb-3">{etape.nom}</h4>
                      <p className="text-gray-300 text-sm mb-4">{etape.description}</p>
                      
                      {etape.actions && (
                        <>
                          <h5 className="text-purple-300 font-semibold mb-2">Actions:</h5>
                          <div className="space-y-1 mb-3">
                            {etape.actions.map((action, i) => (
                              <div key={i} className="text-gray-300 text-sm">• {action}</div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {etape.insights && (
                        <>
                          <h5 className="text-green-300 font-semibold mb-2">Insights Business:</h5>
                          <div className="space-y-1">
                            {etape.insights.map((insight, i) => (
                              <div key={i} className="text-gray-300 text-sm">• {insight}</div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {etape.modeles && (
                        <>
                          <h5 className="text-blue-300 font-semibold mb-2">Modèles testés:</h5>
                          <div className="space-y-1">
                            {etape.modeles.map((modele, i) => (
                              <div key={i} className="text-gray-300 text-sm">• {modele}</div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="text-orange-400" size={24} />
                  {timsoftProject.resultats.titre}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Performances vs Objectifs</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {timsoftProject.resultats.performances.map((perf, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-orange-500/10">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-semibold text-sm">{perf.indicateur}</span>
                          <span className={`px-2 py-1 ${
                            perf.statut === 'Dépassé' ? 'bg-green-500/20 text-green-300' : 'bg-orange-500/20 text-orange-300'
                          } rounded text-xs font-bold`}>
                            {perf.statut}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-white">{perf.valeur}</span>
                          <span className="text-gray-400 text-sm">Obj: {perf.objectif}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Insights Business Clés</h4>
                  <div className="grid gap-3">
                    {timsoftProject.resultats.insights_business.map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  {timsoftProject.architecture.titre}
                </h3>
                <div className="grid gap-3 mb-6">
                  {timsoftProject.architecture.composants.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-4 border border-blue-500/10">
                  <h4 className="text-white font-bold mb-3">Stack Technique</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries(timsoftProject.architecture.stack).map(([key, value], idx) => (
                      <div key={idx}>
                        <span className="text-blue-300 font-semibold text-sm">{key}:</span>
                        <span className="text-gray-300 text-sm ml-2">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-pink-400" size={24} />
                  {timsoftProject.innovation.titre}
                </h3>
                <div className="grid gap-3">
                  {timsoftProject.innovation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {timsoftProject.recommendations.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Court Terme (3-6 mois)</h4>
                  <div className="grid gap-2">
                    {timsoftProject.recommendations.court_terme.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Moyen Terme (6-12 mois)</h4>
                  <div className="grid gap-2">
                    {timsoftProject.recommendations.moyen_terme.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-purple-400" size={24} />
                  {timsoftProject.perspectives.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-4">Roadmap d'Amélioration</h4>
                  <div className="space-y-4">
                    {timsoftProject.perspectives.roadmap.map((item, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-purple-300 font-bold">{item.horizon}</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg font-bold">
                            {item.objectif}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{item.actions}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Impact Potentiel Futur</h4>
                  <div className="grid gap-2">
                    {timsoftProject.perspectives.impact_potentiel.map((impact, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        <span>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <button
                  onClick={() => setShowTimsoftDetail(false)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Fermer les Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900/95 border-t border-purple-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Image ronde et petite */}
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-md opacity-50" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden border-2 border-white/20 shadow-lg">
                  <img 
                    src="/photo3-removebg-preview.png"
                    alt="Marwa Khalfallah"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Texte */}
              <div>
                <h3 className="text-white font-bold">Marwa Khalfallah</h3>
                <p className="text-gray-400 text-sm">Data Scientist</p>
              </div>
            </div>
  
  <p className="text-gray-400 text-sm">
    Transformer les données en décisions intelligentes
  </p>
</div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navigation Rapide</h4>
              <div className="space-y-2">
                {['home', 'projets', 'about', 'experience', 'contact'].map(section => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Suivez-moi</h4>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/marwa-khalfallah-9a5177294/" className="w-10 h-10 bg-slate-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="https://github.com/Khalfallah2023" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Github size={20} className="text-white" />
                </a>
                <a href="mailto:marwa.khalfallah2001@gmail.com" className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                  <Mail size={20} className="text-white" />
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-purple-300 text-sm font-semibold mb-1">📧 Contact Direct</p>
                <a href="mailto:marwa.khalfallah2001@gmail.com" className="text-gray-300 text-xs hover:text-white transition-colors">
                  marwa.khalfallah2001@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Marwa Khalfallah • Tous droits réservés
              </p>
              <div className="flex gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <Code size={16} className="text-purple-400" />
                  Développé avec React
                </span>
                <span className="flex items-center gap-2">
                  <Sparkles size={16} className="text-pink-400" />
                  Design moderne
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-110 transition-all z-40"
      >
        <ChevronDown size={24} className="rotate-180" />
      </button>
 
      {/* Modal FMDS */}
      {showFMDSDetail && fmdsProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-purple-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold text-white">Détails Projet FMDS</h2>
              <button 
                onClick={() => setShowFMDSDetail(false)}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">{fmdsProject.title}</h1>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold">
                    {fmdsProject.badge}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                    {fmdsProject.type}
                  </span>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{fmdsProject.description}</p>
              </div>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-blue-400" size={24} />
                  {fmdsProject.contexte.titre}
                </h3>
                <p className="text-gray-300 leading-relaxed">{fmdsProject.contexte.contenu}</p>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {fmdsProject.objectifs.titre}
                </h3>
                <ul className="space-y-3">
                  {fmdsProject.objectifs.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-purple-400" size={24} />
                  {fmdsProject.methodologie.titre}
                </h3>
                <div className="space-y-6">
                  {fmdsProject.methodologie.approches.map((approche, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <h4 className="text-lg font-bold text-white mb-3">{approche.nom}</h4>
                      <p className="text-gray-300 text-sm mb-4">{approche.description}</p>
                      
                      <h5 className="text-purple-300 font-semibold mb-2">Techniques utilisées:</h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {approche.techniques.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h5 className="text-green-300 font-semibold mb-2">Résultats:</h5>
                      <div className="space-y-1">
                        {approche.resultats.map((res, i) => (
                          <div key={i} className="text-gray-300 text-sm">• {res}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="text-orange-400" size={24} />
                  {fmdsProject.resultats.titre}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Indicateurs FMDS</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {fmdsProject.resultats.indicateurs.map((ind, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-orange-500/10">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-semibold">{ind.indicateur}</span>
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-bold">
                            {ind.valeur}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{ind.interpretation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Performances Modèles</h4>
                  <div className="grid gap-4">
                    {fmdsProject.resultats.modeles.map((modele, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-green-500/10">
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <span className="text-white font-bold text-lg">{modele.nom}</span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg font-mono font-bold">
                            {modele.performance}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{modele.avantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  {fmdsProject.architecture.titre}
                </h3>
                <div className="grid gap-3">
                  {fmdsProject.architecture.composants.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-pink-400" size={24} />
                  {fmdsProject.innovation.titre}
                </h3>
                <div className="grid gap-3">
                  {fmdsProject.innovation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-purple-400" size={24} />
                  {fmdsProject.perspectives.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Applications Industrielles</h4>
                  <div className="flex flex-wrap gap-2">
                    {fmdsProject.perspectives.applications.map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Axes de Recherche</h4>
                  <div className="grid gap-2">
                    {fmdsProject.perspectives.recherches.map((rech, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        <span>{rech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <button
                  onClick={() => setShowFMDSDetail(false)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Fermer les Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal AgriTech */}
      {showAgriTechDetail && agriTechProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-green-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-green-500/20 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold text-white">Détails Projet AgriTech</h2>
              <button 
                onClick={() => setShowAgriTechDetail(false)}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">{agriTechProject.title}</h1>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-bold">
                    {agriTechProject.badge}
                  </span>
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                    {agriTechProject.type}
                  </span>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{agriTechProject.description}</p>
              </div>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-blue-400" size={24} />
                  {agriTechProject.contexte.titre}
                </h3>
                <p className="text-gray-300 leading-relaxed">{agriTechProject.contexte.contenu}</p>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {agriTechProject.objectifs.titre}
                </h3>
                <ul className="space-y-3">
                  {agriTechProject.objectifs.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-purple-400" size={24} />
                  {agriTechProject.methodologie.titre}
                </h3>
                <div className="space-y-6">
                  {agriTechProject.methodologie.approches.map((approche, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <h4 className="text-lg font-bold text-white mb-3">{approche.nom}</h4>
                      <p className="text-gray-300 text-sm mb-4">{approche.description}</p>
                      
                      <h5 className="text-purple-300 font-semibold mb-2">Techniques utilisées:</h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {approche.techniques.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <h5 className="text-green-300 font-semibold mb-2">Résultats:</h5>
                      <div className="space-y-1">
                        {approche.resultats.map((res, i) => (
                          <div key={i} className="text-gray-300 text-sm">• {res}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="text-orange-400" size={24} />
                  {agriTechProject.resultats.titre}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Indicateurs de Performance</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {agriTechProject.resultats.indicateurs.map((ind, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-orange-500/10">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-semibold">{ind.indicateur}</span>
                          <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-bold">
                            {ind.valeur}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{ind.interpretation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Performances des Modèles</h4>
                  <div className="grid gap-4">
                    {agriTechProject.resultats.modeles.map((modele, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-green-500/10">
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <span className="text-white font-bold text-lg">{modele.nom}</span>
                          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg font-mono font-bold">
                            {modele.performance}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{modele.avantage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  {agriTechProject.fonctionnalites.titre}
                </h3>
                <div className="grid gap-3">
                  {agriTechProject.fonctionnalites.modules.map((module, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{module}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-pink-400" size={24} />
                  {agriTechProject.innovation.titre}
                </h3>
                <div className="grid gap-3">
                  {agriTechProject.innovation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-green-400" size={24} />
                  {agriTechProject.perspectives.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Applications Futures</h4>
                  <div className="flex flex-wrap gap-2">
                    {agriTechProject.perspectives.applications.map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Axes de Recherche Futures</h4>
                  <div className="grid gap-2">
                    {agriTechProject.perspectives.recherches.map((rech, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span>{rech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <button
                  onClick={() => setShowAgriTechDetail(false)}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Fermer les Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Timsoft */}
      {showTimsoftDetail && timsoftProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl border border-blue-500/30 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 p-6 flex justify-between items-center z-10">
              <h2 className="text-3xl font-bold text-white">Détails Projet Timsoft</h2>
              <button 
                onClick={() => setShowTimsoftDetail(false)}
                className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 hover:text-red-300 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">{timsoftProject.title}</h1>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-bold">
                    {timsoftProject.badge}
                  </span>
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                    {timsoftProject.type}
                  </span>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{timsoftProject.description}</p>
              </div>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <BookOpen className="text-red-400" size={24} />
                  {timsoftProject.contexte.titre}
                </h3>
                <p className="text-gray-300 leading-relaxed">{timsoftProject.contexte.contenu}</p>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-green-400" size={24} />
                  {timsoftProject.objectifs.titre}
                </h3>
                <ul className="space-y-3">
                  {timsoftProject.objectifs.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-purple-400" size={24} />
                  {timsoftProject.methodologie.titre}
                </h3>
                <div className="space-y-6">
                  {timsoftProject.methodologie.etapes.map((etape, idx) => (
                    <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                      <h4 className="text-lg font-bold text-white mb-3">{etape.nom}</h4>
                      <p className="text-gray-300 text-sm mb-4">{etape.description}</p>
                      
                      {etape.actions && (
                        <>
                          <h5 className="text-purple-300 font-semibold mb-2">Actions:</h5>
                          <div className="space-y-1 mb-3">
                            {etape.actions.map((action, i) => (
                              <div key={i} className="text-gray-300 text-sm">• {action}</div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {etape.insights && (
                        <>
                          <h5 className="text-blue-300 font-semibold mb-2">Insights:</h5>
                          <div className="space-y-1 mb-3">
                            {etape.insights.map((insight, i) => (
                              <div key={i} className="text-gray-300 text-sm">• {insight}</div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {etape.modeles && (
                        <>
                          <h5 className="text-green-300 font-semibold mb-2">Modèles testés:</h5>
                          <div className="space-y-1">
                            {etape.modeles.map((modele, i) => (
                              <div key={i} className="text-gray-300 text-sm">• {modele}</div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="text-orange-400" size={24} />
                  {timsoftProject.resultats.titre}
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Performances vs Objectifs</h4>
                  <div className="grid gap-4">
                    {timsoftProject.resultats.performances.map((perf, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-orange-500/10">
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <span className="text-white font-semibold">{perf.indicateur}</span>
                          <div className="flex gap-2 items-center">
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-bold">
                              {perf.valeur}
                            </span>
                            <span className={`px-2 py-1 text-xs font-semibold rounded ${
                              perf.statut === 'Dépassé' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                            }`}>
                              {perf.statut}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">Objectif: {perf.objectif}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Insights Business</h4>
                  <div className="grid gap-2">
                    {timsoftProject.resultats.insights_business.map((insight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-slate-700/20 p-3 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-blue-400" size={24} />
                  {timsoftProject.architecture.titre}
                </h3>
                <div className="grid gap-3 mb-6">
                  {timsoftProject.architecture.composants.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-700/30 rounded-lg p-4 border border-blue-500/10">
                  <h4 className="text-white font-bold mb-3">Stack Technique</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {Object.entries(timsoftProject.architecture.stack).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-blue-300 font-semibold text-sm">{key}:</span>
                        <span className="text-gray-300 text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-pink-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-pink-400" size={24} />
                  {timsoftProject.innovation.titre}
                </h3>
                <div className="grid gap-3">
                  {timsoftProject.innovation.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-800/30 rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-yellow-400" size={24} />
                  {timsoftProject.recommendations.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Court Terme (0-6 mois)</h4>
                  <div className="space-y-2">
                    {timsoftProject.recommendations.court_terme.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-yellow-500/10 p-3 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Moyen Terme (6-12 mois)</h4>
                  <div className="space-y-2">
                    {timsoftProject.recommendations.moyen_terme.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-blue-500/10 p-3 rounded-lg">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-purple-400" size={24} />
                  {timsoftProject.perspectives.titre}
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Roadmap d'Amélioration</h4>
                  <div className="space-y-3">
                    {timsoftProject.perspectives.roadmap.map((item, idx) => (
                      <div key={idx} className="bg-slate-700/30 rounded-lg p-4 border border-purple-500/10">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-white font-bold">{item.horizon}</span>
                          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-bold">
                            Objectif: {item.objectif}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{item.actions}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Impact Potentiel</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {timsoftProject.perspectives.impact_potentiel.map((impact, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300 bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="text-center pt-6">
                <button
                  onClick={() => setShowTimsoftDetail(false)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Fermer les Détails
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-110 transition-all z-40"
      >
        <ChevronDown size={24} className="rotate-180" />
      </button>
    </div>
  );
}

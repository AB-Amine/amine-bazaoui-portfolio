# Technical Skills Content Audit

This audit compares the previous website list with the supplied CV, project descriptions, and available local source. The private CV was read from the project root. The local `dashbord_simple` source includes Kafka, Spark, MongoDB, Streamlit, and integration-oriented test files; the MediGest README documents Python, Streamlit, MongoDB, and Plotly. The CV documents technologies for Khadija AI, Zakat Tracker, an ML project, and a FastAPI/Redis tracking service, but the corresponding project source was not available for independent ownership or implementation checks. The Nexolith source describes collaborative work; it is not treated as proof of individual ownership. A web search did not reliably expose the requested GitHub repositories or hosted Nexolith page, so CV-only and collaborative claims are identified as such.

## Decisions on the previous website skills

| Previous item | Decision | Evidence and reason |
| --- | --- | --- |
| Python | **KEEP** | CV; local analytics and MediGest materials; public GitHub projects listed in the prior project review. |
| TypeScript | **KEEP** | CV lists it for Khadija AI/Zakat Tracker; also present in Nexolith project material. Personal implementation depth should be confirmed. |
| JavaScript | **KEEP** | Public portfolio source was documented in the prior review; also a core language of the current portfolio source. |
| HTML & CSS | **KEEP** | Public portfolio and UniversityWebsite source were documented in the prior review. |
| Algorithms | **REMOVE** | Coursework and internship problem-solving, but an academic topic rather than a concise technology skill. Keep relevant detail in Education/Experience. |
| Statistics | **REMOVE** | CV lists probability/statistics coursework; academic subject belongs in Education, not the technical tools overview. |
| FastAPI & REST APIs | **KEEP / MERGE** | CV describes FastAPI and a documented REST tracking service. Project source is unavailable, so this remains CV-supported. |
| React Native & Expo | **KEEP / MERGE** | CV lists both for mobile projects. Khadija and Zakat Tracker are collaborative/project claims; individual contribution is not assumed. |
| Streamlit | **KEEP** | Directly present in local analytics source and documented for MediGest. |
| Git & GitHub | **KEEP** | CV, 1337 internship description, and project source context. |
| Linux & Bash | **KEEP** | CV and 1337 internship description support Linux/Bash exposure. |
| Docker & Docker Compose | **KEEP / MERGE** | CV lists Docker; local analytics project includes Compose configuration. |
| Python integration testing | **RENAME / REMOVE DETAIL** | Local analytics repository contains integration-oriented test files. Shorten to the clearer `Automated testing` only if desired; omitted from the compact list because files alone do not establish personal ownership or test quality. |
| UML | **REMOVE** | CV mentions UML for the tracking service, but no source was available and it is less useful in the main tools summary. |
| Kafka | **RENAME** | CV and local analytics source support it; use recognizable name `Apache Kafka`. |
| PySpark | **KEEP** | CV and local Structured Streaming implementation. |
| Pandas & NumPy | **SPLIT** | Both are CV-supported and used in project data work; present as separate recognizable libraries. |
| MongoDB | **KEEP** | CV and local analytics source; also documented for MediGest. |
| Redis | **KEEP, CV-SUPPORTED** | CV explicitly describes the FastAPI tracking service using Redis. Its source was unavailable, so do not attach latency/performance claims. |
| SQL | **MOVE** | CV supports SQL; categorize with programming languages. Do not infer PostgreSQL/MySQL. |
| Plotly | **KEEP** | CV and MediGest/analytics project material support dashboard use. |
| Streaming ETL | **REMOVE FROM SKILLS** | It describes a project architecture/capability, not a tool. The analytics project already explains the pipeline. |
| PyTorch | **KEEP, CV-SUPPORTED** | CV names it for model development; no matching project source was independently inspected. |
| TensorFlow / Keras | **KEEP / MERGE, CV-SUPPORTED** | CV lists both and names TensorFlow in the trading project; local trading files are empty, so implementation depth remains unverified. |
| Scikit-learn plus algorithm list | **KEEP / SIMPLIFY** | CV supports scikit-learn; the public ML repository reviewed earlier documents Logistic Regression and SVM. Remove individual methods from the skill label. |
| CNN/RNN/LSTM/attention architectures | **REMOVE FROM SKILLS** | These are methods/architectures, not a concise tool list. Relevant concrete implementation belongs in project descriptions; CV says the trading project uses LSTM/attention but source was unavailable. |
| Transfer learning & fine-tuning | **REMOVE FROM SKILLS** | Methodology detail, not a headline technology; retain only in a project description when implementation is demonstrated. |
| Hugging Face Transformers (BERT) | **SIMPLIFY** | CV supports Hugging Face/BERT; shorten to `Hugging Face Transformers` without duplicating the model name. |
| NLP/LLM methods and Groq/Llama APIs | **SPLIT / SIMPLIFY** | NLP is retained as a broader competency based on the CV and Khadija description. TF-IDF, embeddings, and sentiment analysis are omitted as method detail. Groq/Llama integration is project-specific and CV-only, so not promoted to a general skill. |
| Azure ML (coursework) | **REMOVE FROM SKILLS** | CV/certification support coursework, not demonstrated project deployment. Certifications section is unchanged. |

## Additions and category changes

- **Programming Languages:** JavaScript, TypeScript, and SQL are organized with Python. SQL is supported by the CV; no database vendor is inferred from it.
- **Software Development & Tools:** concise category name; keep verified FastAPI/REST, React Native/Expo, Streamlit, Git/GitHub, Linux/Bash, Docker/Compose, and HTML/CSS.
- **Data Engineering & Analytics:** `Apache Kafka` uses the full recognizable product name; Pandas and NumPy are split. Redis remains because it is explicitly named in the CV, with its evidence limitation noted above.
- **AI & Machine Learning:** `scikit-learn` capitalization is normalized; Hugging Face Transformers, NLP, and Computer Vision are concise labels supported by CV/project descriptions, though several are CV-only or collaborative claims.
- **Not added:** Java, XGBoost, PostgreSQL, MySQL, Hadoop/HDFS, and CI/CD. The reviewed CV/project evidence does not establish an appropriate hands-on claim for these in the main overview; confirm them before adding.

## Final list

The website now shows 24 items across four categories. CV-only claims remain subject to the user's confirmation of hands-on depth and personal contribution, particularly for PyTorch, TensorFlow/Keras, Redis, NLP, Computer Vision, and collaborative mobile work.

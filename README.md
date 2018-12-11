# Installation

# 1. Create local mongo-db
 - docker pull mongo
 - docker run --name zilect-mongo -d -p 27017:27017  mongo:4.0.4
 
# 2. npm install

# Local-Run
 - docker start zilect-mongo
 - sls offline --skipCacheInvalidation
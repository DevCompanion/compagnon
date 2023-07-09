init.app:
	cp .env.example .env
	cp external-modules/composer.json.example external-modules/composer.json
	cp external-modules/composer.lock.example external-modules/composer.lock

composer_ci:
	composer install --no-interaction --no-progress --no-suggest --prefer-dist --optimize-autoloader
	find ./modules/ -type f -name "composer.json" -not -path "./modules/**/vendor/*" -execdir sh -c 'pwd;composer install --no-interaction --no-progress --no-suggest --prefer-dist --optimize-autoloader' \;
	find ./external-modules/ -type f -name "composer.json" -not -path "./external-modules/**/vendor/*" -not -path "./external-modules/vendor/*" -execdir sh -c 'pwd;composer install --no-interaction --no-progress --no-suggest --prefer-dist --optimize-autoloader' \;

npm_ci:
	npm ci
	find ./modules/ -type f -name "package.json" -not -path "./modules/**/node_modules/*" -execdir sh -c 'pwd;npm ci' \;
	find ./external-modules/ -type f -name "package.json" -not -path "./external-modules/**/node_modules/*" -execdir sh -c 'pwd;npm ci' \;
init.app:
	cp .env.example .env
	cp external-modules/composer.json.example external-modules/composer.json
	cp external-modules/composer.lock.example external-modules/composer.lock
	touch database/database.sqlite
	touch database/database.testing.sqlite

composer_ci:
	composer install --no-interaction --no-progress --no-suggest --prefer-dist --optimize-autoloader
	find ./modules/ -type f -name "composer.json" -not -path "./modules/**/vendor/*" -execdir sh -c 'pwd;composer install --no-interaction --no-progress --no-suggest --prefer-dist --optimize-autoloader' \;
	find ./external-modules/ -type f -name "composer.json" -not -path "./external-modules/**/vendor/*" -not -path "./external-modules/vendor/*" -execdir sh -c 'pwd;composer install --no-interaction --no-progress --no-suggest --prefer-dist --optimize-autoloader' \;

npm_ci:
	npm ci
	find ./modules/ -type f -name "package.json" -not -path "./modules/**/node_modules/*" -execdir sh -c 'pwd;npm ci' \;
	find ./external-modules/ -type f -name "package.json" -not -path "./external-modules/**/node_modules/*" -execdir sh -c 'pwd;npm ci' \;

pint:
	./vendor/bin/pint --config=pint.json $(OPTIONS)

test:
	php artisan test --parallel --recreate-databases $(OPTIONS)

playwright.install_deps:
	npx playwright install --with-deps

playwright.generate:
	npx playwright codegen

playwright.test:
	npx playwright test --pass-with-no-tests
	npx playwright test --pass-with-no-tests -c modules/playwright.config.ts

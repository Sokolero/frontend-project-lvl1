install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run
	npm link

lint:
	npx eslint --fix src/ bin/

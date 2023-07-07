.PHONY: run
run:
	@rm -rf renovate.log && touch renovate.log && chmod +x renovate.log
	@docker run --platform linux/amd64 --name renovate_slim --rm \
	--env RENOVATE_GITHUB_TOKEN=$(RENOVATE_GITHUB_TOKEN) \
	--env LOG_LEVEL="debug" \
	-v /var/run/docker.sock:/var/run/docker.sock \
	-v "$(shell pwd)/renovate.config.js:/usr/src/app/config.js" \
	-v "$(shell pwd)/renovate.log:/usr/src/app/renovate.log" \
	renovate/renovate
